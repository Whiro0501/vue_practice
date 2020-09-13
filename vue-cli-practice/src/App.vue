<template>
    <div class="main">
        <button @click="show = !show">切り替え</button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
        <transition name="slide" type="animation" appear="">
            <p v-if="show">bye</p>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        };
    },
};
</script>

<style scoped>
.fade-ender {
    opacity: 0;
}
.fade-ender-active {
    transition: opacity 2s;
}
.fade-ender-to {
    opacity: 1;
}
.fade-leave {
    opacity: 1;
}
.fade-leave-active {
    transition: opacity 2s;
}
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active {
    animation: slide-in 0.5px;
}

.slide-leave-active {
    animation: slide-in 0.5s reverse;
}

@keyframes slide-in {
    from {
        transform: translateX(100px);
    }
    to {
        transform: translateX(0px);
    }
}

.main {
    width: 70%;
    margin: auto;
    padding-top: 5rem;
    text-align: center;
}
</style>
