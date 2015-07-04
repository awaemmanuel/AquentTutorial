var subject = {
    observers: [],

    registerObserver: function(observer) {
        this.observers.push(observer);
    },

    unregisterObserver: function(observer) {
       this.observers.splice(this.observers.indexOf(observer), 1);
    },

    notifyObservers: function() {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].notify();
        }
    }

};


// Get the state of the check boxes from the html page when it's changed
document.getElementById("cb1").addEventListener("change", onCheckboxChanged);
document.getElementById("cb2").addEventListener("change", onCheckboxChanged);
document.getElementById("cb3").addEventListener("change", onCheckboxChanged);


// implementation of the onCheckboxChanged
function onCheckboxChanged(event) {
    if (document.getElementById("cb1").checked &&
        document.getElementById("cb2").checked &&
        document.getElementById("cb3").checked) {
        subject.notifyObservers();
    }
}



var observer1 = {
    notify: function() {
        var form = document.getElementById("form");
        document.body.removeChild(form);
    }
};

// Register subject with body
subject.registerObserver(observer1);


var observer2 = {
    notify: function() {
        var h2 = document.createElement("h2");
        h2.textContent = "COMPLETE!";
        document.body.appendChild(h2);
    }
};
subject.registerObserver(observer2);



var observer3 = {
    notify: function() {
        var h2 = document.createElement("h2");
        h2.textContent = "ANOTHER ONE!";
        document.body.appendChild(h2);
    }
};
subject.registerObserver(observer3);


subject.registerObserver({
    notify: function() {
        alert("This is done!");
    }
});

console.log(subject.observers);
//subject.unregisterObserver(observer1);
//subject.unregisterObserver(observer2);
//subject.unregisterObserver(observer3);