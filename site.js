var $tel = document.querySelector('#txtTel');
var $form = document.querySelector('form');
var $ddd = document.querySelector('#ddd');
const url = 'https://wa.me/55';

$tel.addEventListener('keyup', () => {      
  var urlCompleta = url + $ddd.value + $tel.value;
  $form.setAttribute('action', urlCompleta);
  console.log(urlCompleta);
});