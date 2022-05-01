---
title: Car Controller
technologies: ['typescript', 'react', 'electron']
short: Anwendung zum Eingreifen in den Fahrprozess eines im Simulator autonomen fahrenden Autos im Rahmen einer Projektarbeit.
thumbnail: /images/projects/carcontroller/thumbnail.jpg
github: https://github.com/TheXires/carController
headerImage: /images/projects/carcontroller/thumbnail.jpg
description: Der Car Controller ist eine Anwendung, die im Rahmen des Projekts „Multimodale Interaktion, als Gruppenarbeit mit 2 Personen, an der Hochschule entstanden ist. Sie soll das Eingreifen in den Fahrprozess eines im Simulator autonom fahrenden Autos ermöglichen. Nach einigen Überlegungen haben wir uns für eine Touch- und eine Sprachsteuerung entschieden. Über diese können dann beispielsweise die Geschwindigkeit angepasst, ein Spurwechsel initiiert oder das Abbiegen veranlasst werden. Der tatsächliche Anschluss an den Fahrsimulator war kein Teil des Projektes, wurde allerdings im Server Code des Projektes berücksichtigt.
wireframes: Damit alle ihre Vorstellungen und Ideen zur Gestaltung des Car Controllers einbringen können, wurde ein simpler Prototyp zur Visualisierung dieser Gedanken erstellt. Darüber hinaus konnte so sichergestellt werden, dass nicht aneinander vorbei gesprochen und entwickelt wird. Daher ist ein Prototyp gerade in Projekten mit mehreren Entwicklern essenziell und hilfreich. Das Design der finalen Anwendung wurde im Laufe der Zeit immer wieder etwas angepasst, was in mehreren kleinen Abweichungen vom Prototyp resultierte.
wireframeImage: /images/projects/carcontroller/wireframes.jpg
frontend: Zur Umsetzung der Toucheingabe des Car Controllers wurde React verwendet und mithilfe von Electron als eine Desktop Anwendung gestaltet. Zur Darstellung und Animation des Autos sowie der Straße als 3D Modelle wurde Three.js in Kombination mit dem für React Entwickelten react-three-fiber verwendet. Wird durch die UI ein Event ausgelöst, werden die Daten zur Auswertung an einen Server gesendet, der dann eine Rückmeldung zur Anpassung der UI gibt.
frontendImages:
  [
    '/images/projects/carcontroller/image1.jpg',
    '/images/projects/carcontroller/image2.jpg',
    '/images/projects/carcontroller/image3.jpg',
    '/images/projects/carcontroller/image4.jpg',
  ]
backend: Das Backend des Car Controllers besteht aus zwei Teilen. Der erste Teil ist die Sprachsteuerung, welche mithilfe von Node.js und PicoVoice umgesetzt wurde. Besonders wichtig bei der Auswahl von PicoVoice war, dass es vollständig offline auf dem Gerät läuft, um so sicherzustellen, dass die Steuerung auch innerhalb eines Tunnels oder in ländlichen Regionen funktioniert, in denen es keine Internetverbindung gibt. Konkret genutzt wurden die Wake Word Engine Porcupine und Rhino, um das Gesprochene in eine brauchbare Datenstruktur zu bringen (Speech-to-Intent). Diese Daten wurden dann über eine Socketverbindung an den Node.js Server weitergeleitet. Dieser hält alle relevanten Daten und wertet den eingehenden Befehl aus. Anschließend sendet er ebenfalls über Sockets die veränderten Daten an die Electron Anwendung, welche ihre UI entsprechend aktualisiert.
---
