---
title: "[id]"
id: id
---

# /api/v1/files/[id]

:::caution

This endpoint requires [authentication](/docs/api/intro#authentication) using an API key.

:::

## GET: Get file details

### Params

-   `[id]`: The file id

### Headers

-   `Authentication: API-KEY-HERE`

### 200 (OK)

| Field      | Type       | Description                                       |
| ---------- | ---------- | ------------------------------------------------- |
| `date`     | `Date`     | The upload date                                   |
| `id`       | `string`   | The name of the file                              |
| `password` | `boolean`  | Whether the password protection is enabled or not |
| `size`     | `string`   | The file size as a string                         |
| `views`    | `number`   | The amount of views the file has                  |
| `visible`  | `boolean`  | Whether the file is visible to everyone or not    |
| `domain`   | `string`   | The user this file is from                        |
| `mimeType` | `MimeType` | The file mime-type                                |

```json
{
	"date": "2023-10-17T11:37:49.109Z",
	"id": "8KyUGj0gDfRD.png",
	"password": false,
	"size": "74.1 kB",
	"views": 7,
	"visible": true,
	"domain": "cdn.ijskoud.dev",
	"mimeType": "image/png"
}
```
