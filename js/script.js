//Constants and variables
const  API_KEY = 'b428edff442fe38bb8486623bb43ce3b'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
let weatherData;


//Cached element references
const $title = $('#title');
const $temp = $('#temp'); 
const $index = $('#index'); 
const $desc = $('#desc'); 
const $main = $('main');
const $form = $('form');
const $input = $('input[type="text"]');
//Event listeners
$form.on('submit',handleGetData); 
//Functions 

//q={city name}&appid={API key}
function handleGetData(event) {
    event.preventDefault(); 
    userInput = $input.val();
    if(!userInput) return; 

    $.ajax(BASE_URL + 'q=' + userInput + '&units=metric&appid=' + API_KEY)
    .then(function(data) {
        console.log('Data: ', data); 
        weatherData = data; 
        render(); 
    }, function(error) {
        console.log('Error: ', error); 
    }); 
}

function render() {
    $title.text('Here is your weather report for ' + weatherData.name);
    $temp.text('Temp ' + weatherData.main.temp + ' C'); 
    $index.text('Feels like ' + weatherData.main.feels_like + ' C'); 
    $desc.text('Looks like ' + weatherData.weather[0].description);
}