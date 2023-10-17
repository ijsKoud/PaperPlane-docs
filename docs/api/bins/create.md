---
title: create
---

# /api/v1/bins/create

:::caution

This endpoint requires [authentication](/docs/api/intro#authentication) using an API key.

:::

## POST: Create a pastebin

### Headers

-   `Authentication: API-KEY-HERE`

### Body

| Field       | Type      | Required | Description                                              |
| ----------- | --------- | -------- | -------------------------------------------------------- |
| `name`      | `string`  | ❌       | The name of the pastebin                                 |
| `visible`   | `boolean` | ✅       | Whether the pastebin should be readable by anyone or not |
| `content`   | `string`  | ✅       | The pastebin content                                     |
| `highlight` | `string`  | ✅       | The pastebin content type                                |
| `password`  | `string`  | ❌       | A password to add to the pastebin                        |

### 200 (OK)

| Field       | Type      | Description                                              |
| ----------- | --------- | -------------------------------------------------------- |
| `url`       | `string`  | The url that leads to the pastebin                       |
| `visible`   | `boolean` | Whether the pastebin should be readable by anyone or not |
| `password`  | `boolean` | Whether password protection is enabled or not            |
| `highlight` | `string`  | The pastebin content type\*                              |
| `date`      | `Date`    | The date the pastebin was created at                     |
| `domain`    | `string`  | The user the pastebin belongs to                         |

\* For a list of highlight types, check out [this list](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/src/languages/hljs/supported-languages.js)

```json
{
	"url": "https://cdn.ijskoud.dev/bins/example_pastebin",
	"visible": true,
	"password": false,
	"highlight": "bash",
	"date": "2023-10-17T11:37:49.109Z",
	"domain": "cdn.ijskoud.dev"
}
```
