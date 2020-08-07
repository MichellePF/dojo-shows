import Vue from 'vue';
import VueRouter from 'vue-router';

import Shows from '@/components/Shows.vue'
import Data from '@/components/Data.vue'
import Edit from '@/components/Edit.vue'
import NotFound from '@/components/NotFound.vue'

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
            path: '/data/:id/edit', 
            component: Edit,
            name: 'edit',
            props: true
        },

        {
            path: '*', 
            component: NotFound,
        }
    ]
})