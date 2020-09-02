const container = document.getElementsByClassName('container')[0];
const test = document.getElementById('text');
const start = document.getElementsByClassName('start')[0];
const pointer = document.getElementsByClassName('pointer-container')[0];

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
var refreshInterval;
var breatheAnimationInterval;

function breatheAnimation() {
    text.innerHTML = 'Respirer !';
    container.className = 'container grow';
    breatheAnimationInterval = setTimeout(() => {
        text.innerText = 'Bloquer !';
        breatheAnimationInterval = setTimeout(() => {
            text.innerText = 'Relâcher !';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
}

function stopAnimation() {
    start.addEventListener('click', startAnimation);
    start.removeEventListener('click', stopAnimation);
    start.innerHTML = 'Demarrer';
    start.classList.remove('stop')
    pointer.className = 'pointer-container';
    text.innerHTML = 'Respirer !';
    container.className = 'container';
    clearInterval(refreshInterval);
    clearInterval(breatheAnimationInterval);
}

function startAnimation() {
    start.addEventListener('click', stopAnimation);
    start.removeEventListener('click', startAnimation);
    start.innerHTML = 'Arreter';
    start.classList.add('stop');
    pointer.className = 'pointer-container started';
    breatheAnimation();
    refreshInterval = setInterval(breatheAnimation, totalTime);
}

start.addEventListener('click', startAnimation);
start.removeEventListener('click', stopAnimation);