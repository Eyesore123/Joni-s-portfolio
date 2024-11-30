const canvas = document.getElementById('videoCanvas');
const ctx = canvas.getContext('2d');
const video = document.getElementById('videoSource');

video.addEventListener('loadedmetadata', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Preload the canvas by drawing the first frame
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Start playing the video
  video.play();
});