/**
 * Created by BigSleek on 6/26/15.
 */

var items = [
    {
        name:   "Hammer",
        cost:   9.99,
        id:     101,
        picture:"hammer.jpg"
    },
    {
        name:   "Screwdriver",
        cost:   19.99,
        id:     102,
        picture:"screwdriver.jpg"
    },
    {
        name:   "Pliers",
        cost:   6.99,
        id:     103,
        picture:"pliers.jpg"
    },
    {
        name:   "Awl",
        cost:   5.99,
        id:     104,
        picture:"awl.jpg"
    },


];

items.names.sort();

for (var i = 0; i < items.length; i++) {
    console.log(items[i].name + " is $" + items[i].cost + ".");
}
