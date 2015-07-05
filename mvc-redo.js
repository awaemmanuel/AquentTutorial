/**
 * Created by BigSleek on 7/4/15.
 *
 * 1. Change the UI.
 * 2. Trigger the controller
 * 3. Update the Model
 * 4. Notify the view which observe that the model
 */


/*
 *  Model carries the data of the application. It holds a list of observers that
 *  it will always notify when a change to the model state happens
 */
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

    /*
     *  Add items, which changes state of model, then notify all observers.
     *  NOTE: Without notifying observers, even if there is just one, the view
     *  isn't updated.
     */
    addItem: function(item) {
        this.items.push(item);
        this.notifyObservers();
    }
};

var view = {
    /*
     * Gather all the UI elements
     */
    input: document.getElementById("input"),
    list: document.getElementById("list"),
    addBtn: document.getElementById("button"),

    // Register this view to subject and tell the controller to tie things together
    init: function() {
        model.addObserver(this);
        this.addBtn.addEventListener("click", function () {
            controller.addInputFromTextEntry();
        });
    },

    // Once notified, the view needs to redraw itself
    notify: function() {
        var html = "";
        for (var i = 0; i < model.items.length; i++) {
            html += "<li>" + model.items[i] + "</li>";
        }
        this.list.innerHTML = html;
    }
};

// Update model, and cause view to redraw itself
var controller = {
    addInputFromTextEntry: function() {
        var item = view.input.value;
        if(item) {
            model.addItem(item);
            view.input.value = "";
        }
    }
};

view.init();