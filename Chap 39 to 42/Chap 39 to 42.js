var Q1=prompt("Enter marks of Linux Quiz");
var Q2=prompt("Enter marks of Docker Quiz");
var Q3=prompt("Enter marks of Kubernetes");
var Q4=prompt("Enter marks of GIT");
var Q5=prompt("Enter marks of Html & CSS");

var obtainedMarks=Q1++ + Q2++ + Q3++ + Q4++ + Q5++;

var percentage= obtainedMarks*100/500;
alert(percentage);
switch (percentage) {
    case percentage >=1 || percentage <=29:
    alert("Your Percentage is "+percentage+" % and Your Grade is F");
    break;
    case percentage >=30 || percentage <= 44:
    alert("Your Percentage is "+percentage+" % and Your Grade is D");
    break;
    case percentage >=45 || percentage <=59:
    alert("Your Percentage is "+percentage+" % and Your Grade is C");
    break;
    case percentage >=60 || percentage <=74:
    alert("Your Percentage is "+percentage+" % and Your Grade is B");
    break;
    case percentage >=75 || percentage <=89:
    alert("Your Percentage is "+percentage+" % and Your Grade is A");
    break;
    case percentage >=90 || percentage <=100:
    alert("Your Percentage is "+percentage+" % and Your Grade is A+");
    break;
    default:
    alert("You are Failed");
    break;
}