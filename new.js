document.addEventListener('DOMContentLoaded', function() {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const modal = document.getElementById('modal');
    const bomb = document.getElementById('bomb');
    const thankYouBtn = document.getElementById('thankYouBtn');
    const starsContainer = document.createElement('div');
    
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    // Randomly choose which box is the winner
    let isBox1Winner = Math.random() < 0.5;

    box1.addEventListener('click', () => {
        if (isBox1Winner) {
            showWinModal();
        } else {
            showBomb();
        }
    });

    box2.addEventListener('click', () => {
        if (!isBox1Winner) {
            showWinModal();
        } else {
            showBomb();
        }
    });

    thankYouBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        resetGame();
    });

    function showWinModal() {
        modal.style.display = 'flex';
        bomb.style.display = 'none';
    }

    function showBomb() {
        bomb.style.display = 'block';
        modal.style.display = 'none';
        setTimeout(() => {
            bomb.style.display = 'none';
            resetGame();
        }, 2000); // Hide bomb after 2 seconds
    }

    function resetGame() {
        // Randomly choose which box is the winner again
        isBox1Winner = Math.random() < 0.5;
    }

    function createStars() {
        const numStars = 100;
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            starsContainer.appendChild(star);
        }
    }

    createStars();
});
