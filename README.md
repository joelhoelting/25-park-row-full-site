## Installation

### `npm install && npm start`

Install dependencies and run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Developed with Node version `10.13.0`

## Hosting

### Development

Link: [http://25parkrow.full.dbox.com/](http://25parkrow.full.dbox.com/)

There is a development branch of the project living on an AWS s3 bucket and is deployable via the Travis.yml configuration.

### Production

Link: [https://25parkrow.com](https://25parkrow.com)

Site is hosted on a Godaddy VPS Server with NGINX as the web server

This project has a travis.yml config that is set up to deploy to the server via ssh when you `git push`. If you need to directly modify the files or access server please follow guidelines below:

`ssh parkrwadm@132.148.247.87` (Password is in lastpass)

Project Root: `/var/www/html`
Nginx Configuration `/etc/nginx/sites-available/25parkrow`

There is a symlink from the config file in `site-avaiable` and the active configuration in `sites-enabled`. So when you save and modify a file in `sites-available` the changes will also occur in `sites-enabled`. After you make a change to the NGINX config reload NGINX with `sudo nginx -s reload`

There is a script to assist in enabling and disabling NGINX configurations living in `/usr/bin/nginx_modsite`.

`sudo nginx_modsite -l`: List all enabled and disabled configs
`sudo nginx_modsite -e example`: Enable config
`$ sudo nginx_modsite -d test_website` Disable config