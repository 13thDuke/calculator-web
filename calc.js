var calc = ""; // global variable for the calculation
var display = "&nbsp;"

window.addEventListener("DOMContentLoaded", function(e) {
    const orderButtons = document.querySelectorAll("button[input-number]"); 

    orderButtons.forEach(function(button) { 

        button.addEventListener("click", function(e) { 
            const button = e.currentTarget;

            let number = button.getAttribute("input-number") //captures the button pressed on the calculator

            // The master calculation string for when the sum is completed
            if (calc === "") {
                
                if (number == "0"  // if the input is a number then show it
                || number == "1" 
                || number == "2" 
                || number == "3" 
                || number == "4" 
                || number == "5" 
                || number == "6" 
                || number == "7" 
                || number == "8" 
                || number == "9" 
                || number == ".") {
                    calc = number;
                }

                else { // don't want the equals sign added to the string
                    calc = "";
                    display = "&nbsp;";
                }
            }

            else if (number === "=" || number === "sign"){
                calc = calc;
            }

            else {
                calc = calc + number;
            }

            // master calculation ends

            // The display on the screen
            if (number == "0"  // if the input is a number then show it
                || number == "1" 
                || number == "2" 
                || number == "3" 
                || number == "4" 
                || number == "5" 
                || number == "6" 
                || number == "7" 
                || number == "8" 
                || number == "9" 
                || number == ".") {
                display = display + number;
                document.getElementById("result").innerHTML = display;
            }

            // Clear everything - the screen and the current calculation
            else if (number == "CE") {
                calc = "";                
                display = "&nbsp;"
                document.getElementById("result").innerHTML = display;
            }
            
            else if (number == "=") {
                display = eval(calc).toString();
                document.getElementById("result").innerHTML = display;
                display = "&nbsp;";
                calc = "";
            }
            
            else if (number == "sign") {
                
                document.getElementById("result").innerHTML = display;
            }

            else { //if the input is anything other than a number clear the screen
                display = display;
                document.getElementById("result").innerHTML = display;
                display = "";
            }

            if (calc == undefined) {
                display = '&nbsp;';
                document.getElementById("result").innerHTML = display;
            }
            
        });
    })
})

