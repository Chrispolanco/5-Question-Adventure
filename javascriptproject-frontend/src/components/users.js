class Users {
    constructor() {
        this.users = []
        this.adapter = new UsersAdapter()
        this.renderUsers()
        this.changebg()
        this.changeImage

    }

    retrieveAndLoadUsers() {
        this.adapter 
        .getUsers()
        .then(users => {
            users.forEach(user = this.users.push (new UsersAdapter(user)))
        })
        .then(()=> {
            this.renderUsers()
        })
    }

    renderUsers() {
        const change = document.querySelectorAll('h4')[0].innerText = "Hello 2000"
    }

    changebg() {

        const redBtn = document.querySelector('#toggle-red');
        const blueBtn = document.querySelector('#toggle-blue');
        const greenBtn = document.querySelector('#toggle-green');
        
        redBtn.addEventListener('click',(e)=>{
       
          document.documentElement.style.setProperty("background-image", " url('../images/Test Picture.PNG')");
       })
        
      blueBtn.addEventListener('click',(e)=>{
          document.documentElement.style.setProperty('--main-hue', 240);
        })
        
        greenBtn.addEventListener('click',(e)=>{
          document.documentElement.style.setProperty('--main-hue', 120);
        })  
      }

      changeImage() {
          
      }

}


