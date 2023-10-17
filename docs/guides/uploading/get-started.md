---
sidebar_position: 1
title: ⬆️ Getting Started
---

# ⬆️ Getting Started

You can upload files in 2 ways, using the standard `/api/v1/upload` api endpoint or by using our chunk uploading service.
If you are uploading big files we recommend using the [chunk uploading guide](/docs/guides/uploading/advanced-uploading) to upload files, otherwise this guide already be able to get you started.

You can easily upload files using the `/api/v1/upload` api endpoint. To do this you will first need an [API key](/docs/api/intro#authentication).
The only property which is required is the `file` property, this is the file that you want to upload. A simple TypeScript example is given below on how to use the api.

```ts
// Assuming you have form-data installed and you are using axios for fetch requests
import axios from "axios";
import FormData from "form-data";

const data = new FormData();
data.set("file", File); // file being the file (Blob) you want to upload (required)
data.set("visible", true); // Set the visibilty status (optional)
data.set("name", "custom_file_name_here"); // Set a custom file name (optional)
data.set("password", "secret_password"); // Set a file password (optional)

// upload the file
axios.post("https://cdn.example.com/api/v1/upload", data, {
	headers: { "Content-Type": "multipart/form-data", Authentication: "<API-KEY-HERE>" }
});
```

After the request you will be given a JSON object, this can either be an array of errors or an object with urls.
For more information on the response types, please refer to the [upload api reference](/docs/api/upload).
