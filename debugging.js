/**
 * Created by BigSleek on 6/28/15.
 */

function generateUserName(firstname, lastname) {
    var initial = firstname.charAt(0);

    lastname = lastname.toLowerCase();

    var username = initial + lastname;

    return username;
}

document.addEventListener("click", function(event) {
    var username = generateUserName("John", "Doe");
    alert(username);
});



