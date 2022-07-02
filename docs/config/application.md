---
sidebar_position: 1
---

# Application

Here you can find all the available settings for PaperPlane, you need to put them in your `.env` file in order to work. When you change a setting, make sure you follow [this guide](/docs/config/application#rebuilding-the-application)

## Available Settings

| Setting               | Required           | Value                                                      | Description                                                       |
| --------------------- | ------------------ | ---------------------------------------------------------- | ----------------------------------------------------------------- |
| ENCRYPTION_KEY        | :white_check_mark: | string (get one from https://passwordsgenerator.net/plus/) | The encryption key used to encrypt session tokens                 |
| NAME_TYPE             | :x:                | id, name, zerowidth -> defaults to id                      | The name generation type                                          |
| NAME_LENGTH           | :x:                | number (defaults to 10)                                    | The length the name should be when it is automatically generated  |
| PORT                  | :x:                | number (a usable port)                                     | The port the server is listening to                               |
| EXTENSIONS            | :x:                | string (every extension separated with a ,)                | The file extensions that aren't allowed to be uploaded to the cdn |
| MAX_FILES_PER_REQUEST | :x:                | number (defaults to Infinity)                              | The maximum amount of files someone can upload per request        |
| MAX_FILE_SIZE         | :x:                | number (the amount in bytes)                               | The maximum file size                                             |

## Rebuilding the application

:::info

If you use docker, restart the application using `Docker restart <id>`. The id being the name of the container (if you followed the guide the name will be paperplane).

:::

1. Build the application

```bash npm2yarn
npm run build
```

2. After that, restart the application:

```bash
pm2: pm2 restart paperplane (assuming the session name is still paperplane)
node: stop the current session and run `node .` again
```
