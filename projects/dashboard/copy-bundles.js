//
// This script copies over UMD bundles to the project's assets folder
// It's called by the npm script npx-build-plus:copy-assets
// If you call it manually, call it from your projects root
// > node projects/important-app//copy-bundles.js
//

const copy = require('copy');

console.log('Copy UMD bundles ...');

copy('node_modules/@angular/*/bundles/*.umd.js', 'projects/important-app/src/assets', {}, _ => {});
copy('node_modules/rxjs/bundles/*.js', 'projects/important-app/src/assets/rxjs', {}, _ => {});
copy('node_modules/zone.js/dist/*.js', 'projects/important-app/src/assets/zone.js', {}, _ => {});
copy('node_modules/core-js/client/*.js', 'projects/important-app/src/assets/core-js', {}, _ => {});

