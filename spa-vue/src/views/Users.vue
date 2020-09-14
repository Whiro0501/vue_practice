<template>
    <div>
        <h3>Users</h3>
        <router-link to="/users/1">ユーザ１</router-link>
        <router-link to="/users/2">ユーザ2</router-link>
        <hr />
        <h1>User No. {{ id }}</h1>
        <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザ</router-link>
        <hr />
<div style="height:700px;"></div>
        <router-link
        id="next-user"
            :to="{name: 'users-id-profile', params: { id: Number(id) + 1}, query: {lang: 'ja', page: 2}}"
        >次です</router-link>
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    props: ["id"],
    watch: {
        $route: function (to, from) {
            console.log(to);
            console.log(from);
            console.log("route!!!");
        },
    },
};
</script>