// Flag to track if the mouse has moved
let hasMouseMoved = false;

// Initialize the hover sound using Howler.js
const hoverSound = new Howl({
    src: ['sounds/hover-sound.wav'], // Path to your hover sound file
    preload: true,                   // Preload for instant playback
    volume: 0.3                      // Set volume (adjust as needed)
});

// Function to play hover sound with random pitch
function playHoverSound() {
    if (hasMouseMoved) {
        // Generate a random playback rate between 0.7 and 1.3
        const randomRate = Math.random() * 0.6 + 0.7;

        // Play the sound with the random rate
        hoverSound.play(undefined, {
            rate: randomRate
        });
    }
}

// Event listener to detect mouse movement and enable hover sounds
function handleMouseMove() {
    hasMouseMoved = true;
    document.removeEventListener('mousemove', handleMouseMove); // Remove listener after first movement
}

// Add event listeners to all <a> elements for hover sound
document.querySelectorAll('a').forEach((element) => {
    element.addEventListener('mouseenter', playHoverSound); // Play hover sound on mouseenter
});

// Add event listener to detect the first mouse movement
document.addEventListener('mousemove', handleMouseMove);


// --- New Additions Below ---

// Initialize the womp sound using Howler.js
const wompSound = new Howl({
    src: ['sounds/womp.wav'], // Path to your womp sound file
    preload: true,            // Preload for instant playback
    volume: 0.5               // Set volume (adjust as needed)
});

// Function to play womp sound with random pitch
function playWompSound() {
    if (hasMouseMoved) {
        // Generate a random playback rate between 0.7 and 1.3
        const randomRate = Math.random() * 0.6 + 0.7;

        // Play the sound with the random rate
        wompSound.play(undefined, {
            rate: randomRate
        });
    }
}

// Add event listeners to all .game-item elements for womp sound
document.querySelectorAll('.game-item').forEach((element) => {
    element.addEventListener('mouseenter', playWompSound); // Play womp sound on mouseenter
});