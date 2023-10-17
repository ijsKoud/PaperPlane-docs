---
sidebar_position: 1
title: create
---

# /api/v1/upload/chunk/create

:::caution

This endpoint requires [authentication](/docs/api/intro#authentication) using an API key.

:::

## POST: create a partialFileHandler instance

After creating a partialFileHandler instance, the `id` is valid for **24 hours**.

### Headers

-   `Authentication: API-KEY-HERE`

### Body

| Field      | Type       | Required | Description           |
| ---------- | ---------- | -------- | --------------------- |
| `filename` | `string`   | ❌       | A custom filename     |
| `mimeType` | `MimeType` | ✅       | A valid file mimeType |
| `visible`  | `boolean`  | ✅       | Visibility status     |
| `name`     | `string`   | ❌       | A custom file name    |
| `password` | `string`   | ❌       | File password         |

### 200 (OK)

| Field | Type     | Description               |
| ----- | -------- | ------------------------- |
| `id`  | `string` | The partialFileHandler id |

```json
{
	"id": "handler_id_here"
}
```
