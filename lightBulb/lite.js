let switch1 = document.getElementById('switch1');
let lever = document.getElementsByClassName('lever');
let light = document.getElementsByClassName('light-bulb-on');

function change(){
  for (var i = 0; i < lever.length; i++) {
       lever[i].classList.toggle('lever-thrown')
       }
}
function lightToggle(){
  for (var i = 0; i < light.length; i++) {
       light[i].classList.toggle('light-bulb-off')
       }
}


switch1.addEventListener('click',function(){
  change();
  lightToggle();
})