function init(){
//add your javascrip between these two lines of code
var button = document.getElementById('entrybutton');

button.addEventListener('click', showMeText);
}

window.addEventListener('load', init);