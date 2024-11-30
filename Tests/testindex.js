document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById('videoSource');

  // Preload the video
  video.preload = 'auto';

  // Wait for the video to be loaded before playing it
  video.addEventListener('canplaythrough', () => {
    video.play();
  });
});