---
sidebar_position: 1
---

# API Reference

## Errors

When the API endpoint returns a status other than `200 (OK)` a JSON object will be returned containing the errors.

| Field     | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| `field`   | `string` | The body property that caused this error  |
| `code`    | `string` | The error code associated with this error |
| `message` | `string` | The error message                         |

Below is an example of a response that can be returned:

```json
{
	"errors": [
		{
			"field": "name",
			"code": "FILE_NOT_FOUND",
			"message": "A file with the provided name does not exist"
		}
	]
}
```

## Authentication

Some routes require an `API key` in the `Authentication` header. To get an API key, head over to the /dashboard/settings page on your paperplane dashboard and create a key.
