import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

const playIconContainer = document.getElementById('play-icon');
let state = 'play';

const animation = lottieWeb.loadAnimation({
    container: playIconContainer,
    path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Demo Animation",
});

animation.goToAndStop(14, true);

playIconContainer.addEventListener('click', () => {

    let audio = document.querySelector('audio');

    if (state === 'play') {
        animation.playSegments([14, 27], true);
        audio.play();
        state = 'pause';
    } else {
        animation.playSegments([0, 14], true);
        state = 'play';
        audio.pause();
    }
});