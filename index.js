/// <reference lib="es2015" />
var color_change = 0;
var button_change = 0;
var trigo_button = 0;
var fun_body = 0;
var memory = [];
var display = document.getElementById("display");
// key press function of keyboard
document.addEventListener("keypress", function (event) {
    document.activeElement.blur();
    var keyCode1 = event.keyCode;
    // using asci value to check whther key_pressed is number, decimal point, or only these operator (+, -, *, /)
    if (keyCode1 >= 48 && keyCode1 <= 57 || keyCode1 == 46 || keyCode1 == 42 || keyCode1 == 43 || keyCode1 == 45 || keyCode1 == 47) {
        display.value += event.key;
    }
    // Checking if key pressed is only "Enter" key & if "Enter" key then eval the result
    else if (keyCode1 == 13) {
        document.activeElement.blur();
        equal();
    }
});
var reusable = function () {
    document.getElementById("trigo_fun_body").style.display = "";
    document.getElementById("trigo_fun_sin").style.display = "";
    document.getElementById("trigo_fun_sec").style.display = "";
    document.getElementById("trigo_fun_sin_1").style.display = "";
    document.getElementById("trigo_fun_sec_1").style.display = "";
    document.getElementById("trigo_fun_sinh").style.display = "";
    document.getElementById("trigo_fun_sech").style.display = "";
    document.getElementById("trigo_fun_sinh_1").style.display = "";
    document.getElementById("trigo_fun_sech_1").style.display = "";
};
function second_button_display_Change() {
    if (color_change == 0) {
        var elems = document.getElementsByClassName('second_change');
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "none";
            console.log("for");
        }
        var elem1 = document.getElementsByClassName('second_changed');
        for (var i_1 = 0; i_1 < elem1.length; i_1++) {
            elem1[i_1].style.display = "block";
        }
        document.getElementById('second_button').style.backgroundColor = "rgb(121, 169, 215)";
        color_change = 1;
        console.log(color_change);
        button_change = 1;
        console.log(button_change);
    }
    else {
        console.log(color_change);
        var elems = document.getElementsByClassName('second_change');
        for (var i_2 = 0; i_2 < elems.length; i_2++) {
            elems[i_2].style.display = "block";
        }
        var elem1 = document.getElementsByClassName('second_changed');
        for (var i_3 = 0; i_3 < elem1.length; i_3++) {
            elem1[i_3].style.display = "none";
        }
        document.getElementById('second_button').style.backgroundColor = "";
        color_change = 0;
        button_change = 0;
    }
    //if function drpdown or trigo dropdown is open then it will close when click on 2nd 
    if (fun_body == 1 || trigo_button == 1) {
        document.getElementById('fun_1st_row').style.display = "";
        document.getElementById('fun_2nd_row').style.display = "";
        fun_body = 0;
        //reusabalitiy of code usign an anonymous function
        reusable();
        trigo_button = 0;
    }
}
function trigo_fun() {
    if (trigo_button == 0) {
        document.getElementById("trigo_fun_body").style.display = "block";
        document.getElementById("trigo_fun_sin").style.display = "flex";
        document.getElementById("trigo_fun_sec").style.display = "flex";
        trigo_button = 1;
    }
    else {
        //reusabalitiy of code usign an anonymous function
        reusable();
        trigo_button = 0;
    }
    if (fun_body == 1) {
        document.getElementById('fun_1st_row').style.display = "";
        document.getElementById('fun_2nd_row').style.display = "";
        fun_body = 0;
    }
}
function fun_body_display() {
    if (fun_body == 0) {
        document.getElementById('fun_body').style.display = "block";
        document.getElementById('fun_1st_row').style.display = "flex";
        document.getElementById('fun_2nd_row').style.display = "flex";
        fun_body = 1;
    }
    else {
        document.getElementById('fun_1st_row').style.display = "";
        document.getElementById('fun_2nd_row').style.display = "";
        fun_body = 0;
    }
    if (trigo_button == 1) {
        //reusabalitiy of code usign an anonymous function
        reusable();
        trigo_button = 0;
    }
}
function mc() {
    memory = [];
    document.getElementById('mc_').disabled = true;
    document.getElementById('mr_').disabled = true;
}
function mr() {
    var s = memory.length;
    display.value = memory[s - 1].toString();
}
function m_add() {
    var s = memory.length;
    if (memory.length == 0) {
        memory.push(Number(display.value));
    }
    if (memory.length != 0) {
        document.getElementById('mc_').disabled = false;
        document.getElementById('mr_').disabled = false;
        memory[s - 1] += Number(display.value);
    }
}
function m_sub() {
    if (memory.length == 0) {
        memory.push(Number(display.value));
    }
    if (memory.length != 0) {
        document.getElementById('mc_').disabled = false;
        document.getElementById('mr_').disabled = false;
        var s = memory.length;
        memory[s - 1] -= Number(display.value);
    }
}
function ms() {
    memory.push(Number(display.value));
    if (memory.length != 0) {
        document.getElementById('mc_').disabled = false;
        document.getElementById('mr_').disabled = false;
    }
}
function second_sin_change() {
    document.getElementById("trigo_fun_sin").style.display = "";
    document.getElementById("trigo_fun_sec").style.display = "";
    document.getElementById("trigo_fun_sin_1").style.display = "flex";
    document.getElementById("trigo_fun_sec_1").style.display = "flex";
    document.getElementById('second_sin_inverse').style.backgroundColor = "rgb(121, 169, 215)";
}
function second_sin_inverse_change() {
    document.getElementById("trigo_fun_sin").style.display = "flex";
    document.getElementById("trigo_fun_sec").style.display = "flex";
    document.getElementById("trigo_fun_sin_1").style.display = "";
    document.getElementById("trigo_fun_sec_1").style.display = "";
}
function hyp_sin_change() {
    document.getElementById("trigo_fun_sin").style.display = "";
    document.getElementById("trigo_fun_sec").style.display = "";
    document.getElementById("trigo_fun_sinh").style.display = "flex";
    document.getElementById("trigo_fun_sech").style.display = "flex";
    document.getElementById('hyp_sech').style.backgroundColor = "rgb(121, 169, 215)";
}
function second_sinh_inverse_change() {
    document.getElementById("trigo_fun_sinh_1").style.display = "flex";
    document.getElementById("trigo_fun_sech_1").style.display = "flex";
    document.getElementById("trigo_fun_sinh").style.display = "";
    document.getElementById("trigo_fun_sech").style.display = "";
    document.getElementById('second_sinh_inverse').style.backgroundColor = "rgb(121, 169, 215)";
    document.getElementById('hyp_sech_inverse').style.backgroundColor = "rgb(121, 169, 215)";
}
function hyp_change_sinh_inverse() {
    document.getElementById("trigo_fun_sinh_1").style.display = "flex";
    document.getElementById("trigo_fun_sech_1").style.display = "flex";
    document.getElementById("trigo_fun_sin_1").style.display = "";
    document.getElementById("trigo_fun_sec_1").style.display = "";
    document.getElementById('second_sinh_inverse').style.backgroundColor = "rgb(121, 169, 215)";
    document.getElementById('hyp_sech_inverse').style.backgroundColor = "rgb(121, 169, 215)";
}
function reverse_to_sin_inverse() {
    document.getElementById("trigo_fun_sinh_1").style.display = "";
    document.getElementById("trigo_fun_sech_1").style.display = "";
    document.getElementById("trigo_fun_sin_1").style.display = "flex";
    document.getElementById("trigo_fun_sec_1").style.display = "flex";
}
function sinh_inverse_second_reverse_to_sinh() {
    document.getElementById("trigo_fun_sinh_1").style.display = "";
    document.getElementById("trigo_fun_sech_1").style.display = "";
    document.getElementById("trigo_fun_sinh").style.display = "flex";
    document.getElementById("trigo_fun_sech").style.display = "flex";
    document.getElementById('hyp_sech').style.backgroundColor = "rgb(121, 169, 215)";
}
function hyp_sech_change_to_sin() {
    document.getElementById("trigo_fun_sin").style.display = "flex";
    document.getElementById("trigo_fun_sec").style.display = "flex";
    document.getElementById("trigo_fun_sinh").style.display = "";
    document.getElementById("trigo_fun_sech").style.display = "";
}
var F_E = 0;
function fe() {
    if (F_E == 0) {
        display.value = Number(display.value).toFixed(5).toString();
        document.getElementById('F_E_').style.backgroundColor = "rgb(121, 169, 215)";
        F_E = 1;
    }
    else {
        display.value = Number(display.value).toExponential().toString();
        document.getElementById('F_E_').style.backgroundColor = "";
        F_E = 0;
    }
}
var deg = 0;
function deg_to_radian() {
    if (deg == 0) {
        deg = 1;
        document.getElementById("degree").innerHTML = "RAD";
    }
    else {
        deg = 0;
        document.getElementById("degree").innerHTML = "DEG";
    }
}
function random() {
    display.value = Math.random().toString();
}
function ceil() {
    display.value = (Math.ceil(Number(display.value))).toString();
}
function floor() {
    display.value = (Math.floor(Number(display.value))).toString();
}
function dms() {
    var degString = display.value;
    var deg = parseInt(degString);
    var minutes = (deg - Math.floor(deg)) * 60;
    var seconds = (minutes - minutes) * 60;
    display.value = parseFloat("".concat(deg, ".").concat(minutes).concat(seconds)).toFixed(4).toString();
}
function deg_dms() {
    var dmsString = display.value;
    var dms = Number(dmsString);
    var sec = Math.round((dms - Math.floor(dms)) * 10000);
    var min = Math.round((dms - Math.floor(dms)) * 100 * 60);
    dms = dms + min / 60 + sec / 3600;
    display.value = (deg.toFixed(2)).toString();
}
function sin() {
    if (deg == 0) {
        display.value = (Math.sin((Math.PI / 180) * Number(display.value))).toFixed(2);
    }
    else {
        var sinString = display.value;
        display.value = (Math.sin(Number(display.value))).toFixed(2);
    }
}
function cos() {
    if (deg == 0) {
        display.value = (Math.cos(Math.PI / 180 * (Number(display.value)))).toFixed(2);
    }
    else {
        display.value = Math.cos(Number(display.value)).toFixed(2);
    }
}
function tan() {
    if (deg == 0) {
        display.value = (Math.tan(Math.PI / 180 * (Number(display.value)))).toFixed(2);
    }
    else {
        display.value = Math.tan((Number(display.value))).toFixed(2);
    }
}
function sec() {
    if (deg == 0) {
        display.value = (1 / Math.cos(Math.PI / 180 * (Number(display.value)))).toFixed(2);
    }
    else {
        display.value = (1 / Number(Math.cos((Number(display.value))).toFixed(2))).toString();
    }
}
function csc() {
    if (deg == 0) {
        display.value = (1 / Math.sin(Math.PI / 180 * Number(display.value))).toFixed(2);
    }
    else {
        display.value = (1 / Number(Math.sin(Number(display.value)).toFixed(2))).toString();
    }
}
function cot() {
    if (deg == 0) {
        display.value = (1 / Number((Math.tan(Math.PI / 180 * Number(display.value))).toFixed(2))).toString();
    }
    else {
        display.value = (1 / Number(Math.tan(Number(display.value)).toFixed(2))).toString();
    }
}
function sin_inv() {
    if (deg == 0) {
        display.value = (180 / Math.PI * Math.asin(Number(display.value))).toFixed(2);
    }
    else {
        display.value = Math.asin(Number(display.value)).toFixed(2);
    }
}
function cos_inv() {
    if (deg == 0) {
        display.value = (180 / Math.PI * Math.acos(Number(display.value))).toFixed(2);
    }
    else {
        display.value = Math.acos(Number(display.value)).toFixed(2);
    }
}
function tan_inv() {
    if (deg == 0) {
        display.value = (180 / Math.PI * Math.atan(Number(display.value))).toFixed(2);
    }
    else {
        display.value = Math.atan(Number(display.value)).toFixed(2);
    }
}
function sec_inv() {
    if (deg == 0) {
        display.value = (180 / Math.PI * (Math.acos(1 / Number(display.value)))).toFixed(2);
    }
    else {
        display.value = (1 / Number(Math.acos(Number(display.value)).toFixed(2))).toString();
    }
}
function csc_inv() {
    if (deg == 0) {
        display.value = (180 / Math.PI * (Math.asin(1 / Number(display.value)))).toFixed(2);
    }
    else {
        display.value = (1 / Number(Math.asin(Number(display.value)).toFixed(2))).toString();
    }
}
function cot_inv() {
    if (deg == 0) {
        display.value = (180 / Math.PI * (Math.atan(1 / Number(display.value)))).toFixed(5);
    }
    else {
        display.value = (1 / Number(Math.atan(Number(display.value)).toFixed(2))).toString();
    }
}
function sinh() {
    display.value = ((Math.exp(Number(display.value)) - Math.exp(-Number(display.value))) / 2).toFixed(2);
}
function cosh() {
    display.value = ((Math.exp(Number(display.value)) + Math.exp(-Number(display.value))) / 2).toFixed(2);
}
function tanh() {
    var ex = Math.exp(Number(display.value));
    var e_x = Math.exp(-Number(display.value));
    display.value = ((ex - e_x) / (ex + e_x)).toString();
}
function sech() {
    display.value = (1 / ((Math.exp(Number(display.value)) + Math.exp(-Number(display.value))) / 2)).toFixed(2);
}
function csch() {
    display.value = (1 / ((Math.exp(Number(display.value)) - Math.exp(-Number(display.value))) / 2)).toFixed(2);
}
function coth() {
    var ex = Math.exp(Number(display.value));
    var e_x = Math.exp(-Number(display.value));
    display.value = (1 / ((ex - e_x) / (ex + e_x))).toString();
}
function sin_invh() {
    var x = Number(display.value);
    display.value = (Math.log(x + Math.sqrt(x * x + 1))).toFixed(2);
}
function cos_invh() {
    var x = Number(display.value);
    display.value = (Math.log(x + Math.sqrt(x * x - 1))).toFixed(2);
}
function tan_invh() {
    var x = Number(display.value);
    display.value = (0.5 * Math.log((1 + x) / (1 - x))).toFixed(2);
}
function sec_invh() {
    var x = Number(display.value);
    display.value = (1 / (Math.log(x + Math.sqrt(x * x - 1)))).toFixed(2);
}
function csc_invh() {
    var x = Number(display.value);
    display.value = (1 / (Math.log(x + Math.sqrt(x * x + 1)))).toFixed(2);
}
function cot_invh() {
    var x = Number(display.value);
    display.value = (1 / (0.5 * Math.log((1 + x) / (1 - x)))).toFixed(2);
}
function element(value) {
    display.value += value;
}
//1st line of button
function clr() {
    display.value = " ";
}
function backspace() {
    display.value = display.value.slice(0, -1);
}
function epsilon() {
    if (Number(display.value.substring(-1))) {
        display.value = (Math.exp(1)).toString();
    }
    else {
        display.value += Math.exp(1);
    }
}
function pi() {
    if (Number(display.value.substring(-1))) {
        display.value = (Math.PI).toString();
    }
    else {
        display.value += (Math.PI).toString();
    }
}
// 2nd line of button
function fractional() {
    display.value = (1 / Number(display.value)).toString();
}
function mod_x() {
    display.value = (Math.abs(Number(display.value))).toString();
}
function exponential(value) {
    display.value += value;
}
function mod(value) {
    display.value += value;
}
function square() {
    display.value = (Math.pow(Number(display.value), 2)).toString();
}
function cubed() {
    display.value = (Math.pow(Number(display.value), 3)).toString();
}
// 3rd line of button
function square_root() {
    display.value = (Math.pow(Number(display.value), 1 / 2)).toString();
}
function cube_root() {
    display.value = (Math.pow(Number(display.value), 1 / 3)).toString();
}
function opening_bracket(value) {
    display.value += value;
}
function closing_bracket(value) {
    display.value += value;
}
function getFactorialForLoop(n) {
    var result = 1;
    if (n > 1) {
        for (var i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    else {
        return "n has to be positive";
    }
}
function factorial() {
    display.value = getFactorialForLoop(parseInt(display.value)).toString();
}
function divide(value) {
    display.value += value;
}
//4th line of button
function x_power_y(value) {
    display.value += value;
}
function y_root_x(value) {
    display.value += value;
}
//5th line of button
function ten_power_x() {
    display.value = (Math.pow(10, Number(display.value))).toString();
}
function two_power_x() {
    display.value = (Math.pow(2, Number(display.value))).toString();
}
//6th line of button
function log() {
    var logten = function (x) {
        return Math.log(x) / Math.LN10;
    };
    display.value = (logten(Number(display.value))).toString();
}
//7th line of button
function lnx() {
    display.value = (Math.log(Number(display.value))).toString();
}
function e_power_x() {
    display.value = (Math.exp(Number(display.value))).toString();
}
function ythrroot(val1, val2) {
    display.value = Math.pow(Number(val2), 1 / Number(val1)).toString();
}
function ythlog(val1, val2) {
    display.value = (Math.log(Number(val1)) / Math.log(Number(val2))).toString();
}
function yroot(value) {
    var z = value.search("yroot");
    var y = value.substring(0, z);
    var x = value.substring(z + 5, value.length);
    return [x, y];
}
function logy(value) {
    var z = value.search("ylog");
    var y = value.substring(0, Number(z));
    var x = value.substring(Number(z) + 4, value.length);
    return [x, y];
}
function signalt() {
    display.value = ((-1) * (Number(display.value))).toString();
}
function equal() {
    if (display.value.includes("yroot")) {
        var y = yroot(display.value);
        ythrroot(y[0], y[1]);
    }
    if (display.value.includes("ylog")) {
        var y = logy(display.value);
        ythlog(y[0], y[1]);
    }
    display.value = display.value.replace(/\^/g, "**");
    display.value = eval(display.value);
}
