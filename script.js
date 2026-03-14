// Loading screen - ONLY run if loading screen exists
const loadingScreen = document.getElementById('loading');
if (loadingScreen) {
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 3000);
}

// Navigation active state - ONLY run if nav links exist
const navLinks = document.querySelectorAll('.nav-links a');
if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active to clicked link
            this.classList.add('active');
        });
    });
}
// 🎵 BACKGROUND MUSIC CONTROL
document.addEventListener('DOMContentLoaded', function() {
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    
    // Start paused (user must click to play)
    bgMusic.volume = 0.3; // 30% volume (subtle)
    
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = '🔇';
            musicToggle.classList.add('playing');
        } else {
            bgMusic.pause();
            musicToggle.textContent = '🔊';
            musicToggle.classList.remove('playing');
        }
    });
    
    // Auto-pause on page visibility change
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            bgMusic.pause();
        }
    });
});
