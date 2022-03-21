# Similar Recipes

```javascript
// Mark Recipe as cooked
if (thisRecipe.isOpen() > 300000) {
    if(!MY.cookedRecipes.contains(thisRecipe)) {
        MY.cookedRecipes.add(thisRecipe);
    }
}

button[cookThis].isPressed() => {
   if(!MY.cookedRecipes.contains(thisRecipe)) {
        MY.cookedRecipes.add(thisRecipe);
    }
}

// Save Recipe
button[saveThis].isPressed() => {
   if(!MY.savedRecipes.contains(thisRecipe)) {
        MY.savedRecipes.add(thisRecipe);
    }
}

// Get MetaData from this Recipe
JSON thisRecipeMetaData = thisRecipe.getMetaData();

// Get Saved Recipe Preferences
JSON savedRecipePreferences = MY.getSavedRecipePreferences();

// Get Cooked Recipe Preferences
JSON cookedRecipePreferences = MY.getCookedRecipePreferences();

// Get similar Recipes
function getSimilarRecipes(currentRecipeMetaData, savedRecipePrefs, cookedRecipePrefs) {
    var searchForPrefsLikeThis;
    searchForPrefsLikeThis.addWithBasicImportance(currentRecipeMetaData);

    comparePrefWithMeta(savedRecipePrefs, currentRecipeMetaData)
    comparePrefWithMeta(cookedRecipePrefs, currentRecipeMetaData)
    
    function comparePrefWithMeta(prefs, meta) {
        for each Attribute in Pref {
            if meta[Attribute] == Pref[Attribute] {
                if(searchForPrefsLikeThis.contains(Attribute)]) {
                    searchForPrefsLikeThis[Attribute].increaseImportance();
                } else {
                    // Do Nothing
                }
            }
        }
    }

    var similareRecipes = OurServer.makeSearch(searchForPrefsLikeThis);

    return similarRecipes
}

// Make Search on our Server Side
function makeSearch (parameters, user) {
    var result;

    var params = parameters;

    var user = user;
    var friends = user.getFriendIDs();
    
    var userRecipes = user.getRecipeIDs();
    var friendRecipes;
    for each friend in friends {
        friendRecipes += friend.getRecipeIDs()
    }

    var allRecipeIDs = removeDuplicates(merge(friendRecipes, userRecipes));

    for each recipe in allRecipeIDs {
        var compareResult = recipe.compareWithParams(params);

        if(compareResult > 0.5) {
            result.add(recipe, compareResult)
        }
    }

    function compareWithParams (params) {
        var recipedata = this.getMetaData();
        var compareResult = 0;
        var attributesLength = recipedata.countAttributes();
        var score = 0;

        for each Attribute in recipedata {
            if recipedata[Attribute] == params[Attribute] {
                score++;
                if(params[Attribute].importance > 3) {
                    score++;
                }
            }
        }

        compareResult = score / attributesLenght;
        return (double) compareResult;
    }

    result.sortBy(compareResult);               //Sort all results by their rating
    result.stripAllButFiveStartingAtFirst();    //Remove all but the 5 first in List

    return result;
}
```