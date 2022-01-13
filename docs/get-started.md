# Get Started

## Requirements

- NodeJS: v16.x.x or higher (might work on v14.x.x, not sure)
- Enough storage to store all the files on

## Installation

Install `git` if you have not already installed it on your machine.

1. Clone the repo using `git clone https://github.com/DaanGamesDG/paperplane (optional: add a directory name here)`
2. Move to the new generated directory (paperplane if you did not give it a name yourself)
3. Create a `.env` file and add the following:

```conf title=".env"
NEXT_PUBLIC_DOMAIN="*"
ENCRYPTION_KEY="**"
```

\*: Add your domain name here, make sure not to forget the https:// (e.x: https://cdn.daangamesdg.xyz)

\*\*: Go to a https://passwordsgenerator.net/plus/ and change the length option to 32 characters, after that press generate. Use this as your encryption key, make sure it is **32 characters long**!!

Make sure to change both fields with the correct information, otherwise the application will fail.

4. Run `node scripts/install`, this will install the server and all required depedencies. (Please don't be inpatient, it may take a while for this process to finish)
5. Once everything is installed run the database installer to create and install the database

```bash npm2yarn
npm run prisma:install
```

6. After, run `node scripts/createuser` and fill in the login credentials you want to use for PaperPlane.
7. Start the server with `yarn start` or `npm start` and everything should work!

## Keeping the application online 24/7

To keep PaperPlane running on your server 24/7, make sure you do the following:

1. Install `pm2`, this will keep PaperPlane online, even if you are not logged in on the server

```bash npm2yarn
npm install
```

2. Once installed, make sure you are in the paperplane directory and do the following:

```bash
pm2 start . --name paperplane
```

this will start a pm2 session with the name `paperplane`

3. To make sure that PaperPlane automatically starts when the device you are running it on reboots, run the following:

```bash
pm2 startup
```

Now PaperPlane is running 24/7 and automatically starts whenever the server is being rebooted!
