# Algorithm explained
## Saved Recipes Preferences
Alle gespeicherten Rezepte werden im Moment des Speicherns analysiert und für den Nutzer die Vorlieben aktualisiert.
Aktualisiert werden: Kategorien, Season, Herkunft, genutzte Zutaten, Haushaltsgeräte, Schwierigkeitsgrad, Zubereitungsdauer

## Cooked Recipes Preferences
Wird ein Rezept länger als 5 Minuten nach beginn des Kochvorgangs betrachtet, wird als gekocht gespeichert, analysiert und für den Nutzer die Vorlieben aktualisiert.
Aktualisiert werden: Kategorien, Season, Herkunft, genutzte Zutaten, Haushaltsgeräte, Schwierigkeitsgrad, Zubereitungsdauer

## Recipe Meta Data
Zu den Daten eines Rezeptes zählen: Kategorien, Season, Herkunft, genutzte Zutaten, Haushaltsgeräte, Schwierigkeitsgrad, Zubereitungsdauer

## Get five Recipes based on Params
Warum fünf Rezepte? Für mehr empfehlungen ist in der UI kein Platz und das System soll performant Empfehlungen generieren, falls die fünf nicht ausreichen könnte man über einen "Fetch"-Button nachdenken, der die Empfehlungen erneuert.
Die Parameter der Datenbankabfrage sollen möglichst modular sein, und daher muss hier noch durch testing experimentiert werden wie sich die Übergabe der Parameter am besten gestaltet. Momentan ist ein JSON Object angedacht welches für die verschiedenen Möglichkeiten des Filterns eine Dezimalzahl von 0 bis 1 eingetragen hat und die Suche aufgrund dieser Parameter 1-5 Treffer zurück an das Endgerät liefert.

### Get Similar Recipes
Hier ist gewollt, Rezepte zu erhalten, die dem betrachteten Rezept ähnlich aber nicht gleich sind.

### Get Recommendations
Hier ist gewollt, Rezepte zu erhalten, die noch nicht gespeichert oder gekocht worden sind, jedoch den Vorlieben des Nutzers entsprechen und entsprechen ihm von anderen Nutzern freigegeben worden sind.
