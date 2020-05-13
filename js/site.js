var $tel = document.querySelector('#txtTel');
var $form = document.querySelector('form');
const url = 'https://wa.me/55';

$tel.addEventListener('keyup', () => {      
  $form.setAttribute('action', url + $tel.value);
  console.log(url + $tel.value);
});