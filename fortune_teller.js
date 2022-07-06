var fortune = 3
console.log("fortune selected "+fortune);

if (fortune >= 0 && fortune <= 3){
    console.log("No fortune")
}

else if (fortune > 3 && fortune <= 7){
    console.log("Average fortune")
}

else if (fortune > 7 && fortune <=10){
    console.log("Good fortune")
}

else{
    console.log("The fortune cannot be read correctly")
}