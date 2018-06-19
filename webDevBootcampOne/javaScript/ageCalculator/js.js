var yearsOld = prompt("How old are you?");
// the .25 averages since leap years are every 4 years
var ageInDays = yearsOld * 365.25;
alert(yearsOld + " years is roughly " + ageInDays + " days");