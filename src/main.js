import { createApp } from "vue";
import App from "./App.vue";
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

// // Getting all form component that starts with Base
// const requireComponent = require.context(
//     './components/forms/',
//     false,
//     /Base[A-Z]\w+\.(vue|js)$/)

// //importing all component related to form 
// requireComponent.keys().forEach(fileName => {
//     const componentConfig = requireComponent(fileName)
//     const componentName = upperFirst(
//         camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
//     )
//     app.component(componentName,componentConfig.default || componentConfig)
// });

app.use(router);

app.mount("#app");


// /** webpack */
// const files = require.context(".", false, /\.js$/);
// const modules = {};

// files.keys().forEach(key => {
//     if (key === "./index.js") return;
//     modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
// });

// export default modules;
// /** vite */
// const files = import.meta.globEager("./*.js");

// const modules = {};
// for (const key in files) {
//     // if (key === "./index.js") continue;
//     modules[key.replace(/(\.\/|\.js)/g, "")] = files[key].default;
// }
// console.log(files, modules);

// export default modules;