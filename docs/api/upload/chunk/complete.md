---
sidebar_position: 3
title: complete
---

# /api/v1/upload/chunk/complete

:::caution

This endpoint requires [authentication](/docs/api/intro#authentication) using an API key.

:::

## POST: Complete the upload

After uploading all chunks, this endpoint should be called. Keep calling this until `status: "FINISHED"` is returned together with an url.
To avoid ratelimits, we recommend implementing a `5 seconds` delay after each request.

### Headers

-   `Authentication: API-KEY-HERE`

### Body

| Field | Type     | Required | Description                        |
| ----- | -------- | -------- | ---------------------------------- |
| `id`  | `string` | ✅       | The partialFileHandler instance id |

### 200 (OK)

| Field    | Type                         | Description                  |
| -------- | ---------------------------- | ---------------------------- |
| `status` | `"FINISHED" \| "PROCESSING"` | The conversion status        |
| `url`    | `string \| null`             | The url to the uploaded file |

```json
{
	"url": null,
	"status": "PROCESSING"
}
```

```json
{
	"url": "http://cdn.ijskoud.dev/files/5G48qa0Cr2Xl.png",
	"status": "FINISHED"
}
```
