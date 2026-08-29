// Typing Animation

const text = [
    "Initializing Birthday.exe...",
    "Loading Memories...",
    "Connecting Hearts...",
    "Starting Celebration..."
];

let line = 0;
let char = 0;

const typing = document.getElementById("typing");

function typeEffect() {

    if(line < text.length){

        if(char < text[line].length){

            typing.innerHTML += text[line].charAt(char);
            char++;

            setTimeout(typeEffect,70);

        }

        else{

            typing.innerHTML += "<br>";

            line++;
            char=0;

            setTimeout(typeEffect,400);

        }

    }

}

typeEffect();


// Loading Screen

setTimeout(function(){

    document.getElementById("loader").style.display="none";

    document.getElementById("main-content").style.display="block";

},4500);


// Button Animation

const cards=document.querySelectorAll(".card-box");

cards.forEach(card=>{

card.addEventListener("mouseover",()=>{

card.style.transform="scale(1.05)";

});

card.addEventListener("mouseout",()=>{

card.style.transform="scale(1)";

});

});


// Welcome Message

console.log("Happy Birthday Vigneshwaran ❤️");
console.log("Made with ❤️ by Deekshitha");


// Floating Hearts

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize="25px";
heart.style.opacity="0.8";
heart.style.pointerEvents="none";
heart.style.transition="all 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="-50px";

},100);

setTimeout(()=>{

heart.remove();

},6000);

},700);

const message = `

Hello Daddy ❤️,

I'm your little gurl Deekshi.

Yeah... Today is your Birthday.

I wish you happiness for your entire life.

I promise I'll always try to make you smile.

Your happiness will always be my first priority.

I'm proud of the wonderful person you are.

Happy 22nd Birthday My Child ❤️

May every dream you have come true.

With all my love...

Deekshitha Vigneshwaran

(Your Lovable Wife ❤️)

`;

const letter = document.getElementById("letterText");

if(letter){

let i=0;

function typingLetter(){

if(i<message.length){

letter.innerHTML += message.charAt(i);

i++;

setTimeout(typingLetter,45);

}

}

typingLetter();

}

function celebrate(){

document.getElementById("celebrateText").innerHTML="🎆 Happy Birthday My Love ❤️ 🎆";

for(let i=0;i<100;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top=Math.random()*100+"vh";

heart.style.fontSize="30px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

}