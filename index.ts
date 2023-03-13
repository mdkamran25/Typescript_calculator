/// <reference lib="es2015" />
let color_change:number = 0;
let button_change:number = 0;
let trigo_button:number = 0;
let fun_body:number = 0;
let memory:number[]  = [];

let display = document.getElementById("display") as HTMLInputElement;
// key press function of keyboard
document.addEventListener("keypress", (event):void => {
	var keyCode1:number = event.keyCode;
	
	// using asci value to check whther key_pressed is number, decimal point, or only these operator (+, -, *, /)
	if (keyCode1 >= 48 && keyCode1 <= 57 || keyCode1 == 46 || keyCode1 == 42 || keyCode1 == 43 || keyCode1 == 45 || keyCode1 == 47) {
		display.value += event.key;
	}
	// Checking if key pressed is only "Enter" key & if "Enter" key then eval the result
	else if (keyCode1 == 13) {
        (document.activeElement as HTMLElement).blur();
        equal();
    }
});
let reusable = ():void => {
        document.getElementById("trigo_fun_body")!.style.display = "";
        document.getElementById("trigo_fun_sin")!.style.display = "";
        document.getElementById("trigo_fun_sec")!.style.display = "";
        document.getElementById("trigo_fun_sin_1")!.style.display = "";
        document.getElementById("trigo_fun_sec_1")!.style.display = "";
        document.getElementById("trigo_fun_sinh")!.style.display = "";
        document.getElementById("trigo_fun_sech")!.style.display = "";
        document.getElementById("trigo_fun_sinh_1")!.style.display = "";
        document.getElementById("trigo_fun_sech_1")!.style.display = "";
}
function second_button_display_Change():void{
    if (color_change == 0) {
        const elems = document.getElementsByClassName('second_change')as HTMLCollectionOf<HTMLElement>;
        for (var i:number = 0; i < elems.length; i++) {
            elems[i].style.display = "none";
            console.log("for");

        }

        const elem1 = document.getElementsByClassName('second_changed')as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < elem1.length; i++) {
            elem1[i].style.display = "block";

        }

        document.getElementById('second_button')!.style.backgroundColor = "rgb(121, 169, 215)";
        color_change = 1;
        console.log(color_change)
        button_change = 1;
        console.log(button_change)

    }
    else {
        console.log(color_change)
        const elems = document.getElementsByClassName('second_change') as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.display = "block";
        }
        const elem1 = document.getElementsByClassName('second_changed')as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < elem1.length; i++) {
            elem1[i].style.display = "none";

        }
        document.getElementById('second_button')!.style.backgroundColor = "";
        color_change = 0;
        button_change = 0;
    }
    //if function drpdown or trigo dropdown is open then it will close when click on 2nd 
    if (fun_body == 1 || trigo_button == 1) {
        document.getElementById('fun_1st_row')!.style.display = "";
        document.getElementById('fun_2nd_row')!.style.display = "";
        fun_body = 0;
        //reusabalitiy of code usign an anonymous function
        reusable();
        trigo_button = 0;
    }
}



