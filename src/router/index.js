import Vue from 'vue';
import VueRouter from 'vue-router';

import Shows from '@/components/Shows.vue'
import Data from '@/components/Data.vue'

Vue.use(VueRouter);    // instalamos explícitamente el router
    
export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: Shows,
            name: 'shows',
            props: true
        },
        
        {
            path: '/data/:id', 
            component: Data,
            name: 'data',
            props: true
        },

        {
            path: '/data', 
            component: Data,
            name: 'data',
            props: true
        }
    ]
})