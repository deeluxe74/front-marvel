<template>
    <div>
        <div class="showcase">
            <div class="bloc-title align-center">
                <h1>Learn you'r heros <br><span>Now !</span></h1>
            <router-link :to="{name: 'Listing', query: {page: 1, order: 'name'}}" tag="button" class="hover fw-900 bg-red cl-white button">
                START
            </router-link>
            </div>
            <img class="scroll-down" src="/img/svg/home/bottom.svg" alt="Scroll down !">
        </div>

        <div class="bloc d-flex flex-column align-center">
            <h1>Everything you want to know is here !</h1>
            <div class="d-flex flex-row justify-content-between my-3">
                <img class="frame mr-5" src="/img/home/black-widow.png" alt="Picture of black widow">
                <p class="align-self-center">
                    You’re here because you want to know everything about your superhero or supervilain favorite ?
                    <br><br>
                    To be able to find all its publications in the best comics or series, to know its characteristics and its history.
                    To know his history or his abilities.
                    <br><br>
                    You’re right where you need to be.
                </p>
            </div>
        </div>

        <div class="bloc bg-red d-flex flex-column align-center cl-white">
            <h1>How is work ?</h1>
            <div class="d-flex flex-row justify-content-between my-3">
                <div class="align-self-center">
                    <p>This is possible with the amazing API developed by Marvel.
                        <br><br>
                        This API let access on all information about marvel last 70 years ago and allows to find all the characters of the universe as well as their
                        appearances in different comics. !
                    </p>
                    <a href="https://developer.marvel.com/" target="_blank"><h4 class="mt-4">https://developer.marvel.com/</h4></a>
                </div>
                <img class="frame ml-5" src="/img/home/marvel-logo.png" alt="Picture of Marvel logo">
            </div>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
p {
    font-size: 1.1rem!important;
}

button {
    padding: 0.5rem auto;
    width: 40vw;
}

a {
 color: inherit;
}

.showcase {
    height: 95vh;
    display: flex;
    background-image: url('/img/home/showcase-black-widow.png');
    align-items: center;
    padding-left: 45vw;
}

.bloc {
    min-height: 80vh;
    padding: 2.5rem 5vw;
}

.frame {
    width: 40vw;
}

.scroll-down {
    position: absolute;
    bottom: 10vh;
    width: 3rem;
    animation: wing 2s infinite;
}

@keyframes wing {
    0% {
        opacity: 0.2;
    }
    50% {
        opacity: 0.8;
    }
    100% {
        opacity: 0.2;
    }
}
</style>
