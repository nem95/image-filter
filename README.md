# Photo-filter

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Photo-filter is a simple app that let users upload images and edit them online.

# Application functionallity

First the user launch the app and upload an image of is computer.
Once uploaded the user will be able to play with a predefined list of data range input each matching with a CSS characteristics of the image.
Once the user is satisfied of the result, he can save it in the application database.


  - Upload image
  - Edit image characteristics
  - Save the edited image

### Tech

Photo-filter is configured on Docker using Symfony 4 and a MySql database:

* [Docker] - operating-system-level virtualization
* [Symfony] - PHP web application framework
* [MySQL] - open source relational database management system

Of course Photo-filte itself is open source with a [public repository]
 on GitHub.

### Development Installation

Photo-filter requires [Docker] to be .

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```


$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version} .
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

License
----

MIT

   [Docker]: <https://www.docker.com/>
   [Symfony]: <https://symfony.com/>
   [MySQL]: <https://www.mysql.com/>
   [public repository]: <https://github.com/>
