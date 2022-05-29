import { createApp } from 'vue/dist/vue.esm-bundler'
const _ = require('lodash')
const $ = require('jquery')

globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

// const myDayApp = {
//     template: "#mainContentApp",
//     mounted(){
//         console.log("DASHBOARD APP")
//     }
// }

const myDayApp = createApp({
    mounted(){
        console.log("MY DAY APP")
    }
}).mount("#myDayApp")

export default myDayApp;