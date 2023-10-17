---
sidebar_position: 1
---

# Installation

You can install **paperplane** in two different ways, we recommend using [**docker**](https://docker.io) to install paperplane but you can use **git** as well.

## Installation with Docker

Docker is required if you want to install paperplane with docker.

```bash
# To pull the image
docker pull ghcr.io/ijskoud/paperplane:latest

# To run paperplane
docker run --name=paperplane -d -v ~/paperplane:/paperplane/data -p 3000:3000 ghcr.io/ijskoud/paperplane:latest
```

`~/paperplane` is the directory the data is stored in, you can only change this on first install. If you want to change it later, make sure to move all the data to the new folder before changing the directory.

`3000:3000` is the port the application is listening to, if you want to change this only change the port before the **: (colon)**.

## Installation using git

The following applications are required: [Git](https://git-scm.com/downloads), [NodeJS](https://nodejs.org/) >= v18.x.x and [yarn](https://yarnpkg.com/).

Clone the application:

```bash
git clone https://github.com/ijskoud/paperplane
cd paperplane
```

Install the dependencies and build the application:

```bash
yarn install
yarn build
```

Start paperplane:

```bash
yarn start
```

## After installation

After this the installation is complete and you can start using paperplane. You can change settings via the application itself, to access it open the logs and look for a google URL which leads to an QR-code.
Scan the QR-code with an authenticator app. After that go to your login page, select admin as domain and fill in the authentication code.

## Updating

### Docker

```bash
# To pull the updated image
docker pull ghcr.io/ijskoud/paperplane:latest

# Stop the running container
docker stop paperplane && docker remove paperplane

# Start new container
docker run --name=paperplane -d -v ~/paperplane:/paperplane/data -p 3000:3000 ghcr.io/ijskoud/paperplane:latest
```

### Git

```bash
# Stop the process and after that pull the changes
git pull

# Install the dependencies and build the app
yarn install
yarn build

# Start the application
yarn start
```

#### Watchtower

You can automatically update the paperplane container using watchtower. To install this, follow [this guide](https://containrrr.dev/watchtower/).

### Git
