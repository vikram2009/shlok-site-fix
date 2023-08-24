document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit").addEventListener("click", validate);
});

function validate() {
    // Fetch the config.json asynchronously
    fetch('js/config.json')
        .then(response => response.json())
        .then(config => {
            const user = config.USER;
            const passwrd = config.PASSWORD;
            var attempt = 3;
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username === user && password === passwrd) {
                alert("Login successfully");
                window.location = "admin.html";
            } else {
                attempt--;
                alert(`You have left ${attempt} attempt(s)`);

                if (attempt === 0) {
                    document.getElementById("username").disabled = true;
                    document.getElementById("password").disabled = true;
                    document.getElementById("submit").disabled = true;
                }
            }
        })
        .catch(error => {
            console.error("Error fetching config:", error);
        });
}




/*function validate(){
const user = require('./config.json').USER
const passwrd =   require('./config.json').PASSWORD
    var attempt = 3; // Variable to count number of attempts.
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
if ( username == JSON.stringify(user) && password ==JSON.stringify(passwrd)){
    alert ("Login successfully");
    window.location = "admin.html"; // Redirecting to other page.
    return false;
}
else{
    attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
return false;
}
}
}*/
