var template = "<h1>Hello, {{firstName}} {{lastName}}!</h1>";

var data = {
    firstName: "Bob",
    lastName: "Smith"
};

// Bind template with data and render on page
var html = Mustache.render(template, data);

// Create new elements and append this to page.
var div = document.createElement("div");
div.innerHTML = html;
document.body.appendChild(div);