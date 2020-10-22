console.log('Warsztat - obsluga formularza IMIE i NAZWISKO');


/* moj sposob */
// const foo = (event) => {
//   event.preventDefault();

//   let fname = document.querySelectorAll('input')[0];
//   let lname = document.querySelectorAll('input')[1];

//   let fnameAtt = fname.getAttribute('value');
//   let lnameAtt = lname.getAttribute('value');
//   console.log('Imie: ' + fnameAtt);
//   console.log('Nazwisko: ' + lnameAtt);
// }

// let submit = document.getElementsByTagName('input')[2];
// submit.addEventListener('click', foo);

//----------------------------------------------------------------------


/* Krystiana sposob */
const submitForm = (event) => {
  event.preventDefault();
  // console.log('Submit Form');
  let fname = document.querySelector('[name="fname"]');
  let lname = document.querySelector('[name="lname"]');

  // console.log(`Imie: ${fname.value}, nazwisko: ${lname.value}`);

  /* petla for - rowniez polecona przez Krystiana*/
  for (let i = 0; i < 1; i++) {
    console.log('Imie:' + form[0].value);
    console.log('Nazwisko: ' + form[1].value);
  }
}

let form = document.getElementById('form');
form.addEventListener('click', submitForm);