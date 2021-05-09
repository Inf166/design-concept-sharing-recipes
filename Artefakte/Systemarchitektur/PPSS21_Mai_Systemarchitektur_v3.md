# Systemarchitektur
 
## Client Layer

### Enddevices
Auf den Endgeräten der Nutzer soll sich lediglich die gecachte Instanz des Presentaion-Modules befinden. Zusammen mit dem Service Worker wird hier eine beschränkte Offline Version des Services geboten. Zum Beispiel die Möglichkeit gecachte Rezepte auszudrucken über das Print-Service-Module. Der Service Worker übernimmt das Handling von dem Cachen der einkommenden Inhalte wie Push-Notifications und Rezepten.‘

### Mailserver
Der Mailserver ist eine externe Instanz welche den Versand und die Zustellung der Mails, ausgehend von dem Notifications-Module, übernimmt.

### Push Notification Service
Der Push-Notification-Service ist eine externe Instanz welche den Versand und die Zustellung der Push-Notifications, ausgehend von dem Notifications-Module, übernimmt.

## Service Layer
--- 

### Presentation Module
Gespeichert auf dem Server werden in diesem Modul das HTML, CSS, JavaScript und weitere Assets die für die Darstellung des Frontends gebraucht werden.

#### Dynamicly Reactive Javascript Framework Module
Für das Frontend des Services bietet sich ein dynamisches Javascript Framework an wie React, Angular oder Vue. Sie sind Modern und bieten die Möglichkeit Inhalte dynamisch anzuzeigen.

#### Service Worker Module
Der Servicer Worker bietet viele Möglichkeiten um die Kommunikation mit den anderen Services zu regeln. Einkommende Nachrichten oder Daten werden hier entgegengenommen.

#### User State Module
Dieses Module übernimmt die Kommunikation mit dem Users-Module um den Zugriff auf die eigenen Rezepte zu ermöglichen und sicher zu stellen, dass niemand anderes das kann.

#### Print Service Module
Ein einfaches Javascript Module das aus den Datensätzen eines Rezept ein nutzerfreundliches Dokument generiert und für das Drucken vorbereitet.

--- 

### Users Module
In diesem Modul werden die UserIds, Vor- und Nachname, Mail-Adressen und Passwörter sowie die DeviceTokens gespeichert, die für die Authentifizierung als auch Registrierung neuer Nutzer unabdingbar sind.

#### Authentification Module
Über die Zugangsdaten und mitgelieferten Private Keys wird dieses Modul prüfen ob das Endgerät und der Login valide sind und gibt dem Endgerät den Zugang frei.

#### Registration Module
Dieses Module kümmert sich um die Neuzugänge und kümmert sich darum dass diese verifiziert sind.

--- 

### Contacts Module

#### Event Processing Logic
Die Anfragen ein Kochbuch einzusehen oder den Zugang zu widerrufen, gehen hier ein und werden an das Contact-Manager-Module weitergereicht.

#### Contact Manager Module
Hier werden die Datenbank Operationen durchgeführt und die Benachrichtigungen für ausstehende Anfragen an das Notifications-Module weitergegeben.

--- 

### Recipies Module

#### Event Processing Logic

#### Recipe Manager Module

#### Recipe Publisher Module

--- 

### Notifications Module

#### Event Processing Logic

#### Push Notification Module

#### Email Notification Module

--- 

### Recommendations Module

#### Recommendation Generator Module

#### Preferences Manager Module
