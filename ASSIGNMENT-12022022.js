function signUp() {

    var sun = document.getElementById("user");
    var moon = document.getElementById("pswd");
    var earth = document.getElementById("yog");
    var venus = document.getElementById("nuts");
    var mars = document.getElementById("man");
    
    var username = document.getElementById("print1");
    var password = document.getElementById("print2");
    var email = document.getElementById("print3");
    var birth = document.getElementById("print4");
    var address = document.getElementById("print5");

    username.innerHTML = sun.value; 
    password.innerHTML = moon.value;
    email.innerHTML = earth.value;
    birth.innerHTML = venus.value;
    address.innerHTML = mars.value;
}

