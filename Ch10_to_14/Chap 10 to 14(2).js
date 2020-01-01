var hello ="HELLO!!";
alert(hello);

var wc ="Welcome to the PIAIC Marks Calculator."
alert(wc);

    var Q1=prompt("Enter marks of Linux Quiz");
    var Q2=prompt("Enter marks of Docker Quiz");
    var Q3=prompt("Enter marks of Kubernetes");
    var Q4=prompt("Enter marks of GIT");
    var Q5=prompt("Enter marks of Html & CSS");

    var total=Q1++ + Q2++ + Q3++ + Q4++ + Q5++;

    var percentage= total/500*100;
    
    if(percentage >=1 && percentage <= 40)
    {
       alert("Your Percentage is  " + percentage+"% "+"and your grade is F")
    }
    else if(percentage >=41 && percentage <=50)
    {
       alert("Your Percentage is  " + percentage+"% "+"and your grade is D")
    }
    else if(percentage >=51 && percentage <=60)
    {
        alert("Your Percentage is  " + percentage+"% "+"and your grade is C")
    }
    else if(percentage >=61 && percentage <=70)
    {
        alert("Your Percentage is  " + percentage+"% "+"and your grade is B")
    }
    else if(percentage >=71 && percentage <=80)
    {
        alert("Your Percentage is  " + percentage+"% "+"and your grade is A")
    }
    else if(percentage >=81 && percentage <=100)
    {
       alert("Your Percentage is  " + percentage+"% "+"and your grade is A+")
    }
