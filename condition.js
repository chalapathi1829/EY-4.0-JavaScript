// Conditional Statements and Loops in JavaScript

// Example of if-else statement
a=18
if(a<18){
    document.write("You are a minor.");
} else{
    document.write("You are an adult.");
}

// example of nested if-else statement
age=60
if(age<18){
    document.write("<br>You are a minor.");
}
else if(age>=18 && age<60){
    document.write("<br>You are an adult.");
}
else{
    document.write("<br>You are a senior citizen.");
}
// Example of for loop
for(i=0; i<5; i++){
    // document.write("<br>" + i);
    document.write("<br>"+i,"\n");
}

// Example of while loop
j=0
while(j<5){
    document.write("<br>" + j);
    j++;
}

