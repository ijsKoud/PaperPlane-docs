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
NEXT_PUBLIC_DOMAIN="old.domain.name" <-- change this to your new domain name
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
