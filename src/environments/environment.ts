// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'https://gateway.marvel.com:443',
  characters: '/v1/public/characters',
  comics: '/v1/public/comics',
  apikey: '4628c614eda4ec83e2212abb7177aac8',
  ts: '1',
  hash: '688b285360f7ef88f839f0c185dbe390'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
