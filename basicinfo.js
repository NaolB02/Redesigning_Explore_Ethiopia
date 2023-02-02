const playerButton1 = document.querySelector('.player-button-1'),
    audio1 = document.querySelector('.audio-1'),
    playIcon1 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `,
    pauseIcon1 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
      `;

function toggleAudio1() {
    if (audio1.paused) {
        audio1.play();
        playerButton1.innerHTML = pauseIcon1;
    } else {
        audio1.pause();
        playerButton1.innerHTML = playIcon1;
    }
}

playerButton1.addEventListener('click', toggleAudio1);

function audioEnded1() {
    playerButton1.innerHTML = playIcon1;
}

audio1.onended = audioEnded1;
const timeline1 = document.querySelector('.timeline-1');

function changeTimelinePosition1() {
    const percentagePosition = (100 * audio1.currentTime) / audio1.duration;
    timeline1.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline1.value = percentagePosition;
}

audio1.ontimeupdate = changeTimelinePosition1;

function changeSeek1() {
    const time = (timeline.value * audio.duration) / 100;
    audio1.currentTime = time;
}

timeline1.addEventListener('change', changeSeek1);


const playerButton2 = document.querySelector('.player-button-2'),
    audio2 = document.querySelector('.audio-2'),
    playIcon2 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `,
    pauseIcon2 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
      `;

function toggleAudio2() {
    if (audio2.paused) {
        audio2.play();
        playerButton2.innerHTML = pauseIcon2;
    } else {
        audio2.pause();
        playerButton2.innerHTML = playIcon2;
    }
}

playerButton2.addEventListener('click', toggleAudio2);

function audioEnded2() {
    playerButton2.innerHTML = playIcon2;
}

audio2.onended = audioEnded2;
const timeline2 = document.querySelector('.timeline-2');

function changeTimelinePosition2() {
    const percentagePosition = (100 * audio2.currentTime) / audio2.duration;
    timeline2.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline2.value = percentagePosition;
}

audio2.ontimeupdate = changeTimelinePosition2;

function changeSeek2() {
    const time = (timeline.value * audio.duration) / 100;
    audio2.currentTime = time;
}

timeline2.addEventListener('change', changeSeek2);

const playerButton3 = document.querySelector('.player-button-3'),
    audio3 = document.querySelector('.audio-3'),
    playIcon3 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `,
    pauseIcon3 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
      `;

function toggleAudio3() {
    if (audio3.paused) {
        audio3.play();
        playerButton3.innerHTML = pauseIcon3;
    } else {
        audio3.pause();
        playerButton3.innerHTML = playIcon3;
    }
}

playerButton3.addEventListener('click', toggleAudio3);

function audioEnded3() {
    playerButton3.innerHTML = playIcon3;
}

audio3.onended = audioEnded3;
const timeline3 = document.querySelector('.timeline-3');

function changeTimelinePosition3() {
    const percentagePosition = (100 * audio3.currentTime) / audio3.duration;
    timeline3.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline3.value = percentagePosition;
}

audio3.ontimeupdate = changeTimelinePosition3;

function changeSeek3() {
    const time = (timeline.value * audio.duration) / 100;
    audio3.currentTime = time;
}

timeline3.addEventListener('change', changeSeek3);