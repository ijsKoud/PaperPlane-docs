---
title: "[id]"
id: id
---

# /api/v1/urls/[id]

:::caution

This endpoint requires [authentication](/docs/api/intro#authentication) using an API key.

:::

## GET: Get shorturl details

### Params

-   `[id]`: The shorturl id

### Headers

-   `Authentication: API-KEY-HERE`

### 200 (OK)

| Field     | Type      | Description                                        |
| --------- | --------- | -------------------------------------------------- |
| `date`    | `Date`    | The upload date                                    |
| `domain`  | `string`  | The user this shorturl is from                     |
| `url`     | `string`  | The url this shorturl leads to                     |
| `id`      | `string`  | The name of the shorturl                           |
| `visits`  | `number`  | The amount of visits the shorturl has              |
| `visible` | `boolean` | Whether the shorturl is visible to everyone or not |

```json
{
	"date": "2023-10-17T11:37:49.109Z",
	"domain": "cdn.ijskoud.dev",
	"url": "https://google.com/",
	"id": "8KyUGj0gDfRD",
	"visits": 7,
	"visible": true
}
```
