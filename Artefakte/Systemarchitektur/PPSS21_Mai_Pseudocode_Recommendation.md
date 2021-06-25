# Recommendations

```javascript
// Get Local Time
import Date from Libary;

function getLocalTime() {
    return Date.currentTime();
}

// Get Menu Based On Time
function getMenuBasedOnTime(localTime) {
    allMenus = OurServer.getAllMenus();

    foreach (allMenus as menu) {
        if (!isContainedIn(menu.typicalTimeRange, localTime)){
            allMenus.remove(menu);
        }
    }
} // Probably easier to just return the prefered menu by the server time. We will do that, but for the sake of explaining the code, we stick with this

// Get Season Based On Time
function getSeasonBasedOnTime(localTime) {
    allSeasons = OurServer.getAllSeasons();

    foreach (allSeasons as season) {
        if (!isContainedIn(season.typicalTimeRange, localTime)){
            allMenus.remove(season);
        }
    }
} // Probably easier to just return the prefered season by the server time. We will do that, but for the sake of explaining the code, we stick with this

// Get Saved Recipe Preferences
JSON savedRecipePreferences = MY.getSavedRecipePreferences();

// Get Cooked Recipe Preferences
JSON cookedRecipePreferences = MY.getCookedRecipePreferences();

// Get Recommendations
function getRecommendations(allMenus, allSeasons, savedRecipePreferences, cookedRecipePreferences) {
    var preferences = merge(savedRecipePreferences, cookedRecipePreferences);
    preferences.removeAllMenusBut(allMenus);
    preferences.removeAllSeasonsBut(allSeasons);
    preferences.boostImportanceOfSeasonAndMenu(); //Increases Importance of Seasons and Menus so the search will likely deliver more fitting recipes

    var recommendations = OurServer.makeSearch(preferences); //See at PseudoCode Similiar Recipes

    return recommendations;
}
```