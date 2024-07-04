# get_weather.py
import requests
import sys
import json

def get_weather(city_name):
    api_key = "de7c147ddb0ac76a8ca839042b94c47a"
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    complete_url = f"{base_url}appid={api_key}&q={city_name}&units=imperial"
    response = requests.get(complete_url)
    return response.json()

if __name__ == "__main__":
    city_name = sys.argv[1]
    weather_data = get_weather(city_name)
    result = {
        "city": city_name,
        "temp": f"{weather_data['main']['temp']}°F"
    }

    print(json.dumps(result))