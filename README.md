# xendit assignment

## Hosting URL
You can also access the application via https://naughty-torvalds-fd55f3.netlify.app/ <br>
However, since the apis is serve on `http` but the site is serve on `https`. Chrome will block the apis call due to `mixed content` issue.

In order to allow the application to work properly, you may follow the guide here https://stackoverflow.com/a/24434461 to temporary enable `insecure content` and refresh the site.

## Getting Started

### Prerequisites
Please ensure that you have node install in your local machine.
- NodeJS: https://nodejs.org/en/

### Run in development mode
Your application should start in localhost:3000 by default
```
npm install
npm start
```

### Run in production mode
The application should start in localhost:5000 by default
```
npm install 
npm run build
npm run serve:dist
```

## Unit testing
Due to limited time, the coverage of unit testing only cover `utils/error.test.js` and `utils/formValidation.test.js` as sample.
```
npm run test
```

## Tech Stack
- React + React Router Dom
- Redux + Redux Observable
- Webpack

## Authors
- Benson Toh
- benson_7667@hotmail.com
