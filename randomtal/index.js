/* opg 1
console.log("Math.random", Math.floor( Math.random() * (100+1))); */

/* opg 2 */
/* function randomNumber () {
    const number = Math.floor( Math.random() * 101);
    document.querySelector("#output").textContent = number;    
console.log (number);
}
randomNumber (); */

/* opg 3 */
/* function randomNumber (max) {
    const number = Math.floor( Math.random() * (max+1));
    document.querySelector("#output").textContent = number;    
console.log (number);
}
randomNumber(1000); */


/* opg 4 */
function randomNumber (max,qs) {
    const number = Math.floor( Math.random() * (max+1));
    qs.textContent = number;    
console.log (number);
}
randomNumber(1000,document.querySelector("#output"));