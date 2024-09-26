// Dots Animation
let banner = document.querySelector('.banner');
let canvas = document.getElementById('dotsCanvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
const ctx = canvas.getContext('2d');
let dots = [];
const arrayColors = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];

// Initialize dots
for (let index = 0; index < 50; index++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: arrayColors[Math.floor(Math.random() * 5)]
    });
}

// Draw dots on the canvas
const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Initial draw of dots
drawDots();

// Mouse movement and interaction with dots
banner.addEventListener('mousemove', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawDots(); // Redraw dots

    // Get mouse position relative to banner
    let mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top
    };

    // Draw lines from dots to mouse when close
    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300) {
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    });
});

// Clear canvas and redraw dots when the mouse leaves
banner.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
});

// Resize canvas and adjust dots
window.addEventListener('resize', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = banner.offsetWidth;
    canvas.height = banner.offsetHeight;

    dots = [];
    for (let index = 0; index < 50; index++) {
        dots.push({
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 5,
            color: arrayColors[Math.floor(Math.random() * 5)]
        });
    }
    drawDots();
});

// Countdown Timer
function countdown() {
    const targetDate = new Date('2024-09-30T09:00:00').getTime(); // Set your target date here
    const countdownElement = document.getElementById('countdown');

    if (!countdownElement) {
        console.error('Countdown element not found');
        return;
    }

    const interval = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownElement.innerHTML = "The event has started!";
            clearInterval(interval);
        }
    }, 1000);
}

// Call the countdown function
countdown();

// View Counter
function updateViewCounter() {
    const viewCountElement = document.getElementById('viewCount');

    fetch('update_views.php')
        .then(response => response.json())
        .then(data => {
            viewCountElement.innerText = data.view_count;
        })
        .catch(error => console.error('Error updating view count:', error));
}

// Call the view counter update function
updateViewCounter();
