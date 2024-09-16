/*
- Encryption method 1:
    1. Shift string characters
    2. Encode
*/

function shiftString(string, num = null, direction = "left") {
    if (num === null) {
        num = Math.floor(string.length / 2);
    }

    if (direction == "left") {
        return string.substring(num) + string.substring(0, num);
    } else if (direction == "right") {
        return string.substring(string.length - num) + string.substring(0, string.length - num);
    } else {
        return string;
    }
}

NUM_SHIFTS = 4

window.addEventListener("DOMContentLoaded", function() {

    document.getElementById("button-submit").addEventListener("click", function() {
        pwd = document.getElementById("get-input").value;
        pwdShifted = shiftString(pwd, NUM_SHIFTS);
        pwdShiftedEncoded = btoa(pwdShifted);

        document.getElementById("output-text").innerText = pwdShiftedEncoded;
    })
})