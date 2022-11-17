// var dane = document.getElementsByClassName('input')
var dane1 = document.getElementById('dane1').value


var dane2 = document.getElementById('dane2').value
var wynik;

document.getElementById('oblicz').addEventListener('click', ()=>{
    switch (dane1){
        case 1:
            wynik = dane2 * 4
            break;
        case 2:
            wynik = dane2 * 3,5
            break;
        default:
            wynik = dane2 * 0 
    }
    document.getElementById('wynik').innerHTML = `koszt paliwa: ${wynik}zł`
})