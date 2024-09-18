NUM_SHIFTS = 4

/**
 * This function computes a circular shift on a string given a number of positions.
 * 
 * @param {String} string 
 * @param {Number} num 
 * @param {String} direction 
 * @returns shifted string
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


/**
 * This function rearranges a string by parity, separating odd and even numbers and concatenating the sub-strings.
 * 
 * @param {String} string 
 * @param {Boolean} reverse 
 * @returns rearranged string
 */
function rearrangeByParity(string, reverse=false) {
    if (reverse == false) {
        let even_chars = "";
        let odd_chars = "";
        for (let i = 0; i < string.length; i++) {
            if (i % 2 == 0) {
                even_chars += string[i];
            } else {
                odd_chars += string[i];
            }
        }
        return even_chars + odd_chars;
    } else {
        let half = Math.ceil(string.length / 2);
        let first_part = string.substring(0, half);
        let second_part = string.substring(half);

        let new_str = ""
        for (let i = 0; i < first_part.length; i++) {
            new_str += first_part[i];
            if (i < second_part.length) { new_str += second_part[i]; }
        }
        return new_str
    }
}



function copyText() {
    var output_field = document.getElementById("output-text");
    navigator.clipboard.writeText(output_field.innerText);
}


window.addEventListener("DOMContentLoaded", function() {

    document.getElementById("encode").addEventListener("click", function() {
        let pwd = document.getElementById("get-input").value;
        let method = document.getElementById("encryption-type").value;
        var pwdShifted = ""
        
        if (method == "method-1") {
            pwdShifted = shiftString(pwd, NUM_SHIFTS);
        } else {
            pwdShifted = rearrangeByParity(pwd);
            console.log(pwdShifted);
        }

        let pwdShiftedEncoded = btoa(pwdShifted);
        document.getElementById("output-text").innerText = pwdShiftedEncoded;
    })

    document.getElementById("decode").addEventListener("click", function() {
        let encoded = document.getElementById("get-input").value;
        let method = document.getElementById("encryption-type").value;

        let pwdShifted = atob(encoded);

        if (method == "method-1") {
            pwd = shiftString(pwdShifted, NUM_SHIFTS, "right");
        } else {
            pwd = rearrangeByParity(pwdShifted, reverse=true);
        }

        document.getElementById("output-text").innerText = pwd;
    })
})
