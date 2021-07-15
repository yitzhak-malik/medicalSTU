// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrlServer:'http://localhost:8080',
  firebaseConfig:{
    apiKey: "AIzaSyA2XhOuiDtk-Vt6GXkzG0iUfvbaYBEXr_g",
    authDomain: "madical-jbh.firebaseapp.com",
    projectId: "madical-jbh",
    storageBucket: "madical-jbh.appspot.com",
    messagingSenderId: "706013495000",
    appId: "1:706013495000:web:d8dff0dabf98b0ad7721ad",
    measurementId: "G-3VP5Y0G500"
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
