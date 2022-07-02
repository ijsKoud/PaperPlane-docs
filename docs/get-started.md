---
sidebar_position: 1
---

# Get Started

You can install PaperPlane in 2 ways, with Docker (recommended) or without Docker.
If you install the application with Docker, you can enable automatic updating via the [Watchtower](https://containrrr.dev/watchtower/) application for Docker.

## Requirements

- NodeJS: v16.x.x or higher
- At least 20GB of available storage

## Installation: with Docker

:::warning

This guide is a Ubuntu like distro targeted guide, we recommend hosting it on Ubuntu 20.04 or Debian 9/10. Hosting this on Windows (if that is even possible) **is not recommended and will not be supported!**

This guide only shows you how to install PaperPlane via docker, we do **not** cover the installation of Docker itself. If you did not install it already, follow the [`official guide`](https://docs.docker.com/engine/install/)!

:::

### Preparing the data directory

PaperPlane uses a data folder to storage images, database data and the config on. This folder has to be setup before you run the application via Docker, otherwise your files won't be saved.

First create a directory, I am going to create one here `~/paperplane` (this creates a paperplane directory in the home directory of the user you are currently in). After that give the directory the correct permissions, without these permissions, the application will crash.

```bash
$ mkdir ~/paperplane
$ chown 1639:1639 ~/paperplane
```

### Configuring the `.env` file

As always, there is a configurating file you will need to edit. We will only cover the required variables here, however feel free to look at the [Configuration Guide](/docs/config/) if you want to edit every setting.

First of all create the `.env` file, you can easily do that with the following command: `touch .env`. Once finished, open the editor using `nano .env`. This will open up an editor inside your terminal, you can edit the file from there.

There are 2 really important settings you have to edit, one being the **encryption key**. Without the encryption key the application will shut itself down, this is to prevent unencrypted tokens from being sent to the client. To generate a safe encryption key you will need to do the following:

1. Go to [this website](https://passwordsgenerator.net/plus/)
2. Change the `Password Length` to **32 characters** (longer or smaller will crash the application).
3. Disable the setting `Include Symbols`.
4. Press the generate button and copy the generated password.

Once generated, paste the following in your `.env` file:

```conf
ENCRYPTION_KEY="YOUR GENERATED KEY HERE"
```

After that, we have 1 more thing to go, the name generation type. In version 2 the image ids where only generated like this: `aX3bjgC`, after receiving multiple requests to add a zerowidth id generated we've decided to add it after a long time to satisfy everyones needs. You can now choose between the 3 different options:

| ENV KEY   | Example      | Description                                           |
| :-------- | :----------- | :---------------------------------------------------- |
| name      | my-image.png | The name of the image on the uploaders computer       |
| id        | aX3bjgC.png  | The well known randomly generated ID                  |
| zerowidth |              | A Zerowidth ID for the ones who do not like long URLs |

To change the name generation, add the following item to your `.env` file.

```conf
NAME_TYPE="id" # name | id | zerowidth
```

After your configured everything, the file should look something like this

```conf title=".env"
ENCRYPTION_KEY="YOUR GENERATED KEY HERE"
NAME_TYPE="id" # name | id | zerowidth
```

### Downloading and installing the Docker file

First we will need to download the docker file, this is a pretty easy step to do. It may take some time before it is fully downloaded however, this depends on your internet speed.

```bash
$ docker pull ghcr.io/ijskoud/paperplane:v3
```

After the download has finished, you can run the application with the following command. Note: the 3000:3000 is the port the application is listening to, only change the first port if you want to change the port it is listening to. The `~/paperplane` is the directory you created in the first step and where you stored your `.env` file in.

```bash
$ docker run --name=paperplane -d -v ~/paperplane:/paperplane/data -p 3000:3000 ghcr.io/ijskoud/paperplane:v3
```

If the application did not crash, then you are good to go. Feel free to shoot me a message if something went wrong, please check the [Troubleshooting Guide](/docs/troubleshooting) before you do that though.

### OPTIONAL: Enable autoupdating

You can enable autoupdating by using the [Watchtower](https://containrrr.dev/watchtower/) application for Docker. Follow these 2 easy steps to enable it.

```bash
$ docker pull containrrr/watchtower
$ docker run --restart always -d --name=watchtower -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --interval 600
```

## Installation: without Docker

:::warning

This guide is a Ubuntu like distro targeted guide, we recommend hosting it on Ubuntu 20.04 or Debian 9/10. Hosting this on Windows (if that is even possible) **is not recommended and will not be supported!**

We are using **git** in this guide, we do **not** cover the installation of this cli tool. Please install it by following the official guide. We also make use of `yarn`, please install that one as well using `npm i -g yarn`.

:::

### Downloading the application and installing the dependencies

```bash
$ git clone https://github.com/ijsKoud/PaperPlane
$ cd PaperPlane
$ yarn install
```

### Configuring the `.env` file

First create the data directory using `mkdir data` in the PaperPlane folder. After that, move to the data directory (`cd data`) and follow [this guide](#configuring-the-env-file).

### Building and running the application

Move back to the main directory (`cd ..`) and run the following commands.

```bash
$ yarn build
$ yarn start
```

This will only keep the application online until you exit the terminal. You can use pm2 to keep the application on 24/7, to do this install `pm2` and run the following commands:

```bash
$ pm2 start . --name paperplane
$ pm2 startup
```
