const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const change = document.querySelector('h1');


toggle.addEventListener('click',theme);

function theme(){
    this.classList.toggle('bi-moon');

    if(this.classList.toggle('bi-brightness-high-fill'))
    {
        change.textContent='Javascript Toggle Light Mode';
        body.style.background = 'white';
        body.style.color = 'black'
        body.style.transition = '2s';
    }else{
        change.textContent='Javascript Toggle Dark Mode';
        body.style.background = 'black';
        body.style.transition='2s';
        body.style.color = 'white';
    }
}