---
title: delete
---

# /api/v1/urls/delete

:::caution

This endpoint requires [authentication](/docs/api/intro#authentication) using an API key.

:::

## DELETE: Delete a shorturl

### Headers

-   `Authentication: API-KEY-HERE`

### Body

| Field  | Type     | Required | Description                                 |
| ------ | -------- | -------- | ------------------------------------------- |
| `name` | `string` | ✅       | The name of the shorturl you want to delete |

### 204 (No Content)

An empty response should be returned if the request was successful.
