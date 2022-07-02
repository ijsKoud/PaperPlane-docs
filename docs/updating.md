---
sidebar_position: 3
---

# Updating

To update PaperPlane, you need to make sure that you did not edit the code on your side. If you did, either reset your changes or don't update at all.

## With Git

1. Go to the PaperPlane directory
2. Run `git pull`, this will pull the new code from GitHub
3. Run the build command:

```bash npm2yarn
npm run build
```

4. Restart the application:

```bash
pm2: pm2 restart paperplane (assuming the session name is still paperplane)
node: stop the current session and run `node .` again
```

## Without git

1. Download the code from GitHub
2. Drag and drop all the files from the downloaded folder into the PaperPlane folder
3. Run the build command:

```bash npm2yarn
npm run build
```

4. Restart the application:

```bash
pm2: pm2 restart paperplane (assuming the session name is still paperplane)
node: stop the current session and run `node .` again
```
