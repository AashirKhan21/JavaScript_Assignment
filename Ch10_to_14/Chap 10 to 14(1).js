var Hello = "Hello, Welcome to our Calculator";
    alert(Hello);
    var a= prompt("Enter first number")
    var b=prompt("Enter Operation")
    var c= prompt("Enter second number")
    var integer = parseInt(a,10);
    var integer1 = parseInt(c,10);
    var d = "";
    if (b == "+") 
    {
        d = integer + integer1;
        alert(d);   
    }
    else if (b == "-") 
    {
        d = integer - integer1;
        alert(d);   
    }
    else if (b == "*") 
    {
        d = integer * integer1;
        alert(d);   
    }
    else if (b == "/") 
    {
        d = integer / integer1;
        alert(d);   
    }
    else {
        d = "wrong operator";
    }
    alert(d);