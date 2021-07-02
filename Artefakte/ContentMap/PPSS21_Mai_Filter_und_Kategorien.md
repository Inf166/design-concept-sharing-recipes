# Herkunft
    - Afrika
    - Amerika
        - Nord Amerika
        - Süd Amerika
    - Asien
        - Chinesisch
        - Japanisch
    - Australien 
    - Europa
        - Deutschland
            - Rheinische Küche
        - England
        - Mittelmeer
        - Ost Europa
# Ernährungsart
    - Carnivore
    - Flexitarier
    - Freeganer
    - Frutarier
    - Pescetarier
    - Rohköstler
    - Veganer
    - Vegetarier
        - Lacto-Vegetarier
        - OVO-Vegetarier
        - Puddingvegetarier
# Unverträglichkeit
    - Alkohol-Intoleranz
    - Fruktoseintoleranz 
    - Glutenunverträglichkeit
    - Histaminintoleranz 
    - Laktoseintoleranz 
    - Sacharoseintoleranz 
    - Sorbitintoleranz 
# Spezielles
    - Babynahrung
    - Camping
    - Diabetiker
    - Fettarm
    - Kalorienarm
    - Resteessen
    - Studentenfutter
# Anlass
    - Halloween
    - Ostern
    - Party
    - Silvester
    - Weihnachten
# Saison
    - Frühling
    - Sommer
    - Herbst
    - Winter
# Menü
    - Beilage
    - Vorspeise
        - kalte Vorspeise
        - warme Vorspeise
    - Zwischenspeise
        - kalte Zwischenspeise 
        - warme Zwischenspeise
    - Hauptspeise
    - Nachspeise 
        - kalte Süßspeise
        - warme Süßspeise
# Menüart
    - Frühstück
    - Mittagessen
    - Abendessen
    - Zwischenmahlzeit
        - Brunch
        - Brotzeit
# Gerichte
    - Saucen und Dressing
        - Soße
        - Dressing
    - Getränk
        - Bowle
        - Cocktail
            - Alkoholfrei
            - Longdrink
        - Kaffee
        - Tee
        - Kakao
        - Likör
        - Punsch
        - Shake
    - Aufstrich
    - Auflauf
    - Backwaren
        - Brot
        - Kuchen
        - Kekse
        - Plätzchen
        - Torten
        - Quiche
    - Sandwich
    - Eigericht
    - Eintopf
    - Fischgericht
    - Fleischgericht
    - Früchte
    - Gemüse
    - Grillgericht
    - Käsegericht
    - Kartoffelgericht
    - Krustentiere & Muscheln
    - Nudelgericht
    - Reisgericht
    - Salate
    - Suppen
    - Süßspeisen
        - Creme
        - Konfitüre
        - Eis
    - Pilzgericht



# Datenbank-Schema:

Felder für Currysoße: 
| Herkunft | Ernährungsart | Unverträglichkeit | Spezielles | Anlass | Saison | Menü | Menüart | Gerichte |
|:--------:|:-------------:|:-----------------:|:----------:|:------:|:------:|:----:|:-------:|:--------:|
| Deutschland | - | - | - | Party | Sommer | Hauptspeise | Mittagessen | Saucen und Dressing/Soße |


# Filter Möglichkeiten [Art des Filters][Name der Eigenschaft][ASC DESC]

- Dropdown&Select | Herkunft
- Dropdown&Select | Ernährungsart
- Dropdown&Select | Unverträglichkeit
- Dropdown&Select | Spezielles
- Dropdown&Select | Anlass
- Dropdown&Select | Saison
- Dropdown&Select | Menü
- Dropdown&Select | Menüart
- Dropdown&Select | Gerichte

- Dropdown&SelectMultiple | Haushaltsgeräte
- Dropdown&SelectMultiple | Zutaten
- Slider | Bewertung | ASC DESC
- SelectMultiple | Schwierigkeitsgrad | ASC DESC
- Range | Zubereitungsdauer | ASC DESC
- Select | Gespeichert
- Select | Favorisiert


## Dropdown Menüs
Da Dropdown Menüs unpraktisch und unbeliebt unter Nutzern sind, die Nutzer aber trotzdem die Möglichkeit haben sollten alle ihre Optionen bei der Auswahl von Kategorien zu kennen, wird ein Hybrid erarbeitet.
Der oder die Nutzer:in kann in ein Textfeld den Namen der Kategorie eintragen und passend dazu werden mögliche Kategorien angezeigt. Ist eine eingetragene Kategorie nicht vorhanden, so kann der Nutzer dies melden und diese wird ggf. in einem Update hinzugefügt.
Sollte der Nutzer sich über die Eingabe nicht zurecht finden, so sollen die Nutzer die Möglichkeit haben sich "alle Kategorien anzusehen". Es erscheint ein klassisches Dropdown Menu mit der Möglichkeit entweder ein oder mehrere Elemente auszuwählen, erkennbar an der vorhandenen Checkbox oder der Abwesenheit dieser.

# Priorisierung der Filter

Das meist gefragteste zu erst:
(basierend auf Webplattformen und deren Aufbau des Filters)


Suchbegriff / Freitextsuche

- Select | Nur Favorisierte
- Select | Nur Gespeicherte
    - Select Bewertung
        - Range | Bewertung | ASC DESC
            - Starts with egal

- SelectMultiple | Schwierigkeitsgrad | ASC DESC
    - Starts with egal
- Range | Zubereitungsdauer | ASC DESC
    - Starts with egal

- Dropdown&SelectMultiple | Haushaltsgeräte
- Dropdown&SelectMultiple | Zutaten

- Dropdown&Select | Gerichte
- Dropdown&Select | Menüart
- Dropdown&Select | Menü
- Dropdown&Select | Saison
- Dropdown&Select | Anlass
- Dropdown&Select | Herkunft
- Dropdown&Select | Spezielles
- Dropdown&Select | Ernährungsart
- Dropdown&Select | Unverträglichkeit