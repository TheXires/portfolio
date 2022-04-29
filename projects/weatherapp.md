---
title: Wetter App
technologies: ['typescript', 'reactNative', 'cloudflare', 'expo']
short: Minimalistische Wetter App mit modernem Design und 3D Icons, basierend auf einem Prototyp von Behanced.
thumbnail: /images/weatherapp.jpg
github: https://github.com/TheXires/weather
headerImage: /images/weatherapp.jpg
description: Die Wetter-App bietet die Möglichkeit, das Wetter für die aktuelle Position oder eine beliebige Stadt anzuzeigen. Dabei gibt eine stündliche Vorschau für die nächsten 24 Stunden oder eine tägliche Vorhersage für die nächsten 7 Tage. Für den aktuellen Tag werden neben einer kurzen Beschreibung sowie der Temperatur auch Daten wie Windgeschwindigkeit, Sichtweite und der UV-Index angezeigt.
wireframes: Das Design dieser Anwendung stammt von einer Designvorlage von Behanced, die mittlerweile nicht mehr verfügbar ist. Die Umsetzung sollte so genau wie möglich erfolgen. Allerdings sind die Navigation und genaue Funktionsweise, basierend auf den Designs, nicht vollständig ersichtlich. An den nötigen Stellen wurden dann eigene Lösungen entwickelt und umgesetzt. Ebenfalls nicht öffentlich verfügbar waren die verwendeten 3D-Wetter Icons, welche daher durch ähnliche ersetzt wurden.
wireframeImage: /images/weatherapp.jpg
frontend: Die Umsetzung des Frontends der Wetter-App erfolgte unter Verwendung von React Native. Das Design ist schlicht und modern gehalten. Es setzt auf dunkle Farben, 3D Icons und eine angepasste Schriftart. Um die App auch ohne Mac auf einem iPhone testen zu können, wurde Expo verwendet. Da für die App an sich keine nativen Funktionen benötigt werden, musste kein eigener Dev Client erstellt werden. Die Expo Application Services wurden allerdings dennoch benötigt, damit die App ohne den Apple App Store als Testversion auf einem iPhone installiert werden kann.
frontendImages:
  [
    '/images/projects/weatherapp/image1.jpg',
    '/images/projects/weatherapp/image2.jpg',
    '/images/projects/weatherapp/image3.jpg',
  ]
backend: Die verwendeten Daten stammen von der OpenWeather API. Über die One Call API werden die Wetterdaten für den aktuellen Tag sowie die stündlichen und täglichen Vorhersagen abgerufen. Mithilfe der Geocoding API werden die Städtenamen in Geolocations umgewandelt und umgekehrt. Damit der benötigte API-Schlüssel nicht in der App liegt und möglicherweise ausgelesen wird, wurde zwischen App und OpenWeather API eine serverless Funktion geschaltet, welche als Cloudflare Worker ausgeliefert wird.
---
