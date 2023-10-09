function palavra(){
    const a = document.querySelector('#a').value;
    const b = document.querySelector('#b').value;
    const texto = document.querySelector('h4');
 
    while (a,b <= 20);
 
 if ((a.length > b.length)) {
    texto.innerHTML = 'A';
 }
 else if ((b.length > a.length)) {
    texto.innerHTML = 'B';
 }
 else {
    texto.innerHTML = '*';
 }
 }
