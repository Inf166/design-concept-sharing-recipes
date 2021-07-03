# Herkunft
    - Afrika
    - Amerika
        - Argentinien
        - Brasilien
        - Mexiko
        - USA
    - Asien
        - China
        - Japan
        - Tailand
        - Vietnam
    - Australien 
    - Europa
        - Deutschland
            - Bayrische Küche
            - Rheinische Küche
        - England
        - Frankreich
        - Griechenland
        - Polen
        - Russland
        - Spanien
        - Türkei
# Ernährungsart (optional | important)
    - Alkoholfrei
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
# Unverträglichkeit (optional | important)
    - Alkohol-Intoleranz
    - Fruktoseintoleranz 
    - Glutenunverträglichkeit
    - Histaminintoleranz 
    - Laktoseintoleranz 
    - Sacharoseintoleranz 
    - Sorbitintoleranz 
# Spezielles (optional)
    - Babynahrung
    - Camping
    - Diabetiker
    - Fettarm
    - Kalorienarm
    - Resteessen
# Anlass
    - Halloween
    - Hochzeit
    - Geburtstag
    - Ostern
    - Party
    - Silvester
    - Taufe
    - Weihnachten
# Saison (optional)
    - Frühling
    - Sommer
    - Herbst
    - Winter
# Menü (optional)
    - Beilage
    - Vorspeise
        - kalte Vorspeise
        - warme Vorspeise
    - Zwischenspeise
        - kalte Zwischenspeise 
        - warme Zwischenspeise
    - Hauptspeise
    - Nachspeise 
        - kaltes Dessert
        - warmes Dessert
# Menüart (optional)
    - Frühstück
    - Mittagessen
    - Abendessen
    - Zwischenmahlzeit
        - Brunch
# Kategorie
    - Snacks
        - Cremes & Dips
        - Studentenfutter
        - Brotzeit
        - Sandwich
    - Getränke
        - Bowle
        - Cocktail
        - Longdrink
        - Kaffee
        - Tee
        - Kakao
        - Likör
        - Punsch
        - Shake
    - Backwaren
        - Süß
        - Herzhaft
        - Brot
    - Grillen
        - Soßen & Marinaden
        - Spieße
        - Burger
    - Suppen
        - Eintöpfe
        - Creme-Suppen
        - Brühen
    - Salate
    - Desserts
        - Creme
        - Konfitüre
        - Eis
    - Pastas

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

- SelectMultiple | Schwierigkeitsgrad | ASC DESC
    - Starts with All Selected
- Range | Zubereitungsdauer | ASC DESC
    - Starts with egal

- Dropdown&Select | Herkunft
- Dropdown&Select | Anlass
- Dropdown&Select | Kategorie
- Dropdown&Select | Ernährungsart
- Dropdown&Select | Unverträglichkeit

- Dropdown&Select | Spezielles
- Dropdown&Select | Saison
- Dropdown&Select | Menüart
- Dropdown&Select | Menü