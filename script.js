const ageInput = document.querySelector(".age");
const submitBtn = document.querySelector(".enter");
const errormessage = document.querySelector(".error");
const allowedCount = document.querySelector(".allowedCount");
const notAllowedCount = document.querySelector(".not-allowedCount");
const faceMask = document.querySelector(".facemask");


let allowedVisitors = [];
let disallowedVisitors = [];



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
            return alert("You must be 12 years or older to enter  Best Shopping Mall")
        }
        if(ageInput.value >= age && faceMask.value === "yes"){
            allowedVisitors.push(ageInput.value);
            allowedCount.innerHTML = allowedVisitors.length;
            console.log(allowedVisitors)
            return alert("Welcome to Best Shopping Mall")
        } else {
            disallowedVisitors.push(ageInput.value);
            notAllowedCount.innerHTML = disallowedVisitors.length;
            console.log(disallowedVisitors);
            return alert("You have been denied entry into best shopping Mall,")
        }
    }
    
    
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkVisitor();
})
