import { createRouter, createWebHistory } from "vue-router";
import CoachList from "@/pages/coaches/CoachList.vue";
import CoachDetail from "@/pages/coaches/CoachDetail.vue";
import Register from "@/pages/coaches/CoachRegistration.vue";

import Contact from "@/pages/requests/ContactCoach.vue";
import RequestList from "@/pages/requests/RequestList.vue";

import NotFound from "@/pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList },
        {
            path: '/coaches/:id', component: CoachDetail,
            children: [{ path: 'contact', component: Contact }]
        },
        { path: '/register', component: Register },
        { path: '/requests', component: RequestList },
        {
            path: '/:notFound(.*)', component: NotFound
        },
    ]
});

export default router;

