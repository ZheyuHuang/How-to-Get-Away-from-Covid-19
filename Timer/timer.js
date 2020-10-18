document.addEventListener('DOMContentLoaded', () =>{
    const timeLeftDisplay = document.getElementById('time-left');
    const startButton = document.getElementById('start-button');
    let timeleft = 20;

    function countdown(){
        setInterval(function(){
            if(timeleft <= 0){
                clearInterval(timeleft = 0)
            }

            timeLeftDisplay.innerHTML = timeleft
            timeleft -= 1
        }, 1000);
    }

    startButton.addEventListener('click', countdown())
})