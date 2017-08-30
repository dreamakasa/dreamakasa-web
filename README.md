# dreamakasa-ui
This is just early-development-stage of our web frontend

## Running Dev Mode
To run on development mode, you need to have [nodejs](https://nodejs.org/), [npm](https://www.npmjs.com/), [gulp](http://gulpjs.com/), and [bower](https://bower.io/) installed on your computer.

### Install Node.js and NPM
You can download and install Node.js from the [official website](https://nodejs.org/). 
NPM comes with nodejs, so you dont need to install it manually

```sh
# check installed node
node -v

# check installed npm
npm -v
```

### Install Gulp

```sh
# install gulp globally
npm install --global gulp-cli

# check installed gulp
gulp -v
```

### Install Bower

```sh
# install bower globally
npm install -g bower

# check installed bower
bower -v
```

### Cloning and Running

First, clone this repo
```sh
# clonning repo
git clone https://github.com/dreamakasa/dreamakasa-web.git
```
Then, install npm and bower packages
```sh
# install npm packages
npm install

# install bower packages
bower install
```

Last step, running whoooyaaa
```sh
# running gulp
gulp serve
```
It should automatically open browser on http://localhost:9000/

