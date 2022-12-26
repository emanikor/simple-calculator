let display = document.getElementById('display');
let buttons = array.from(document.getElementByClassName('button'));

buttons.map( button => {
    button.addEventListener('click' ,(e) => {
       console.log('clicked');
       console.log(e);
       console.log( e.target);
       console.log(e.target.innerText)
    })
});
