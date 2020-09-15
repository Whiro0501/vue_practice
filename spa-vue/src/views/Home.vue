<template>
    <div>
        <h3>Home</h3>
        <button @click="toUsers">ユーザページに行く</button>
        <p>{{ doubleCount }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        doubleCount(){
            return this.$store.getters.doubleCount;
        }
    },
    methods: {
        toUsers() {
            this.$router.push({ 
                name: "users-id-profile",
                params: { id: 1}
             });
        },
    },
};
</script>