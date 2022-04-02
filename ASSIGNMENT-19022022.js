function hide_show() {

    show.style.display="block";
    hide.style.display="none";
}


function signUp() {

    var sun = document.getElementById("user");
    var moon = document.getElementById("pswd");
    var earth = document.getElementById("cpswd");
    var venus = document.getElementById("yog");

    var username = document.getElementById("print1");
    var password = document.getElementById("print2");
    var email = document.getElementById("print3");
    var birth = document.getElementById("print4");

    username.innerHTML = sun.value; 
    password.innerHTML = moon.value;
    email.innerHTML = earth.value;
    birth.innerHTML = venus.value;

}

