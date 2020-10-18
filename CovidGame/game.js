
document.addEventListener('DOMContentLoaded', () =>{
    const gridDisplay = document.querySelector('.grid')
    const stepDisplay = document.getElementById('step')
    const resultDisplay = document.getElementById('result')
    const width = 4
    let squares = []
    let step = 0
    let move = false;

    //create a playboard
    function createBoard() {
        for (let i=0; i<width*width; i++){
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
    }
    createBoard()

    //generate a number randomly
    function generate(){
        randomNumber = Math.floor(Math.random() * squares.length)
        if(squares[randomNumber].innerHTML == 0){
            squares[randomNumber].innerHTML = CovidPrevention[0].text
            checkForGameOver()
        }else generate()
    }

    //swipe rights
    function moveRight() {
        for(let i=0; i<width*width; i++){
            if (i%width === 0) {
                let row = []
                for (j=0;j<width;j++){
                    total = squares[i+j].innerHTML
                    row.push(total)
                }

                let filteredRow = row.filter(a => a !== '0')

                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)

                //test if a move is needed
                for(k=missing;k<width;k++){
                    if(squares[i+k].innerHTML == 0){
                        move = true;
                    }
                }

                let newRow = zeros.concat(filteredRow)
                //console.log(newRow)

                for (j=0;j<width;j++){
                    squares[i+j].innerHTML = newRow[j]
                }

            }
        }
    }

    //swipe left
    function moveLeft() {
        for(let i=0; i<16; i++){
            if (i%4 === 0) {
                row = []
                for (j=0;j<width;j++){
                    let total = squares[i+j].innerHTML
                    row.push(total)
                }

                let filteredRow = row.filter(a => a !== '0')

                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)

                //test if a move is needed
                for(k=0;k<missing;k++){
                    if(squares[i+k].innerHTML == 0){
                        move = true;
                    }
                }

                let newRow = filteredRow.concat(zeros)
                //console.log(newRow)

                for (j=0;j<width;j++){
                    squares[i+j].innerHTML = newRow[j]
                }
            }
        }
    }


    //swipe down
    function moveDown() {
        for(let i=0; i<4; i++){
            let column = []
            for (j=0;j<width;j++){
                let total = squares[i+width*j].innerHTML
                column.push(total)
            }

            let filteredColumn = column.filter(a => a !== '0')
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(0)

                //test if a move is needed
                for(k=missing;k<width;k++){
                    if(squares[i+width*k].innerHTML == 0){
                        move = true;
                    }
                }
            let newColumn = zeros.concat(filteredColumn)

            for (j=0;j<width;j++){
                squares[i+width*j].innerHTML = newColumn[j]
            }
        }
    }

    //swipe up
    function moveUp() {
        let moved = false;
        for(let i=0; i<4; i++){
            let column = []
            for (j=0;j<width;j++){
                let total = squares[i+width*j].innerHTML
                column.push(total)
            }
            let filteredColumn = column.filter(a => a !== '0')
            //console.log(filteredColumn)
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(0)

                //test if a move is needed
                for(k=0;k<missing;k++){
                    if(squares[i+width*k].innerHTML == 0){
                        move = true;
                    }
                }

            let newColumn = filteredColumn.concat(zeros)
            for (j=0;j<width;j++){
                squares[i+width*j].innerHTML = newColumn[j]
            }
        }
    }

    function combinedRow(){
        for (let i=0;i<width*width-1;i++){
            if(squares[i].innerHTML === squares[i+1].innerHTML){
                let combinedTotal = 0;
                for (j=0;j<CovidPrevention.length;j++){
                    //console.log($(squares[i]).html())
                    //console.log(squares[i].innerHTML)
                    //console.log($(squares[i]).html(`${CovidPrevention[j].text}`))
                    if (squares[i].innerHTML === CovidPrevention[j].text){
                        combinedTotal = CovidPrevention[j+1].text
                        //$(squares[i]).html(`${CovidPrevention[j].text}`)
                    }
                }
                //console.log(combinedTotal)
                squares[i].innerHTML = combinedTotal
                squares[i+1].innerHTML = 0

            }
        }
        if(move == true){
            step +=1
        }
        stepDisplay.innerHTML = step
        checkForWin()
    }

    function combinedColumn(){
        for (let i=0;i<width*(width-1);i++){
            if(squares[i].innerHTML === squares[i+width].innerHTML){
                let combinedTotal = 0;
                for (j=0;j<CovidPrevention.length;j++){
                    if (squares[i].innerHTML === CovidPrevention[j].text){
                        combinedTotal = CovidPrevention[j+1].text
                    }
                }
                squares[i].innerHTML = combinedTotal
                squares[i+width].innerHTML = 0
            }
        }
        if(move == true){
            step +=1
        }
        stepDisplay.innerHTML = step;
        checkForWin()
    }

    //assign keycodes
    function control(e){
        if(e.keyCode == 39){
            keyRight()
        }else if(e.keyCode == 37){
            keyLeft()
        }else if(e.keyCode == 38){
            keyUp()
        }else if(e.keyCode == 40){
            keyDown()
        }
    }
    document.addEventListener('keyup',control)

    function keyRight(){
        moveRight();
        combinedRow()
        moveRight()
        if(move == true){
            generate()
        }
        move = false;
    }

    function keyLeft(){
        moveLeft()
        combinedRow()
        moveLeft()
        if(move == true){
            generate()
        }
        move = false;
    }

    function keyDown(){
        moveDown()
        combinedColumn()
        moveDown()
        if(move == true){
            generate()
        }
        move = false;
    }

    function keyUp(){
        moveUp()
        combinedColumn()
        moveUp()
        if(move == true){
            generate()
        }
        move = false;
    }

    //check for the number 2048 in the squares to win
    function checkForWin(){
        for(let i=0; i<squares.length; i++){
            if(squares[i].innerHTML === CovidPrevention[5].text){
                resultDisplay.innerHTML = `You protected yourself! \n You used ${step} steps in total!`
                document.removeEventListener('keyup',control)
            }
        }
    }

    //check if there's no zeros
    function checkForGameOver(){
        let zeros = 0
        for(let i=0;i<squares.length;i++){
            if(squares[i].innerHTML == 0){
                zeros++
            }
        }

        if(zeros === 0){
            resultDisplay.innerHTML = `You have no more protection strategy to use!`
            document.removeEventListener('keyup',control)
        }
    }

})