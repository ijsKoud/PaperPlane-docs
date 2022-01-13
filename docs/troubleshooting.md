# Troubleshooting

## I forgot my password/username, what should I do?

If you forgot your password or username you can create a new user, to do this you have to be logged in on the device you are running PaperPlane on.

1. Go to the PaperPlane directory
2. Run the following command:

```bash
node scripts/createuser
```

this will create a new user (you will lose all your settings by doing this)

## I want to change my domain name, how do I do that?

1. Make sure the domain name is changed on the name registrar (the new domain has the correct IP Address)
2. Go to the PaperPlane directory
3. Change the following item in the `.env` file

```conf title=".env"
NEXT_PUBLIC_DOMAIN="https://old.domain.name" <-- change this to your new domain name (e.x: https://new.domain.name)
```

4. Save the file and run the following command and wait for it to finish:

```bash npm2yarn
npm run build
```

5. After that, restart the application:

```bash
pm2: pm2 restart paperplane (assuming the session name is still paperplane)
node: stop the current session and run `node .` again
```

## Something is broken

If you find a bug or glitch that is not device related, please file a bug report here: https://github.com/DaanGamesDG/paperplane/issues/new

## My ShareX does not upload files anymore

This is probably because you re-generated your token, please download a new config file from the paperplane settings and follow the rest of the guide [here](/docs/uploaders/sharex)

## I get an error while logging in

Errors are not fun, that's why we are here to help you! First of all, open the console (crtl + shift + i => arrow top right corner => console) and check if you see an error. If you see an error like ![](/img/troubleshooting/login-404.png) that means that you either misconfigured your NEXT_PUBLIC_DOMAIN variable or you provided the wrong credentials. If you see a 500 error instead of the 404, that means that you provided an incorrect encryption token. Please visit [this page](/docs/get-started#installation) to see how to obtain a working encryption key. After you re-generated an encryption token, restart your server using "pm2 restart [id] --update-env" if you use pm2 or just "node ." again if you run it using node.
