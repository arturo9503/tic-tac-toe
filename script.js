const Gameboard = {
    array: [
        ['', '' , ''],
        ['', '', ''],
        ['', '', ''],

    ]
}

function checkGame(array){
    if (
        (array[0][0] == 'X' && array[0][1] == 'X' && array[0][2] == 'X') 
        ||  
        (array[1][0] == 'X' && array[1][1] == 'X' && array[1][2] == 'X') 
        ||
        (array[2][0] == 'X' && array[2][1] == 'X' && array[2][2] == 'X') 
        ||
        (array[0][0] == 'X' && array[1][0] == 'X' && array[2][0] == 'X')
        || 
        (array[0][1] == 'X' && array[1][1] == 'X' && array[2][1] == 'X')
        ||
        (array[0][2] == 'X' && array[1][2] == 'X' && array[2][2] == 'X')
        ||
        (array[0][0] == 'X' && array[1][1] == 'X' && array[2][2] == 'X')
        ||
        (array[2][0] == 'X' && array[1][1] == 'X' && array[0][2] == 'X')
    ){
        return 'P1 Wins!'
    }
    else if (
        (array[0][0] == 'O' && array[0][1] == 'O' && array[0][2] == 'O') 
        ||  
        (array[1][0] == 'O' && array[1][1] == 'O' && array[1][2] == 'O') 
        ||
        (array[2][0] == 'O' && array[2][1] == 'O' && array[2][2] == 'O') 
        ||
        (array[0][0] == 'O' && array[1][0] == 'O' && array[2][0] == 'O')
        || 
        (array[0][1] == 'O' && array[1][1] == 'O' && array[2][1] == 'O')
        ||
        (array[0][2] == 'O' && array[1][2] == 'O' && array[2][2] == 'O')
        ||
        (array[0][0] == 'O' && array[1][1] == 'O' && array[2][2] == 'O')
        ||
        (array[2][0] == 'O' && array[1][1] == 'O' && array[0][2] == 'O')
    ){
        return 'P2 Wins!'
    }
    else if (array[0][0] =='' || array[0][1] =='' || array[0][2] == '' || array[1][0] == ''|| array[1][1] == '' || array[1][2] == '' || array[2][0] =='' || array[2][1] == '' || array[2][2] == ''){
        return 'Continue'
    }
    else{
        return 'Tie!'
    }
}

function createRestartButton(){
    const button = document.createElement('button');
    button.textContent = 'Restart Game';
    button.style.cssText = "text-align: center ; margin-top: 5%";
    button.addEventListener('click' , () => {
        removeDisplay()
    });
    return button;
}

function display(array){
    array = [
        ['', '' , ''],
        ['', '', ''],
        ['', '', ''],

    ]
    colLength = array.length;
    rowLength = array[0].length;
    const container = document.querySelector('#container');
    const status = document.createElement('div');
    const board = document.createElement('div');
    board.style.cssText = " margin-top: 5%";
    let state = 'Continue';
    status.textContent = 'New Game';
    status.style.cssText = 'margin-top: 5%'
    container.appendChild(status);
    container.appendChild(board);
    for (let i = 0 ; i < colLength ; i++){
        const row = document.createElement('div');
        row.style.cssText = ' border: 1px solid ; display: flex';
        for (let j = 0  ; j < rowLength ; j++){
            const button = document.createElement('button');
            button.style.cssText = 'width: 5rem; height:5rem ';
            button.textContent = array[i][j];
            button.addEventListener('click', () => {
                if (button.textContent == '' ){
                    if (status.textContent == 'New Game' || status.textContent == 'P1 Turn' && state == 'Continue'){
                        status.textContent = 'P2 Turn';
                        button.textContent = 'X';
                        Gameboard.array[i][j] ='X';
                        console.log(Gameboard.array);
                    }
                    else if (status.textContent == 'P2 Turn'){
                        status.textContent = 'P1 Turn'
                        button.textContent = 'O';
                        Gameboard.array[i][j] = 'O';
                        console.log(Gameboard.array);
                    }
                    if (state != ''){
                        state = checkGame(Gameboard.array);
                    }

                    if (state == 'P1 Wins!'){
                        status.textContent = 'P1 Wins!'
                        const restart  = createRestartButton();
                        board.appendChild(restart);
                        state = '';
                    }
                    else if (state == 'P2 Wins!'){
                        status.textContent = 'P2 Wins!';
                        const restart = createRestartButton();
                        board.appendChild(restart);
                        state = '';

                    }
                    else if (state == 'Tie'){
                        status.textContent = 'Tie!'
                        const restart = createRestartButton();
                        board.appendChild(restart);
                        state = '';

                    }
                }
            });
            row.appendChild(button);
        }
        board.appendChild(row)
    }

}

const container = document.querySelector('#container');
const button = document.createElement('button');
button.textContent = 'Start Game';
container.style.cssText = 'display: flex ; flex-direction: column ; align-items: center';
button.style.cssText = ' font-size: 1.5rem ; margin-top: 5% ; margin-bottom: 5% '
button.addEventListener('click', () => {
    display(Gameboard.array);
    button.remove();
})

container.appendChild(button);






