// DOM Elements
const ageInput = document.querySelector(".age");
const submitBtn = document.querySelector(".enter");
const errormessage = document.querySelector(".error");
const allowedCount = document.querySelector(".allowedCount");
const notAllowedCount = document.querySelector(".not-allowedCount");
const total = document.querySelector(".total-visitors");
const faceMask = document.querySelector(".facemask");
const clock = document.querySelector(".clock");
const copyRight = document.querySelector(".copyright");


// Clock
function showTime() {
   let time = new Date();
   clock.textContent = time.toLocaleString("en-Us", {
       month: "long",
       year: "numeric",
       day: "numeric",
       hour : "numeric",
       minute: "numeric",
       second: "numeric",
       hour12: true
   });
};
showTime();
setInterval(() => {
    showTime()
}, 1000);

let allowedVisitors = [];
let disallowedVisitors = [];
let totalVisitors = [];

// Get Total Visitors
function getTotals() {
    totalVisitors.push(disallowedVisitors || allowedVisitors);
    total.innerHTML = totalVisitors.length;
    //console.log(totalVisitors.length);
}


const age = 12;

const checkVisitor = () => {
    if(ageInput.value === ""){
        errormessage.classList.remove("error");
        errormessage.classList.add("show");
        setTimeout(() => {
            errormessage.classList.remove("show");
            errormessage.classList.add("error");
        }, 3000);
    } else {
        if(ageInput.value < age && faceMask.value === "yes"){
            disallowedVisitors.push(ageInput.value);
            notAllowedCount.innerHTML = disallowedVisitors.length;
            getTotals();
            return alert("You must be 12 years or older to enter  Best Shopping Mall")
        }
        if(ageInput.value >= age && faceMask.value === "yes"){
            allowedVisitors.push(ageInput.value);
            allowedCount.innerHTML = allowedVisitors.length;
            getTotals();
            //console.log(allowedVisitors)
            return alert("Welcome to Best Shopping Mall")
        } else {
            disallowedVisitors.push(ageInput.value);
            notAllowedCount.innerHTML = disallowedVisitors.length;
            getTotals();
            //console.log(disallowedVisitors);
            return alert("You have been denied entry into best shopping Mall,")
        }
    }
    
    
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkVisitor();
})




// Footer
const year = document.createTextNode(new Date().getFullYear());
copyRight.appendChild(year)