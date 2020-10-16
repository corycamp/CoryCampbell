const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() =>{
  navbarLinks.classList.toggle('active')
})

var greet_msg;
var today = new Date();
var time = today.getHours();

function greeting(time){
  if(time < 12){
    greet_msg = 'Good Morning,';
  }
  else if(time >= 12 && time <= 15){
    greet_msg = 'Good Afternoon,';
  }
  else if(time > 15){
    greet_msg ='Good Night,';
  }
  else{
    greet_msg ='Hello!'
  }
} 

greeting(time);
var el = document.getElementById('greeting');
el.textContent = greet_msg;