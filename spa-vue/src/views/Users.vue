<template>
    <div>
        <h3>Users</h3>
        <router-link to="/users/1" >ユーザ１</router-link>
        <router-link to="/users/2">ユーザ2</router-link>
        <hr>
        <h1> User No. {{ id }}</h1>
    </div>
</template>


<script>
export default {
    props: ["id"],
    watch: {
        $route: function(to, from){
            console.log(to);
            console.log(from);
            console.log('route!!!');
        }
    },
}
</script>