/**
 * Created by BigSleek on 6/26/15.
 */

var message = {
    greeting: "Hello",
    name: "Everyone",
    sayHello: function() {
        console.log(this.greeting + ", " + this.name + "!");
    },
};

message.greeting = "Hi folks";
message.name = "Emmanuel";
message.sayHello();