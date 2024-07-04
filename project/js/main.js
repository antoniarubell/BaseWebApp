// This function tells your app the run the get weather function as soon as the app loads (aka when document is readied)
$(document).ready(function(){
  getWeather();
})

function getWeather(){
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&APPID="+apiKey;

  $.ajax(url,{success: function(data){
    // This is a way to log the results in the console, to make sure it's working
    //console.log(data);

    //This tells ajax to find teh class "city" and replace the text with the name of the city from the API
    //Then it tells it to find the data object and pull out the name attribute
    $(".city").text("City: " + data.name);
    $(".temp").text("Temperature: " + data.main.temp);
    $(".humidity").text("Humidity: " + data.main.humidity);
  }})
}

function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}