
# Photo-filter



[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)



Photo-filter is a simple app that let users edit an image online.



# Application functionallity


Users can edit a picture with a predefined list of data range input each matching with a CSS characteristics of the image.


- Edit image characteristics

### Future fonctionallities

- Upload an image or add a link of an image
- Export the modified image

## Tech

Photo-filter is configured on Docker using NodeJS with expressJS and a MongoDB for the database:

### Built With

* [Docker](https://www.docker.com/) - operating-system-level virtualization

*  [Node](https://nodejs.org/) - Javascript server-side

*  [ExpressJS](https://expressjs.com/) - Javascript framework for creating Node application

*  [EJS](https://ejs.co/) - Javascript template engine

*  [MongoDB](https://www.mongodb.com/) - Open source noSql database to simply store image path or generated base64



Of course Photo-filter itself is open source with a [public repository](https://github.com/nem95/image-filter) on GitHub.

## Development Installation


### Getting Started


- [x] Clone the repo

```sh

git clone git@github.com:nem95/image-filter.git

```
- [x] Download docker [(here)](https://docs.docker.com/) and install it.




### Installing


#### Docker



- [x] Build :

```

docker-compose build

```

- [x] Start using -d for daemon mode:

```

docker-compose up -d

# remove -d if you want to see logs

docker-compose up

```


- [x] Check running containers:

```

docker ps

```



- [x] You can go in the containers if needed :


```

docker exec -i -t node_c bash

```


  - [x] Now you should access the app here: [http://localhost:8080](http://localhost:8080)

License

----



MIT



[Docker]: <https://www.docker.com/>

[Symfony]: <https://symfony.com/>

[public repository]: <https://github.com/nem95/image-filter>
