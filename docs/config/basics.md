# Basics

Here you can find all the available settings for PaperPlane, you need to put them in your `.env` file in order to work. When you change a setting, make sure you follow [this guide](/docs/config/basics#rebuilding-the-application)

## Available Settings

| Setting               | Required           | Value                                                      | Description                                                                     |
| --------------------- | ------------------ | ---------------------------------------------------------- | ------------------------------------------------------------------------------- |
| NEXT_PUBLIC_DOMAIN    | :white_check_mark: | string (ex: https://cdn.daangamesdg.xyz)                   | The domain connected to PaperPlane                                              |
| ENCRYPTION_KEY        | :white_check_mark: | string (get one from https://passwordsgenerator.net/plus/) | The encryption key used to encrypt session tokens                               |
| PORT                  | :x:                | number (a usable port)                                     | The port the server is listening to                                             |
| ALLOWED_EXTENSIONS    | :x:                | string (every extension separated with a ,)                | The extensions that are allowed when uploading files to the cdn                 |
| MAX_FILES_PER_REQUEST | :x:                | number (defaults to Infinity)                              | The maximum amount of files someone can upload per request                      |
| MAX_FILE_SIZE         | :x:                | number (the amount in bytes)                               | The maximum file size                                                           |
| CUSTOM_FILE_NAME      | :x:                | boolean (defaults to false)                                | If the name of the file should be used as name instead of a random generated id |
| FILE_NAME_LENGTH      | :x:                | number (defaults to 8)                                     | The length the name should be when it is automatically generated                |

## Rebuilding the application

1. Build the application

```bash npm2yarn
npm run build
```

2. After that, restart the application:

```bash
pm2: pm2 restart paperplane (assuming the session name is still paperplane)
node: stop the current session and run `node .` again
```
