// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'API_KEY',
    authDomain: 'angularproject-3cfa9.firebaseapp.com',
    databaseURL: 'https://angularproject-3cfa9.firebaseio.com',
    projectId: 'angularproject-3cfa9',
    storageBucket: 'angularproject-3cfa9.appspot.com',
    messagingSenderId: 'MESSAGING_SENDER_ID'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
