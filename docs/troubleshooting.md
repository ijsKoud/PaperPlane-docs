---
sidebar_position: 2
---

# Troubleshooting

## I forgot my password/username, what should I do?

If you forgot your password/username, the only thing you can do is to delete the `data.db` file in your data directory. This will delete all your file configurations (not the file itself) and settings, but it will reset the username and password to `username` and `password`.

Make sure to restart the application after you deleted it.

```bash
$ docker restart paperplane # for docker
$ pm2 restart paperplane # for pm2
$ node . # for node users
```

## I want to change my domain name, how do I do that?

Nothing in particular, make sure to update the NGINX config if you use NGINX. Update your DNS settings and PaperPlane should still work as usual. Don't forget to download the updated uploader config.

## Something is broken

If you find a bug or glitch that is not device related, please file a bug report here: [Github Issues](https://github.com/ijsKoud/paperplane/issues/new)

## My ShareX does not upload files anymore

This is probably because you re-generated your token, please download a new config file from the paperplane settings and follow the rest of the guide [here](/docs/uploaders/sharex)
