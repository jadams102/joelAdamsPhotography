# Joel Adams Photography
Personal porfolio web application for photographer Joel Adams. Site uses Firebase to store images/information and is updatable by the user.

## Getting Started

Clone repository to local machine
Run `npm install` to install dependencies
Add Firebase Web App API keys to new file at joelAdamsPhotography/src/app/api-keys.ts with the following format:
```
export const config = {
    apiKey: [API KEY],
    authDomain: [AUTH DOMAIN],
    databaseURL: [DATABASEURL]
    projectId: [PROJECT ID],
    storageBucket: [STORAGEBUCKET],
    messagingSenderId: [MESSAGINGSENDERID],
    appId: [APPID]
};
```
Run `ng serve` on root directory
Navigate to `http://localhost:4200/#/` and enjoy!

### Prerequisites

Node.js, Angular CLI

## Built With

* [Angular](https://angular.io/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Google Firebase](https://firebase.google.com/) - Used for database, hosting services

## Authors

* **Joel Adams** - *Sole creator* - [jadams102](https://github.com/jadams102)

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc