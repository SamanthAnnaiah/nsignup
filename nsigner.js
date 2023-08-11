let maindiv = document.querySelector('.main_div');
let bton  = document.getElementById("bton");
let bdis  = document.getElementById("bdis");
let itext = document.getElementById("itext");
let mypop = document.querySelector('.popup');
let eemail = document.getElementById("eemail");
let ivemail = document.getElementById("ivemail");
let hue   = 0;
let satur = 0;
let light = 0;

changeColor();

itext.addEventListener("input", iempty);
bton.addEventListener("click", mailCheck);
bdis.addEventListener("click", mwclose);

function iempty() {
    if (!(itext.value)) {
        ivemail.style.display = "none";
        itext.style.backgroundColor = "white"; 
    }
}

function changeColor() {
    setInterval(() => {
        hue   = (Math.random() * 360).toFixed(2);
        satur = (Math.random() * 100).toFixed(2);
        light = (Math.random() * 100).toFixed(2);
        bton.style.backgroundColor = `hsl(${hue}, ${satur}%, ${light}%)`;
    }, 30000);
}

function mailCheck(event) {
    let epattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi;
    let eresult = epattern.test(itext.value)
    if (eresult) {
        ivemail.style.display = "none";
        eemail.textContent = itext.value;
        mypop.style.display = "flex";
        maindiv.classList.add('blur');
    }
    else {
        itext.style.backgroundColor = "hsla(4, 87%, 31%, 0.378)"; 
        ivemail.style.color = "hsla(4, 87%, 31%, 0.678)";
        ivemail.style.display = "block";
    }
}

function mwclose() {
    mypop.style.display = "none"; 
    maindiv.classList.remove('blur');
}