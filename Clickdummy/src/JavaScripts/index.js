import { Sortable } from 'sortablejs'; // https://github.com/SortableJS/Sortable
if (document.getElementById('ingredient-list')) {
  var el = document.getElementById('ingredient-list');
  var sortable = Sortable.create(el, {
    delay: 100, // time in milliseconds to define when the sorting should start
    delayOnTouchOnly: true, // only delay if user is using touch
    handle: ".draggable",  // Drag handle selector within list items
    dragoverBubble: true,
  });
}

// TODO FIX EMPTIED INPUT FIELDS AFTER ADD NEW INGREDIENT
