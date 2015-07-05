var model = {
    observers: [],
    items: [],

    addObserver: function(observer) {
        this.observers.push(observer);
    },

    removeObserver: function(observer) {
        this.observers.splice(this.observers.indexOf(observer), 1);
    },

    notifyObservers: function() {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].notify();
        }
    },

    addItem: function(item) {
        this.items.push(item);
        this.notifyObservers();
    }
};

// An observer in MVC
var view = {
    // Gather all the view elements from UI
    input: document.getElementById("input"),
    list: document.getElementById("list"),
    addBtn: document.getElementById("button"),

    init: function() {
        model.addObserver(this); // Register observer to subject
        this.addBtn.addEventListener("click", function() {
            controller.addItem();
        });
    },

    notify: function() {
        var html = "";
        for (var i = 0; i < model.items.length; i++) {
            html += "<li>" + model.items[i] + "</li>";
        }

        this.list.innerHTML = html;
    }
};

view.init();

// controller of model and view
var controller = {
    addItem: function() {
        var item = view.input.value;
        model.addItem(item);
        view.input.value = "";
    }
};