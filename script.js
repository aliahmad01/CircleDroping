let colors = ['blue', 'yellow', 'brown'];
let blueBallPreviousPosition = innerHeight;
let yellowBallPreviousPosition = innerHeight;
let brownBallPreviousPosition = innerHeight;
let gameOver = false;
let scaleValue = 1.3;


let key = setInterval(() => {
    if (!gameOver) {
        movement();
    } else clearInterval(key);
}, 500)

function movement() {

    if (!gameOver) {

        let randomBall = colors[Math.floor(Math.random() * 3)];

        ballIndex = randomBall;

        let ball = document.createElement('div');
        ball.classList.add('createBall');
        container.appendChild(ball);

        switch (randomBall) {

            case 'blue':
                ball.style.background = 'blue';
                move(blueBallPreviousPosition);
                break;

            case 'yellow':
                ball.style.background = 'yellow';
                move(yellowBallPreviousPosition)
                break;

            case 'brown':
                ball.style.background = 'brown';
                move(brownBallPreviousPosition);
                break;

            default:
                break;

        }

        //function for ball movement 

        function move(previousBallPosition) {

            let movingDownward = 0;
            let translateaxis = 0;
            let keepMove = true;


            let keyMoveBall = setInterval(() => {

                if (keepMove) movingDown();
                else clearInterval(keyMoveBall);

            },
                10);

            function movingDown() {


                movingDownward += ball.offsetHeight;
                translateaxis += ball.offsetWidth;


                if (movingDownward + ball.offsetHeight < (previousBallPosition)) {

                    ball.style.top = movingDownward + 'px';
                    translateXaxis(randomBall, translateaxis);

                } else {


                    keepMove = false;
                    movingDownward -= ball.offsetHeight;
                    translateaxis -= ball.offsetWidth;


                    if (randomBall === 'blue') {
                        blueBallPreviousPosition = blueBallPreviousPosition - ball.offsetHeight;
                        previousBallPosition = blueBallPreviousPosition

                    } else if (randomBall == 'brown') {
                        brownBallPreviousPosition = brownBallPreviousPosition - ball.offsetHeight;
                        previousBallPosition = brownBallPreviousPosition;

                    } else {
                        yellowBallPreviousPosition = yellowBallPreviousPosition - ball.offsetHeight;
                        previousBallPosition = yellowBallPreviousPosition;
                    }

                }


                if (ball.getBoundingClientRect().top <= 0) {
                    ball.style.transform = `scale(${scaleValue})`;
                    gameOver = true
                    return alert(`GameOver`)
                } else {
                    gameOver = false
                }
            }

        }

        //ball direction straight left right

        function translateXaxis(random, xAxis) {

            if (random == 'blue') {
                ball.style.transform = `translateX(${xAxis}px) scale(${scaleValue})`;
            } else if (random == 'yellow')
                ball.style.transform = `translateX(${-xAxis}px) scale(${scaleValue})`;
            else if (random == 'brown') {
                ball.style.transform = `scale(${scaleValue},${scaleValue})`;
            }
        }

    } else
        return alert('gameOver');
}