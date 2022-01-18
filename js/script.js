let sw = document.querySelector('.sw');
let fr = document.querySelector('.fr');
let box1 = document.querySelector('.box1');
let special = document.querySelector('.special');
let box2 = document.querySelector('.box2'); 
let dark = document.querySelector('.dark'); 
let ss = document.querySelector('.ss'); 


fr.onclick = ()=> {
    sw.classList.toggle('active');
    special.classList.toggle('active');
    box1.classList.toggle('active');
    box2.classList.toggle('active');
}

dark.onclick = ()=> {
    document.body.classList.toggle('active');
    ss.classList.toggle('active');
    dark.classList.toggle('active');
}