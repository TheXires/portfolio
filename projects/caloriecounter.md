---
title: Kalorienzähler
technologies: ['typescript', 'reactNative', 'firebase', 'expo']
short: App zur Protokollierung von Kalorientumsätzen, welche als Teil meiner Bacherlorarbeit erstellt wurde.
thumbnail: /images/caloriecounter.jpg
github: https://github.com/TheXires/eas-calorie-counter
headerImage: /images/wireframes_caloriecounter.jpg
description: Der Kalorienzähler erlaubt es den Nutzern, ihre Kalorienzufuhr zu protokollieren und kontrollieren. Ein Fortschrittsbalken auf der Startseite zeigt an, wie viele Kalorien bis zu dem in den Einstellungen festgelegten Kalorienziel aufgenommen werden können. Neben Kalorien können auch Fette, Kohlenhydrate und Proteine erfasst werden. Einmal erstellte Speisen und Getränke, werden gespeichert und können anschließend immer wieder verwendet werden. Außerdem ist es den Nutzern möglich zu diesen ein Bild hinzuzufügen, um sie leichter wiedererkennen zu können. Die erfassten Daten können übersichtlich in einer Statistik angesehen werden, welche ebenfalls die Möglichkeit bietet, das vom Nutzer in den Einstellungen eingetragene Gewicht zu visualisieren und über einen längeren Zeitraum als Graph darzustellen.
wireframes: Während der Entwicklung dieser App wurden die Schritte des Software Development Life Cycles nacheinander durchlaufen. Dazu gehört auch das Erstellen von Wireframes und/oder eines Prototyps. Da dies ein effizienteres Erstellen und Ausprobieren unterschiedlicher Designs erlaubt und so den Entwicklungsprozess vereinfacht und optimiert.
wireframeImage: /images/wireframes_caloriecounter.jpg
frontend: Im Frontend setzt der Kalorienzähler auf React Native, um eine native und plattformübergreifende Anwendung zu ermöglichen. Neben einem modernen und zeitlosen Design bietet die App einen dunklen und einen hellen Modus, welcher je nach Geräteeinstellungen automatisch verwendet wird. Darüber hinaus wird neben Deutsch auch die englische Sprache unterstützt. Aufgrund der Verwendung von i18n können in Zukunft auch weitere Sprachen einfach hinzugefügt werden. Um die App auch ohne Mac auf einem iPhone testen zu können, wurde Expo verwendet. Da neben den in Expo implementierten Feature weitere native Funktionen benötigt werden, wurde mithilfe der Expo Application Services (EAS) ein eigener Dev Client erstellt.
frontendImages: [
  'typescript',
  'reactNative',
  'firebase',
  'expo'
]
backend: Für das Backend wurde auf eine serverless Lösung von Google in Form von Firebase gesetzt. Konkret wurden dabei vier konkrete Firebase Dienste verwendet. Authentication für die Nutzer- und Rechteverwaltung, sodass Nutzer sich registrieren und einloggen können und sichergestellt wird, dass jeder Nutzer nur Zugriff auf die eigenen Daten hat. Für das strukturierte Speichern von Informationen und Daten wurde auf die dokumentenbasierte Datenbank Cloud Firebase gesetzt. Um das Hochladen und Anzeigen von Bildern in der App zu ermöglichen, wird der Cloud Storage genutzt. Um darüber hinaus weitere Funktionalitäten zu ermöglichen, wurden einige Cloud Functions hinzugefügt, die beispielsweise das Erstellen der Statistiken und Löschen von Benutzerkonten ermöglichen.
---
