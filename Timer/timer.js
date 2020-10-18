document.addEventListener('DOMContentLoaded', () =>{
    const timeLeftDisplay = document.getElementById('time-left');
    const startButton = document.getElementById('start-button');
    let timeleft = 20;

    startButton.addEventListener('click', countdown());

    function countdown(){
        setInterval(function(){
            if(timeleft <= 0){
                clearInterval(timeleft = 0)
            }

            timeLeftDisplay.innerHTML = timeleft
            timeleft -= 1
        }, 1000);
    }
})