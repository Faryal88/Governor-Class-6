// MARKSHEET WORK
var english = 80;
var urdu = 70;
var Maths = 70;
var Isl = 63;
var Com = 80;
var total = 500;
var obtain = english + urdu + Maths + Isl + Com;
var percentage = obtain / total * 100;
console.log(obtain);
console.log(percentage);
if (percentage >= 80 && percentage <= 100) {
    console.log("A-1 Grade");
}
else if (percentage >= 70 && percentage < 80) {
    console.log("A Grade");
}
else if (percentage >= 60 && percentage < 60) {
    console.log("B Grade");
}
else if (percentage >= 50 && percentage < 50) {
    console.log("C Grade");
}
else if (percentage >= 40 && percentage < 40) {
    console.log("D Grade");
}
else {
    console.log("Fail");
}