function trigo_fun():void {
    if (trigo_button == 0) {
        document.getElementById("trigo_fun_body")!.style.display = "block";
        document.getElementById("trigo_fun_sin")!.style.display = "flex";
        document.getElementById("trigo_fun_sec")!.style.display = "flex";
        trigo_button = 1;
    }
    else {
        //reusabalitiy of code usign an anonymous function
        reusable();
        trigo_button = 0;
    }
    if (fun_body == 1) {
        document.getElementById('fun_1st_row')!.style.display = "";
        document.getElementById('fun_2nd_row')!.style.display = "";
        fun_body = 0;
    }
}
function fun_body_display():void {
    if (fun_body == 0) {
        document.getElementById('fun_body')!.style.display = "block";
        document.getElementById('fun_1st_row')!.style.display = "flex";
        document.getElementById('fun_2nd_row')!.style.display = "flex";
        fun_body = 1;
    }
    else {
        document.getElementById('fun_1st_row')!.style.display = "";
        document.getElementById('fun_2nd_row')!.style.display = "";
        fun_body = 0;
    }
    if (trigo_button == 1) {
        //reusabalitiy of code usign an anonymous function
        reusable();
        trigo_button = 0;
    }
}
function mc():void {
    memory = [];
    (document.getElementById('mc_') as HTMLInputElement).disabled = true;
    (document.getElementById('mr_') as HTMLInputElement).disabled = true;
}
function mr():void {
    let s:number = memory.length;
    display.value = memory[s - 1].toString();
}
function m_add():void{
    let s:number = memory.length;
    if (memory.length == 0) {
        memory.push(Number(display.value));

    }
    if (memory.length != 0) {
        (document.getElementById('mc_') as HTMLInputElement).disabled = false;
        (document.getElementById('mr_') as HTMLInputElement).disabled = false;
        memory[s - 1] += Number(display.value);
    }
}
function m_sub():void {
    if (memory.length == 0) {
        memory.push(Number(display.value));

    }
    if (memory.length != 0) {
        (document.getElementById('mc_') as HTMLInputElement).disabled = false;
        (document.getElementById('mr_') as HTMLInputElement).disabled = false;
        let s = memory.length;
        memory[s - 1] -= Number(display.value);
    }
}
function ms():void {
    memory.push(Number(display.value));
    if (memory.length != 0) {
        (document.getElementById('mc_') as HTMLInputElement).disabled = false;
        (document.getElementById('mr_') as HTMLInputElement).disabled = false;
    }
}
function second_sin_change():void {
    document.getElementById("trigo_fun_sin")!.style.display = "";
    document.getElementById("trigo_fun_sec")!.style.display = "";
    document.getElementById("trigo_fun_sin_1")!.style.display = "flex";
    document.getElementById("trigo_fun_sec_1")!.style.display = "flex";
    document.getElementById('second_sin_inverse')!.style.backgroundColor = "rgb(121, 169, 215)";
}
function second_sin_inverse_change():void {
    document.getElementById("trigo_fun_sin")!.style.display = "flex";
    document.getElementById("trigo_fun_sec")!.style.display = "flex";
    document.getElementById("trigo_fun_sin_1")!.style.display = "";
    document.getElementById("trigo_fun_sec_1")!.style.display = "";
}
function hyp_sin_change():void {
    document.getElementById("trigo_fun_sin")!.style.display = "";
    document.getElementById("trigo_fun_sec")!.style.display = "";
    document.getElementById("trigo_fun_sinh")!.style.display = "flex";
    document.getElementById("trigo_fun_sech")!.style.display = "flex";
    document.getElementById('hyp_sech')!.style.backgroundColor = "rgb(121, 169, 215)";


}
function second_sinh_inverse_change():void {
    document.getElementById("trigo_fun_sinh_1")!.style.display = "flex";
    document.getElementById("trigo_fun_sech_1")!.style.display = "flex";
    document.getElementById("trigo_fun_sinh")!.style.display = "";
    document.getElementById("trigo_fun_sech")!.style.display = "";
    document.getElementById('second_sinh_inverse')!.style.backgroundColor = "rgb(121, 169, 215)";
    document.getElementById('hyp_sech_inverse')!.style.backgroundColor = "rgb(121, 169, 215)";
}
function hyp_change_sinh_inverse():void {
    document.getElementById("trigo_fun_sinh_1")!.style.display = "flex";
    document.getElementById("trigo_fun_sech_1")!.style.display = "flex";
    document.getElementById("trigo_fun_sin_1")!.style.display = "";
    document.getElementById("trigo_fun_sec_1")!.style.display = "";
    document.getElementById('second_sinh_inverse')!.style.backgroundColor = "rgb(121, 169, 215)";
    document.getElementById('hyp_sech_inverse')!.style.backgroundColor = "rgb(121, 169, 215)";
}
function reverse_to_sin_inverse():void {
    document.getElementById("trigo_fun_sinh_1")!.style.display = "";
    document.getElementById("trigo_fun_sech_1")!.style.display = "";
    document.getElementById("trigo_fun_sin_1")!.style.display = "flex";
    document.getElementById("trigo_fun_sec_1")!.style.display = "flex";
}
function sinh_inverse_second_reverse_to_sinh():void {
    document.getElementById("trigo_fun_sinh_1")!.style.display = "";
    document.getElementById("trigo_fun_sech_1")!.style.display = "";
    document.getElementById("trigo_fun_sinh")!.style.display = "flex";
    document.getElementById("trigo_fun_sech")!.style.display = "flex";
    document.getElementById('hyp_sech')!.style.backgroundColor = "rgb(121, 169, 215)";
}
function hyp_sech_change_to_sin():void {
    document.getElementById("trigo_fun_sin")!.style.display = "flex";
    document.getElementById("trigo_fun_sec")!.style.display = "flex";
    document.getElementById("trigo_fun_sinh")!.style.display = "";
    document.getElementById("trigo_fun_sech")!.style.display = "";
}
let F_E:number = 0;
function fe():void  {
    if (F_E == 0) {
        display.value = Number(display.value).toFixed(5).toString();
        document.getElementById('F_E_')!.style.backgroundColor = "rgb(121, 169, 215)";
        F_E = 1;
    }
    else {
        display.value = Number(display.value).toExponential().toString();
        document.getElementById('F_E_')!.style.backgroundColor = "";
        F_E = 0;
    }
}
let deg:number = 0;
function deg_to_radian():void {
    if (deg == 0) {
        deg = 1;
        document.getElementById("degree")!.innerHTML = "RAD";
    }
    else {
        deg = 0;
        document.getElementById("degree")!.innerHTML = "DEG";
    }

}
function random():void{
    display.value = Math.random().toString();
}
function ceil():void{
    display.value = (Math.ceil(Number(display.value))).toString();
}
function floor():void{
    display.value = (Math.floor(Number(display.value))).toString();
}
function dms():void{
        let degString: string = display.value;
        let deg: number = parseInt(degString);
        let minutes: number = (deg - Math.floor(deg)) * 60;
        let seconds = (minutes - minutes) * 60; 
        display.value = parseFloat(`${deg}.${minutes}${seconds}`).toFixed(4).toString();
}
function deg_dms():void{
    let dmsString: string = display.value;
    let dms:number = Number(dmsString);
    let sec: number = Math.round((dms - Math.floor(dms)) * 10000);
    let min: number = Math.round((dms - Math.floor(dms)) * 100 * 60);
    dms = dms + min / 60 + sec / 3600;
    display.value = (deg.toFixed(2)).toString();
}
function sin():void {
    if (deg == 0) {
        display.value = (Math.sin((Math.PI / 180) * Number(display.value))).toFixed(2);
    }
    else {
        let sinString:string = display.value;

        display.value = (Math.sin(Number(display.value))).toFixed(2);
    }
}
function cos():void{
    if (deg == 0) {
        display.value = (Math.cos(Math.PI / 180 * (Number(display.value)))).toFixed(2);
    }
    else {
        display.value = Math.cos(Number(display.value)).toFixed(2);
    }
}
function tan():void  {
    if (deg == 0) {
        display.value = (Math.tan(Math.PI / 180 * (Number(display.value)))).toFixed(2);

    }
    else {
        display.value = Math.tan((Number(display.value))).toFixed(2);
    }
}
function sec():void  {
    if (deg == 0) {
        display.value = (1 / Math.cos(Math.PI / 180 * (Number(display.value)))).toFixed(2);
    }
    else {
        display.value = (1 / Number(Math.cos((Number(display.value))).toFixed(2))).toString();
    }
}
function csc():void  {
    if (deg == 0) {

        display.value = (1 / Math.sin(Math.PI / 180 * Number(display.value))).toFixed(2);
    }
    else {
        display.value = (1 / Number(Math.sin(Number(display.value)).toFixed(2))).toString();
    }
}
function cot():void {
    if (deg == 0) {
        display.value = (1 / Number((Math.tan(Math.PI / 180 * Number(display.value))).toFixed(2))).toString();
    }
    else {
        display.value = (1 / Number(Math.tan(Number(display.value)).toFixed(2))).toString();
    }
}
function sin_inv():void {
    if (deg == 0) {
        display.value = (180 / Math.PI * Math.asin(Number(display.value))).toFixed(2);
    }
    else {
        display.value = Math.asin(Number(display.value)).toFixed(2);
    }
}
function cos_inv():void  {
    if (deg == 0) {
        display.value = (180 / Math.PI * Math.acos(Number(display.value))).toFixed(2);
    }
    else {
        display.value = Math.acos(Number(display.value)).toFixed(2);
    }
}
function tan_inv():void  {
    if (deg == 0) {
        display.value = (180 / Math.PI * Math.atan(Number(display.value))).toFixed(2);
    }
    else {
        display.value = Math.atan(Number(display.value)).toFixed(2);
    }
}
function sec_inv():void  {
    if (deg == 0) {
        display.value = (180 / Math.PI * (Math.acos(1 / Number(display.value)))).toFixed(2);
    }
    else {
        display.value = (1 / Number(Math.acos(Number(display.value)).toFixed(2))).toString();
    }
}
function csc_inv():void {
    if (deg == 0) {
        display.value = (180 / Math.PI * (Math.asin(1 / Number(display.value)))).toFixed(2);
    }
    else {
        display.value = (1 / Number(Math.asin(Number(display.value)).toFixed(2))).toString();
    }
}
function cot_inv():void {
    if (deg == 0) {
        display.value = (180 / Math.PI * (Math.atan(1 / Number(display.value)))).toFixed(5);
    }
    else {
        display.value = (1 / Number(Math.atan(Number(display.value)).toFixed(2))).toString();
    }
}
function sinh():void {
    display.value = ((Math.exp(Number(display.value)) - Math.exp(-Number(display.value))) / 2).toFixed(2);
}
function cosh():void {
    display.value = ((Math.exp(Number(display.value)) + Math.exp(-Number(display.value))) / 2).toFixed(2);
}
function tanh():void {
    const ex = Math.exp(Number(display.value));
    const e_x = Math.exp(-Number(display.value));
    display.value = ((ex - e_x) / (ex + e_x)).toString();
}
function sech():void{
    display.value = (1 / ((Math.exp(Number(display.value)) + Math.exp(-Number(display.value))) / 2)).toFixed(2);
}
function csch():void {   
    display.value = (1 / ((Math.exp(Number(display.value)) - Math.exp(-Number(display.value))) / 2)).toFixed(2);
}
function coth():void {
    const ex = Math.exp(Number(display.value));
    const e_x = Math.exp(-Number(display.value));
    display.value = (1/((ex - e_x) / (ex + e_x))).toString();
}
function sin_invh():void {
    let x:number = Number(display.value)
    display.value = (Math.log(x + Math.sqrt(x * x + 1))).toFixed(2);
}
function cos_invh():void {
    let x:number = Number(display.value)
    display.value = (Math.log(x + Math.sqrt(x * x - 1))).toFixed(2);
}
function tan_invh():void {
    let x:number = Number(display.value)
    display.value = ( 0.5 * Math.log((1 + x) / (1 - x))).toFixed(2);
}
function sec_invh():void {
    let x:number = Number(display.value)
    display.value = (1/(Math.log(x + Math.sqrt(x * x - 1)))).toFixed(2);
}
function csc_invh():void {
    let x:number = Number(display.value)
    display.value =(1/(Math.log(x + Math.sqrt(x * x + 1)))).toFixed(2);
}
function cot_invh():void {
    let x:number = Number(display.value)
    display.value = (1/( 0.5 * Math.log((1 + x) / (1 - x)))).toFixed(2);
}
function element(value:string):void {
    display.value += value;
}
//1st line of button
function clr():void {
    display.value = " ";
}

