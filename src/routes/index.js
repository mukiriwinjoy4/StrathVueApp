import {createRouter, createWebHistory} from 'vue-router'

import HomePage from "./../components/Homepage.vue"
import Events from "./../components/Events.vue"
import Courses from "./../components/Courses.vue"
import ContactUs from "./../components/ContactUs.vue"
import AboutUs from "./../components/AboutUs.vue"
import Library from "./../components/Library.vue"
import Partnerships from "./../components/Partnerships.vue"
import Alumni from "./../components/Alumni.vue"


const routes = [
    {
        path: '/',
        name: 'homepage',
        component: HomePage,
    }, 
    {
        path: '/events',
        name: 'events',
        component: Events,
    },
    {
        path: '/courses',
        name: 'courses',
        component: Courses,
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs,
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs,
    },
    {
        path: '/library',
        name: 'library',
        component: Library,
    },
    {
        path: '/partnerships',
        name: 'partnerships',
        component: Partnerships,
    },
    {
        path: '/alumni',
        name: 'alumni',
        component: Alumni,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router