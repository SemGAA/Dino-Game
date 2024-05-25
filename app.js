    const dino = document.querySelector('.dino');
    const kakto = document.querySelector('.kakto');
    const mir = document.querySelector('.mir');
    const scoreElement = document.getElementById('score');
    const bulletElement = document.querySelector('.bullet');
    let isJumping = false; 
    let score = 0;
    let kaktoPassed = false; 
    let isShooting = false;
    let bulletSpeed = 10;
    function jump() {
        if (!isJumping) {
            isJumping = true;
            dino.style.animation = 'dinoJump 0.5s ease-in-out'; 
            setTimeout(() => {
                dino.style.animation = 'dinoIdle 0.7s ease-in-out infinite';
                isJumping = false;
            }, 500);
        }
    }
    function shoot() {
        if (!isShooting) {
            isShooting = true;
            bulletElement.style.display = 'block';
            bulletElement.style.bottom = dino.offsetTop + dino.offsetHeight / 2 - 2.5 + 'px'; // Выравниваем по центру динозаврика
            bulletElement.style.animation = `bulletMove ${mir.offsetWidth / bulletSpeed}s linear forwards`; // Запускаем анимацию
            setTimeout(() => {
                bulletElement.style.display = 'none';
                bulletElement.style.animation = 'none';
                isShooting = false;
            }, mir.offsetWidth / bulletSpeed * 1000); 
        }
    }
    function checkCollision() {
        const dinoRect = dino.getBoundingClientRect(); 
        const kaktoRect = kakto.getBoundingClientRect();
        if (
            dinoRect.right >= kaktoRect.left &&
            dinoRect.left <= kaktoRect.right &&
            dinoRect.bottom >= kaktoRect.top &&
            dinoRect.top <= kaktoRect.bottom
        ) {
            alert('Игра окончена!');
            kakto.style.animationPlayState = 'paused';
            dino.style.animationPlayState = 'paused';
        }
    }
    function checkKaktoPassed() {
        if (kakto.offsetLeft < dino.offsetLeft && !kaktoPassed) {
            score++;
            scoreElement.textContent = score;
            kaktoPassed = true;
        }
        if (kakto.offsetLeft + kakto.offsetWidth > mir.offsetWidth) {
            kaktoPassed = false; 
        }
    }
    function checkBulletHit() {
        const bulletRect = bulletElement.getBoundingClientRect();
        if (
            bulletRect.right >= kaktoRect.left &&
            bulletRect.left <= kaktoRect.right &&
            bulletRect.bottom >= kaktoRect.top &&
            bulletRect.top <= kaktoRect.bottom
        ) {
            score++;
            scoreElement.textContent = score;
            bulletElement.style.display = 'none';
            bulletElement.style.animation = 'none';
            isShooting = false;
            kakto.style.left = mir.offsetWidth + 'px';
            kakto.style.animationPlayState = 'running'; 
        }
    }
    let gameLoop = setInterval(() => {
        checkCollision();
        checkKaktoPassed();
        checkBulletHit();
    }, 50);
    window.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            jump();
        }
    });
    window.addEventListener('keydown', (event) => {
        if (event.code === 'Up') {
            jump();
        }
    });
    window.addEventListener('keydown', (event) => {
        if (event.code === 'KeyC') {
            shoot();
        }
    });










// const dino = document.querySelector('.dino');
// const kakto = document.querySelector('.kakto');
// const mir = document.querySelector('.mir');
// const scoreElement = document.getElementById('score');

// let isJumping = false; 
// let score = 0;
// let kaktoPassed = false; 
// function jump() {
//     if (!isJumping) {
//         isJumping = true;
//         dino.style.animation = 'dinoJump 0.5s ease-in-out'; 

//         setTimeout(() => {
//             dino.style.animation = 'dinoIdle 0.5s ease-in-out infinite';
//             isJumping = false;
//         }, 500);
//     }
// }

// function checkCollision() {
//     const dinoRect = dino.getBoundingClientRect(); 
//     const kaktoRect = kakto.getBoundingClientRect();

//     if (
//         dinoRect.right >= kaktoRect.left &&
//         dinoRect.left <= kaktoRect.right &&
//         dinoRect.bottom >= kaktoRect.top &&
//         dinoRect.top <= kaktoRect.bottom
//     ) {
//         alert('Игра окончена!');
//         kakto.style.animationPlayState = 'paused';
//         dino.style.animationPlayState = 'paused';
//     }
// }

// function checkKaktoPassed() {
//     if (kakto.offsetLeft < dino.offsetLeft && !kaktoPassed) {
//         score++;
//         scoreElement.textContent = score;
//         kaktoPassed = true;
//     }

//     if (kakto.offsetLeft + kakto.offsetWidth > mir.offsetWidth) {
//         kaktoPassed = false; 
//     }
// }

// let gameLoop = setInterval(() => {
//     checkCollision();
//     checkKaktoPassed();
// }, 50);

// window.addEventListener('keydown', (event) => {
//     if (event.code === 'Space') {
//         jump();
//     }
    
// });

