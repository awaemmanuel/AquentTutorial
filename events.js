/**
 * Created by BigSleek on 6/28/15.
 */
document.addEventListener("mousedown", function(event) {
   console.log("mouse down x: " + event.clientX + ", y : " + event.clientY);
});


document.addEventListener("mousemove", function(event) {
    console.log("mouse move x: " + event.clientX + ", y : " + event.clientY);
});


document.addEventListener("keydown", function(event) {
    console.log("Key down: " + String.fromCharCode(event.keyCode));
});