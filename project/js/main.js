// This function tells your app the run the get weather function as soon as the app loads (aka when document is readied)
//UPDATE: We no longer need this function, because we are not automatically loading the weather data, we are relying on a searchQuery and button
// $(document).ready(function(){
//   getWeather();
// })

function getWeather(searchQuery){
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=imperial&APPID="+apiKey;

  $(".error-message").text("")
  $(".city").text("City: ");
  $(".temp").text("Temperature: ");
  $(".humidity").text("Humidity: ");

  $.ajax(url,{success: function(data){
    // This is a way to log the results in the console, to make sure it's working
    //console.log(data);

    //This tells ajax to find teh class "city" and replace the text with the name of the city from the API
    //Then it tells it to find the data object and pull out the name attribute
    $(".city").text("City: " + data.name);
    $(".temp").text("Temperature: " + data.main.temp);
    $(".humidity").text("Humidity: " + data.main.humidity);
    //This will take whatever error the server sends back adn passes it into the function
  }, error: function(error){
    //targeting a div with teh class of error-message and updating the text to say "An error occurred" (need to create this in HTML)
    $(".error-message").text("An error occurred");
  }
})
}

function searchWeather(){
  //the $ is a jquery shorthand by the way
  //this uses jquery to target the field with the class "search" and pull out the value and save it as the searchQuery
  //this works bc we have a search input field in our html with the class "search"
  var searchQuery = $(".search").val();

  getWeather(searchQuery);
}

function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}