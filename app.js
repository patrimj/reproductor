const video = document.getElementById('videoPlayer');
const backwardBtn = document.getElementById('backwardBtn');
const forwardBtn = document.getElementById('forwardBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeRange = document.getElementById('volumeRange');

playPauseBtn.addEventListener('click', function() {
  if (video.paused || video.ended) {
    video.play();
    playPauseBtn.textContent = '⏸';
  } else {
    video.pause();
    playPauseBtn.textContent = '▶';
  }
});

backwardBtn.addEventListener('click', function() {
  video.currentTime -= 10; 
});

forwardBtn.addEventListener('click', function() {
  video.currentTime += 10; 
});

volumeRange.addEventListener('input', function() {
  video.volume = volumeRange.value;
});