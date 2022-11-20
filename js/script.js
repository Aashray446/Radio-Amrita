const playButton = document.getElementById('playButton');
const play = document.getElementById('play');
const pause1 = document.getElementById('pause1');
const pause2 = document.getElementById('pause2');
const audio = document.querySelector('audio');
pause1.style.opacity = '0';
pause2.style.opacity = '0';



let state = 'play';

const playFunction = () => {



    if (state === 'play') {
        play.style.opacity = '0';
        pause1.style.opacity = '1';
        pause2.style.opacity = '1';
        audio.play();
        state = 'pause';
    } else {
        pause1.style.opacity = '0';
        pause2.style.opacity = '0';
        play.style.opacity = '1';
        state = 'play';
        audio.pause();
    }
}

playButton.addEventListener('click', playFunction);