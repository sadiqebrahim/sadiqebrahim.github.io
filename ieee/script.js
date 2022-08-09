//id display
var yes = document.getElementById("yes");
var no = document.getElementById("no");

if (yes.checked)
{
    document.getElementById('id').style.display = "flex";
    document.getElementsByName('id')[0].required = true;
}

yes.addEventListener('click',function(){
    document.getElementById('id').style.display = "flex";
    document.getElementsByName('id')[0].required = true;});

no.addEventListener('click',function(){
    document.getElementById('id').style.display = "none";
    document.getElementsByName('id')[0].required = false;});


//form submit
const form = document.forms['form'];

const database = 'https://script.google.com/macros/s/AKfycbye_8kzklvBoCg8ZzUaRdvEwoktKB_6skwreCOZXOKMjucW5-UblCuw3L7wHOsb_0xH/exec';

form.addEventListener('submit',function(e){
    var database = 'https://script.google.com/macros/s/AKfycbye_8kzklvBoCg8ZzUaRdvEwoktKB_6skwreCOZXOKMjucW5-UblCuw3L7wHOsb_0xH/exec';
    fetch(database, {method: 'POST', body: new FormData(form)})
        .then(function(){alert("REGISTRATION SUCCESSFUL!");form.reset();})
        .catch(function(){alert("REGISTRATION FAILED! please try again.")});
    e.preventDefault();});





