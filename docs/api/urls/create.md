---
title: create
---

# /api/v1/urls/create

:::caution

This endpoint requires [authentication](/docs/api/intro#authentication) using an API key.

:::

## POST: Create a shorturl

### Headers

-   `Authentication: API-KEY-HERE`

### Body

| Field     | Type      | Required | Description                                              |
| --------- | --------- | -------- | -------------------------------------------------------- |
| `name`    | `string`  | ❌       | The name of the shorturl                                 |
| `visible` | `boolean` | ✅       | Whether the shorturl should be readable by anyone or not |
| `url`     | `string`  | ✅       | The url the shorturl should lead to                      |

### 200 (OK)

| Field     | Type      | Description                                            |
| --------- | --------- | ------------------------------------------------------ |
| `url`     | `string`  | The created shorturl                                   |
| `visible` | `boolean` | Whether the shorturl should be usable by anyone or not |
| `date`    | `Date`    | The date the shorturl was created at                   |

```json
{
	"url": "https://cdn.ijskoud.dev/r/example_shorturl",
	"visible": true,
	"date": "2023-10-17T11:37:49.109Z"
}
```
