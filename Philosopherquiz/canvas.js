const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let wave1 = {
    amplitude: 30,
    frequency: 0.02,
    phase: 1.5 * Math.PI,
    speed: 0.002,
    color: 'rgba(0, 123, 255, 0.4)' // Blueish
};

let wave2 = {
    amplitude: 60,
    frequency: 0.03,
    phase: Math.PI / 2, // Starting 90 degrees out of phase from wave1
    speed: 0.001,
    color: 'rgba(147, 0, 169, 0.4)' // Redish
};

let wave3 = {
    amplitude: 30,
    frequency: 0.02,
    phase: 1.3 * Math.PI,
    speed: 0.002,
    color:'rgba(11, 156, 49, 0.4)' // greenish
};

function drawWave(wave) {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2); // Start at the center vertically

    for (let x = 0; x < canvas.width; x++) {
        const y = wave.amplitude * Math.sin(wave.frequency * x + wave.phase) + canvas.height / 2;
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = wave.color;
    ctx.lineWidth = 2;
    ctx.stroke();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update phases for animation
    wave1.phase += wave1.speed;
    wave2.phase += wave2.speed;
    wave3.phase += wave3.speed;

    // Draw waves
    drawWave(wave1);
    drawWave(wave2);
    drawWave(wave3);

    requestAnimationFrame(animate); // Loop the animation
}

animate();
