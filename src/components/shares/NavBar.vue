<template>
    <div class="navBar cl-white bg-marvel w-100 d-flex flex-row justify-content-center py-2">
        <router-link :to="{name: 'Favorites'}">
            <h4 class="hover align-self-end">Favorites</h4>
        </router-link>
        <router-link :to="{name: 'Home'}">
            <h3 class="hover mx-4 mt-1">Home</h3>
        </router-link>
        <router-link :to="{name: 'Listing', query: {page: 1, order: 'name'}}">
            <h4 class="hover align-self-end">Listing</h4>
        </router-link>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
a {
  color: inherit;
  display: inherit;
}

a:hover {
  text-decoration: none;
  color: unset;
}

.navBar {
    min-height: 10vh;
}
</style>
