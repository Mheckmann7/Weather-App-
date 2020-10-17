//Constants and variables
const  API_KEY = CONFIG.openWeatherAPIKey; 
const BASE_URL = 'https://proxify-app-server.herokuapp.com/api';
let weatherData;


//Cached element references
const $title = $('#title');
const $temp = $('#temp'); 
const $index = $('#index'); 
const $desc = $('#desc'); 
//const $main = $('main');
const $form = $('form');
const $input = $('input[type="text"]');
//Event listeners
$form.on('submit',handleGetData); 

//Functions 
function handleGetData(event) {
    event.preventDefault(); 
    const userInput = $input.val();
    if(!userInput) return; 

    $.ajax(BASE_URL + '?city=' + userInput)
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