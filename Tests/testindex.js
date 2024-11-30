const video = document.getElementById('video');
const buffer = [];
const bufferLength = 5; // Increase the buffer length to 10 seconds

// Load the video frames into the buffer
video.addEventListener('canplay', () => {
  const interval = setInterval(() => {
    const frame = video.currentTime * video.frameRate;
    buffer.push(frame);
    if (buffer.length >= bufferLength * video.frameRate) {
      clearInterval(interval);
    }
  }, 1000 / video.frameRate);
});

// Render the video frames from the buffer
function render() {
  const frame = buffer.shift();
  if (frame) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    requestAnimationFrame(render);
  }
}

render();