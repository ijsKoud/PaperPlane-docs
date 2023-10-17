---
title: "[id]"
id: id
---

# /api/v1/bins/[id]

:::caution

This endpoint requires [authentication](/docs/api/intro#authentication) using an API key.

:::

## GET: Get pastebin details

### Params

-   `[id]`: The pastebin id

### Headers

-   `Authentication: API-KEY-HERE`

### 200 (OK)

| Field       | Type      | Description                                        |
| ----------- | --------- | -------------------------------------------------- |
| `date`      | `Date`    | The upload date                                    |
| `domain`    | `string`  | The user this pastebin is from                     |
| `highlight` | `string`  | Type of content in the pastebin\*                  |
| `id`        | `string`  | The name of the pastebin                           |
| `views`     | `number`  | The amount of views the pastebin has               |
| `visible`   | `boolean` | Whether the pastebin is visible to everyone or not |
| `password`  | `boolean` | Whether the password protection is enabled or not  |
| `content`   | `string`  | The pastebin content                               |

\* For a list of highlight types, check out [this list](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/languages/hljs/supported-languages.js)

```json
{
	"date": "2023-10-17T11:37:49.109Z",
	"domain": "cdn.ijskoud.dev",
	"highlight": "plaintext",
	"id": "8KyUGj0gDfRD",
	"views": 7,
	"visible": true,
	"password": false,
	"content": "..."
}
```
