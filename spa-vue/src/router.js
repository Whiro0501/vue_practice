import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Users from './views/Users';
import UsersProfile from './views/UsersProfile';
import UsersPost from './views/UsersPost';
import HeaderUsers from './views/HeaderUsers';
import HeaderHome from './views/HeaderHome';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            components: {
                default: Home,
                header: HeaderHome
            }
        },
        {
            path: "/users/:id",
            components: {
                default: Users,
                header: HeaderUsers
            },
            props: {
                default: true,
                header: false
            },
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
        },
        {
            path: '*', redirect: '/'
        }
    ]
});