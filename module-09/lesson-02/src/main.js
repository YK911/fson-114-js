// import { load as loadLS, save as saveLS } from '/js/localstorage';

// saveLS('storage-data', {
//   food: 'scramble eggs',
//   recipe: {
//     ingridients: [],
//   },
// });

// const lsData = loadLS('storage-data');
// console.log(' lsData:', lsData);

// import info from './js/localstorage';
// console.log('Info:', info);

// import localstorageInterface from './js/localstorage';

// const { save, load } = localstorageInterface;

// console.log(save);

// import * as lsInterface from './js/localstorage';

// console.log(lsInterface);

import { init } from './js/init-gallery';
import images from './js/images.json';

init(images);
