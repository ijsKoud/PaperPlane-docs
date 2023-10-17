---
title: delete
---

# /api/v1/bins/delete

:::caution

This endpoint requires [authentication](/docs/api/intro#authentication) using an API key.

:::

## GET: Delete a pastebin

### Headers

-   `Authentication: API-KEY-HERE`

### Body

| Field  | Type     | Required | Description                                 |
| ------ | -------- | -------- | ------------------------------------------- |
| `name` | `string` | ✅       | The name of the pastebin you want to delete |

### 204 (No Content)

An empty response should be returned if the request was successful.
