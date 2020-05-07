class Users {
    constructor() {
        this.users = []
        this.adapter = new UsersAdapter()
        this.startMusic()
        this.welcomeDelay()
        this.changebg()
        this.changemusic()
    }

    startMusic() {
        const audio = document.getElementById('audio');
        audio.play(); 
    }

    renderUsers() {
        document.querySelectorAll('h4')[0].innerText = "Hello 2000"
    }

    changebg() {
        const redBtn = document.querySelector('#toggle-red');   
        redBtn.addEventListener('click',(e)=>{
            e.preventDefault();
          document.body.style.backgroundImage =  "url('./images/2.jpg')";
       })
    }

    changemusic() { 
        const blueBtn = document.querySelector('#toggle-blue');
        blueBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            const audio = document.getElementById('audio');
            const audiosource = document.getElementById('audiosource'); 
            audiosource.src = "./music/01 - Fantastic Journey.mp3"; 
            audio.pause(); 
            audio.load(); 
            audio.play(); 
        })  
    } 

    welcomeDelay() {
        const topInnerText = document.querySelector(".topInnerText");
        setTimeout(function() {
            topInnerText.classList.remove("topInnerText")
            topInnerText.classList.add("topInnerTextBlock") 
        }, 2000); 
        setTimeout(function() {
            topInnerText.classList.add("topInnerText")
            topInnerText.classList.remove("topInnerTextBlock") 
        }, 10000); 
    }


}








       

