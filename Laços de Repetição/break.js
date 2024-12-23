for(let x = 0; x <= 10; x++){
    if(x == 4){
     break;   
    } 
    console.log(x);
}

for(let y = 0; y <= 20; y++){
    if(y == 5 || y == 4){
        continue;
    }
    console.log(y)
}