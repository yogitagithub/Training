function signUp() {
    var p1 = parseInt(document.getElementById("sun").value);
    var p2 = parseInt(document.getElementById("moon").value);
    var p3 = parseInt(document.getElementById("earth").value);
    var p4 = document.getElementById("mars").value;
    var p5 = document.getElementById("result");

    console.log("p4");

    if(p4 == "Add"){
        let n=p1+p2+p3;
        result.innerHTML = "Thank you for using my calculator,your output is " +n;
        console.log("result");
    }


    if(p4 == "Sub"){
        let n=p1-p2-p3;
        result.innerHTML = "Thank you for using my calculator,your output is " +n;
        console.log("result");
    }


    if(p4 == "Mul"){
        let n=p1*p2*p3;
        result.innerHTML = "Thank you for using my calculator,your output is " +n;
        console.log("result");
 
    }
}