---
sidebar_position: 2
title: upload
---

# /api/v1/upload/chunk/upload

:::caution

This endpoint requires [authentication](/docs/api/intro#authentication) using an API key.

:::

## POST: upload a chunk

### Headers

-   `Authentication: API-KEY-HERE`
-   `Content-Type: multipart/form-data`

### Body

| Field             | Type     | Required | Description                        |
| ----------------- | -------- | -------- | ---------------------------------- |
| `file`            | `Blob`   | ✅       | The chunk you want to upload       |
| `partial-file-id` | `string` | ✅       | The partialFileHandler instance id |

### 204 (No Content)

An empty response should be returned if the request was successful.
