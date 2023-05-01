window.onload = function () {
    //boomOrTryagin
    checkBtn()
    //sumOf2numbers
    sumOfNumbersBtn()
    //multiOf2numbers
    multiOfNumbersBtn()
    //dayoftheweek
    printDayOfWeek()

    printDayOfMonth()

    signInBtn()
}    
//----------------2 equal nums-----------------
function boomOrTryagin() {
    let number1equal = document.querySelector("#input_equalnums1").value
    let number2equal = document.querySelector("#input_equalnums2").value
    if (number1equal == number2equal) {
        document.querySelector("#output_boom_tryagin").innerHTML = "BOOM!"
    } 
    else {
            document.querySelector("#output_boom_tryagin").innerHTML = "TRYAGIN"
    }
}
function checkBtn() {
    let check_btn = document.querySelector("#btn_equalnums");
    check_btn.addEventListener("click", boomOrTryagin)
}


//-------------------2 numbers addition---------------
function sumOfNumbers() {
    let number1Add , number2Add , sumAdd;
    number1Add = parseInt(document.querySelector("#input_addition1").value);
    number2Add = parseInt(document.querySelector("#input_addition2").value);
    sumAdd = number1Add + number2Add;
    document.querySelector("#output_addition").innerHTML = sumAdd
}
function sumOfNumbersBtn() {
    let addBtn = document.querySelector("#btn_addition");
    addBtn.addEventListener("click", sumOfNumbers)
}

//-------------------2 numers multiply----------------------------
function multiplyOfNumbers() {
    let number1Multi , number2Multi , sumMulti;
    number1Multi = parseInt(document.querySelector("#input_multi1").value);
    number2Multi = parseInt(document.querySelector("#input_multi2").value);
    sumMulti = number1Multi + number2Multi;
    document.querySelector("#output_multi").innerHTML = sumMulti
}
function multiOfNumbersBtn() {
    let addBtn = document.querySelector("#btn_multi");
    addBtn.addEventListener("click", multiplyOfNumbers)
}

//-----------------choose day of the week----------------------------------
function dayOfTheWeek() {
    let dayOfWeek = document.querySelector("#select_day").value
    if (dayOfWeek == 1) {
        document.querySelector("#output_dayOfWeek").innerHTML = "Good Week";
        document.querySelector("#output_dayOfWeek").style.background = "yellow";
    }
    else if (dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4) {
        document.querySelector("#output_dayOfWeek").innerHTML = "Good day";
        document.querySelector("#output_dayOfWeek").style.background = "aqua";
    }
    else if (dayOfWeek == 5 || dayOfWeek == 6 || dayOfWeek == 7){
        document.querySelector("#output_dayOfWeek").innerHTML = "Happy Weekend";
        document.querySelector("#output_dayOfWeek").style.background = "red";
    }
}
function printDayOfWeek(){
    let printDayWeek = document.querySelector("#select_day");
    printDayWeek.addEventListener("change", dayOfTheWeek)
}

//-----------------choose day of the month-----------------------------------
function dayOfTheMonth(){
    let dayOfMonth = document.querySelector("#input_dayOfMonth").value
    if (dayOfMonth == 1){
        document.querySelector("#output_dayOfMonth").innerHTML = "Good Month" 
    }
    else if (dayOfMonth < 10){
        document.querySelector("#output_dayOfMonth").innerHTML = "Start Work"
    }
    else if (dayOfMonth == 10){
        document.querySelector("#output_dayOfMonth").innerHTML = "Get Salary"
    }
    else if (dayOfMonth >=11 && dayOfMonth <=20){
        document.querySelector("#output_dayOfMonth").innerHTML = "Be happy"
    }
    else if (dayOfMonth > 20 && dayOfMonth <=30){
        document.querySelector("#output_dayOfMonth").innerHTML = "The end"
    }
    else if (dayOfMonth == 31){
        document.querySelector("#output_dayOfMonth").innerHTML = "Boom Boom"
    }
}
function printDayOfMonth() {
    let printText = document.querySelector("#input_dayOfMonth");
    printText.addEventListener("input", dayOfTheMonth)
}

//-----------------------choose holiday--------------------------------------
function btnPurim(){
    document.querySelector("#output_holiday").innerHTML = "happy purim"
}
function btnShavuot(){
    document.querySelector("#output_holiday").innerHTML = "and eat milk"
}
function btnSukot(){
    document.querySelector("#output_holiday").innerHTML = "and build a suka"
}
function btnPassover(){
    document.querySelector("#output_holiday").innerHTML = "and clear home"
}

//--------------------------User form--------------------------------------
function signInForm() {
    let userName = document.querySelector("#input_username").value;
    let userPw = document.querySelector("#input_password").value;
    if (userPw === "123" && userName === "admin"){
        document.querySelector("#output_formMsg").innerHTML = "connected"
    }
    else if (userPw.length < 6) {
        document.querySelector("#input_password").style.background = "red"
        document.querySelector("#output_formMsg").innerHTML =" the password must contain at least 6 numbers"
    }
    else {
        document.querySelector("#input_password").style.background = "red"
        document.querySelector("#input_username").style.background = "red"
        document.querySelector("#output_formMsg").innerHTML = "the details are not correct"
    }
}
function signInBtn() {
    let btnForm = document.querySelector("#btn_form");
    btnForm.addEventListener("click", signInForm)
}