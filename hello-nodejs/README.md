[![Stories in Ready](https://badge.waffle.io/arvelt/hello-nodejs.png?label=ready&title=Ready)](https://waffle.io/arvelt/hello-nodejs)
[![Build Status](https://travis-ci.org/arvelt/hello-nodejs.svg?branch=master)](https://travis-ci.org/arvelt/hello-nodejs)

My Todo application to study node.js.

Showing http://todo-4-you.herokuapp.com/

https://waffle.io/arvelt/hello-nodejs

---
How to install node.js

1.install node.js and others

```shell
brew install node
brew install mongodb
npm install express  
npm install express-generator  
(express command file is located under /node_modules, otherwise user -g option)  
```

2.make myapp and install modules
```
express myapp  
cd myapp && npm install
```

3.start myapp  
```
mongod --nojournal --noprealloc --dbpath db
npm start
```

4.deploy heroku  
`npm init`  
make `Procfile` on application root directory  
```
heroku login
heroku create
git push heroku master
```
Application will be deployed to Heroku on commit in the master branch. See .travis.yml


5.tips
- Environment variable is useful to use properly the production and development.  
- When I use oauth authentication, redirect URI is different each production and local, but It would be fixed.
The solution is to register both.