function backspace():void {
    display.value = display.value.slice(0, -1);
}
function epsilon():void {
    if (Number(display.value.substring(-1))) {
        display.value = (Math.exp(1)).toString();
    }
    else {
        display.value += Math.exp(1);
    }
}
function pi():void {
    if (Number(display.value.substring(-1))) {
        display.value = (Math.PI).toString();
    }
    else {
        display.value += (Math.PI).toString();
    }
}
// 2nd line of button
function fractional():void {
    display.value = (1 / Number(display.value)).toString();
}
function mod_x():void {
    display.value = (Math.abs( Number(display.value))).toString();
}
function exponential(value):void {
    display.value += value;
}
function mod(value):void {
    display.value += value;
}
function square():void {
    display.value = (Math.pow(Number(display.value), 2)).toString();
}
function cubed():void {
    display.value = (Math.pow(Number(display.value), 3)).toString();
}
// 3rd line of button
function square_root():void {
    display.value = (Math.pow(Number(display.value), 1 / 2)).toString();
}
function cube_root():void {
    display.value = (Math.pow(Number(display.value), 1 / 3)).toString();
}
function opening_bracket(value):void {
    display.value += value;
}
function closing_bracket(value):void {
    display.value += value;
}
function getFactorialForLoop(n:number):number|string {
    let result:number = 1;
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    else {
        return "n has to be positive";
    }
}
function factorial():void {
    display.value = getFactorialForLoop(parseInt(display.value)).toString();
}
function divide(value):void {
    display.value += value;
}

