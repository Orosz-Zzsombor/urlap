function Submit(){
    document.getElementById('igazoltNev').innerHTML = document.getElementById('Megrendelo').value;
    document.getElementById('igazoltCim').innerHTML = document.getElementById('cim').value;
    document.getElementById('igazoltTelefon').innerHTML = document.getElementById('telefon').value;
}
function fokusz(x){
    document.getElementById(x).style.background = "lightblue"

}
function homaly(x){
    document.getElementById(x).style.background = "lightgray"
}