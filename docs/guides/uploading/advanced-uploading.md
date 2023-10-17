---
sidebar_position: 2
title: 📦 Chunk File Uploading
---

# 📦 Chunk File Uploading

To start uploading in chunks you will first need an [API key](/docs/api/intro#authentication).

## Creating a partialFileHandler instance

A `partialFileHandlerId` is required to upload the chunks, you can get one by calling the `/api/v1/upload/chunks/create` API endpoint.
The `filename`, `mimeType`, `visible` and `password` can be set here, for more information please refer to the [api reference](/docs/api/upload/chunk/create#body).

```ts
const response = await axios.post("/api/v1/upload/chunk/create", options, {
	headers: { Authorization: "API_KEY_HERE" }
});

const handlerId = response.data.id; // response object { id: string; }
```

This handlerId is valid for **24 hours**, make sure you upload and complete the upload before the end otherwise the uploaded chunks will be deleted from the system.

## Uploading the chunks

With the partialFileHandlerId you can now start uploading the chunks. The API endpoint that you will have to use is `/api/v1/upload/chunk/upload`.
You provide the chunk with the `file` field key and the handlerId with the `partial-file-id` field key: [api reference](/docs/api/upload/chunk/upload#body).

Make sure to upload the chunks in the correct order, during the conversion the worker will sort the chunks by upload date.

```ts
const data = new FormData();
data.set("file", chunk);
data.set("partial-file-id", handlerId);

await axios.post("/api/v1/upload/chunk/upload", data, {
	headers: { "Content-Type": "multipart/form-data", Authorization: "API_KEY_HERE" }
});
```

An empty `204 (No Content)` status should be returned if the upload was successful.

:::tip

Make sure you do not reach the `25` requests per second ratelimit, the best way to avoid this is by uploading chunks of `50.0 MB`.

:::

## Completing the upload

After all the chunks have been uploaded, you can complete the request by calling the `/api/v1/upload/chunk/complete` api endpoint.
This will first tell the server to start the file conversion and return the conversion status.

This endpoint should be called until `status: "FINISHED"` is returned together with an url. Keep in mind that you do not reach the ratelimit, it is recommended that you can this endpoint every `5 seconds`.

```ts
const data = { id: handlerId };
const response = await axios.post("/api/v1/upload/chunk/complete", data, {
	headers: { Authorization: "API_KEY_HERE" }
});

const { status, url } = response.data;
// url is null if the status is not "FINISHED"
```

## Finishing up

After the endpoint returned `status: "FINISHED"` with an url, the file is uploaded and you can now access it. Below you will find an example of how the chunk uploading api is inplemented in the paperplane dashboard.

## TypeScript example

```ts
import axios from "axios";
import { API_KEY } from "./config.js";

export default class FileUploader {
	public readonly uploadRoute = "/api/v1/upload/chunk/upload";
	public readonly createRoute = "/api/v1/upload/chunk/create";
	public readonly completeRoute = "/api/v1/upload/chunk/complete";
	public readonly chunkSize = 50; // 50.0 MB

	/** The file to upload */
	public readonly file: File;
	/** The total amount of chunks for this upload */
	public totalChunks: number;

	public constructor(file: File) {
		this.file = file;
		this.totalChunks = Math.ceil(this.file.size / (this.chunkSize * 1e3 * 1e3));
	}

	public async upload(opt: UploadOptions) {
		if (this.totalChunks === 1) {
			const formData = new FormData();
			formData.append("file", this.file);
			formData.append("visible", `${opt.visible}`);

			const response = await axios.post<any>("/api/v1/upload", formData, {
				headers: { "Content-Type": "multipart/form-data", Authorization: API_KEY }
			});

			return response.data.url;
		}

		const handlerId = await this.getHandlerId(opt);
		for (let i = 0; i < this.totalChunks; i++) {
			const chunk = await this.getNextChunk(i);
			await this.uploadChunk(chunk, handlerId);
		}

		const url = await this.complete(handlerId);
		return url;
	}

	private async complete(id: string) {
		await axios.post(this.completeRoute, { id }, { headers: { Authorization: API_KEY } });
		let fileUrl: string | null = null;

		while (!fileUrl) {
			await new Promise((res) => setTimeout(res, 5e3));
			const response = await axios.post<{ status: string; url: string | null }>(
				this.completeRoute,
				{ id },
				{ headers: { Authorization: API_KEY } }
			);
			fileUrl = response.data.url;
		}

		return fileUrl;
	}

	private async uploadChunk(chunk: Blob, id: string) {
		const formData = new FormData();
		formData.append("file", chunk);
		formData.append("partial-file-id", id);

		await axios.post(this.uploadRoute, formData, {
			headers: { "Content-Type": "multipart/form-data", Authorization: API_KEY }
		});
	}

	/**
	 * Fetches a partialfile handler id
	 * @param opt The file options
	 * @returns
	 */
	private async getHandlerId(opt: UploadOptions) {
		const handler = await axios<{ id: string }>(this.createRoute, {
			data: { visible: opt.visible, filename: opt.name, password: opt.password, mimeType: this.file.type },
			headers: { Authorization: API_KEY },
			method: "POST"
		});
		return handler.data.id;
	}

	/** Returns the next file chunk */
	private getNextChunk(index: number) {
		return new Promise<Blob>((res) => {
			const length = this.chunkSize * 1e3 * 1e3;
			const start = length * index;

			const fileReader = new FileReader();
			fileReader.readAsArrayBuffer(this.file.slice(start, start + length));
			fileReader.onload = () => res(new Blob([fileReader.result!], { type: "application/octet-stream" }));
		});
	}
}

export interface UploadOptions {
	visible: boolean;
	password?: string | undefined;
	name?: string | undefined;
}
```
