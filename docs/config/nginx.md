---
sidebar_position: 3
---

# NGINX Config

:::info

When using Docker, make sure to shutdown the application using `docker kill <id>` and run it again using `docker run --name=paperplane -d -v ~/paperplane:/paperplane/data -p 3000:3000 ghcr.io/ijskoud/paperplane:v3` and change the first 3000 to the desired port.

:::

## Configuring the `.env` file

NGINX is a reverse proxy service that allows you to run multiple web applications on 1 server with the same port.
To set this up with PaperPlane, first make sure you declare a "PORT" variable in the '.env' file. We are going to use port "3000" for this example.

Add the following to your '.env' file and restart the application.

```conf
PORT=3000
```

## Configuring the NGINX config file

Add the following config to the NGINX config file:

```conf title="/etc/nginx/sites-enabled/default.conf"
server {
  listen 80 default_server;
  server_name <your domain>;

  client_max_body_size 100M;

  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

- Replace the "<your domain​>" with your own domain. This is requirement as NGINX looks for the domain when returning a response to the requester.
- Replace the 3000 with the port you configured in the first step.

The `client_max_body_size` is set to `100M` as most people use [Cloudflare](https://dash.cloudflare.com) which has a upload limit of only `100M` on free plans, you can change this to anything you want. As long as it is possible of course.

To make sure that NGINX is using the latest version of your configuration, restart the service using:

- Ubuntu like distros: `systemctl restart nginx`

All that is left to do is to add the IP of the server to the domain and then everything should work!
