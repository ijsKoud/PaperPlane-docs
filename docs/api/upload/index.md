# /api/v1/upload

:::caution

This endpoint requires [authentication](/docs/api/intro#authentication) using an API key.

:::

## POST: upload file

### Headers

-   `Content-Type: multipart/form-data`
-   `Authentication: API-KEY-HERE`

### Body

To upload more than one file, append multiple `file` fields with a file.

| Field      | Type      | Multiple | Required | Description                    |
| ---------- | --------- | -------- | -------- | ------------------------------ |
| `file`     | `Blob`    | ✅       | ✅       | The file(s) you want to upload |
| `visible`  | `boolean` | ❌       | ❌       | Visibility status              |
| `name`     | `string`  | ❌       | ❌       | A custom file name\*           |
| `password` | `string`  | ❌       | ❌       | File password\*                |

_\* The following fields are ignored if multiple files are provided_

### 200 (OK)

| Field   | Type                     | Description                                              |
| ------- | ------------------------ | -------------------------------------------------------- |
| `url`   | `string`                 | The url of the first uploaded item                       |
| `files` | `Record<string, string>` | Object of uploaded items (original filename, upload url) |

```json
{
	"url": "http://cdn.ijskoud.dev/files/5G48qa0Cr2Xl.png",
	"files": {
		"screenshot.png": "http://cdn.ijskoud.dev/files/5G48qa0Cr2Xl.png"
	}
}
```
