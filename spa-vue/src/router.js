import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Users from './views/Users';
import UsersProfile from './views/UsersProfile';
import UsersPost from './views/UsersPost';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            component: Home
        },
        {
            path: "/users/:id",
            component: Users,
            props: true,
            children: [{
                    path: "posts",
                    component: UsersPost
                },
                {
                    path: "profile",
                    component: UsersProfile,
                    name: "users-id-profile"
                },
            ]
        }
    ]
});