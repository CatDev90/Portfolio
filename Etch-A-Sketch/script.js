//Selecting the elements on the page.
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');


//Setup our canvas for drawing 
//Making a variable called the height and width fromm the property of the canvas 
const {width, height} = canvas;


//Create random x and y starting points on the canvas
let x = Math.floor(Math.random()* width);
let y = Math.floor(Math.random()* height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.lineWidth = 30;

ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();


//Write a draw function using our keys

function draw({key}){
console.log(key);
//Start path
ctx.beginPath();
ctx.moveTo(x,y);
//Move our x and y values depending on what the user did
switch(key){
    case 'ArrowUp':
        y -= 50;
        break;
    case 'ArrowRight':
        x += 50;
        break;
    case 'ArrowDown':
        y += 50;
        break;
    case 'ArrowLeft':
        x -= 50;
        break;
    default:
        break;
}
ctx.lineTo(x,y);
ctx.stroke();
}

function clearCanvas(){
    ctx.clearRect(0, 0, width, height);
    canvas.classList.add('shake');
    canvas.addEventListener('animationend', function(){
        console.log('Done the shake')
        canvas.classList.remove('shake');
    })
} 

//Handler for our keys 
function handleKey(e){
    if(e.key.includes('Arrow')){
        e.preventDefault();
        console.log(e);
        draw({key: e.key});
    }
}

//listen for press our keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);