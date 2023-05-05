const btn = document.getElementById("btn"); // call the button
const colorCode = document.getElementById("colorCode"); //  call the code in html 
const getColor = () =>{
    const randomNumber = Math.floor(Math.random() * 16777215); // for random clolor code number 
    const randomCode = `#${randomNumber.toString(16)}`; // convert number into hexacode 
    document.body.style.backgroundColor = randomCode; // channge background color of page 
    btn.style.backgroundColor = randomCode; // channge background color of btn 
    btn.style.boxShadow = `2px 4px 70px ${randomCode}`;
    colorCode.innerHTML   = randomCode;

    // for copy any text on clip board use below code 
    navigator.clipboard.writeText(randomCode);
}
// event listener on btn 
btn.addEventListener(
    "click",
    getColor
)

getColor();