//4th line of button
function x_power_y(value):void {
    display.value += value;
}
function y_root_x(value):void {
    display.value += value;
}

//5th line of button
function ten_power_x():void {
    display.value = (Math.pow(10, Number(display.value))).toString();
}
function two_power_x():void {
    display.value = (Math.pow(2, Number(display.value))).toString();
}

//6th line of button
function log():void {
        let logten = function(x:number) {
        return Math.log(x) / Math.LN10;
        };
    display.value = (logten(Number(display.value))).toString();  
}
    

//7th line of button
function lnx():void {
    display.value = (Math.log(Number(display.value))).toString();
}
function e_power_x() :void{
    display.value = (Math.exp(Number(display.value))).toString();
}


function ythrroot(val1:string, val2:string):void {
    display.value = Math.pow(Number(val2), 1 / Number(val1)).toString();
}
function ythlog(val1, val2):void {
    display.value = (Math.log(Number(val1)) / Math.log(Number(val2))).toString();
}
function yroot(value):string[] {
    let z:string = value.search("yroot");
    let y:string = value.substring(0, z);
    let x:string = value.substring(z + 5, value.length);
    return [x, y]
}

function logy(value:string):string[] {
    let z:Number = value.search("ylog");
    let y:string = value.substring(0, Number(z));
    let x:string = value.substring(Number(z) + 4, value.length);
    return [x, y]
}
function signalt():void {
    display.value = ((-1) * (Number(display.value))).toString();
}
function equal():void {
    if ((display.value as string).includes("yroot")) {
        let y:string[] = yroot(display.value);
        ythrroot(y[0], y[1]);

    }
    if ((display.value as string).includes("ylog")) {
        let y:string[] = logy(display.value);
        ythlog(y[0], y[1]);

    }
    display.value = display.value.replace(/\^/g, "**");
    display.value = eval(display.value);
}