<template>
    <div class="footer bg-black cl-white w-100 d-flex flex-column">
        <h2>©Rollet raphael | creation site internet | 2020</h2>
        <div class="mt-2">
            <a target="_blank" href="https://www.youtube.com/channel/UCJZkKNgLmASmb9EvLQU2saQ?view_as=subscriber">
                <img class="youtube hover mx-2" src="/img/svg/footer/youtube.svg" alt="Lien vers youtube">
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/raphael-rollet/">
                <img class="hover mx-2" src="/img/svg/footer/linkedin.svg" alt="Lien vers linkedin">
            </a>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
img {
    height: 2.5rem;
}

h2 {
    font-size: 1.1rem;
    font-family: 'Luckiest Guy', cursive;
    margin: 0;
}

.footer {
    min-height: 15vh;
    padding: 1.5rem 0;
    align-items: center;
    z-index: 100;
    box-shadow: inset -1px 25px 24px 0px rgba(255, 255, 255, 0.048);
}

.youtube {
    border-radius: 5px;
}
</style>
