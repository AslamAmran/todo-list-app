import '@popperjs/core';
import 'bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler'
const _ = require('lodash')

import 'bootstrap/dist/css/bootstrap.css';

globalThis.__VUE_OPTIONS_API__ = true;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

const layoutApp = createApp({
    data(){
        return{
            //Sidebar default config
            isSidebarOpen: false,
            sidebarClass: "w-20",
            whichHeaderIcon: ["", "hidden"],
            showNavText: ["", "hidden"]
        }
    },
    methods:{
        expandSidebar(){
            if(!this.isSidebarOpen){ //Open side bar
                this.isSidebarOpen = true;
                this.sidebarClass = "w-60"
                this.whichHeaderIcon = ["hidden", ""]
                setTimeout(() => {
                    this.showNavText = ["hidden", ""]
                }, 100)
            }else{ //Close side bar
                this.isSidebarOpen = false;
                this.sidebarClass = "w-20"
                this.whichHeaderIcon = ["", "hidden"]
                this.showNavText = ["", "hidden"]
            }
        }
    },
    computed:{

    },
    component:{

    }
}).mount("#layoutApp")





