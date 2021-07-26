function istring (n, string) {
    if (n===0){
       console.log(string , n);
    }
    else{ 
       console.log(string , n);
       return istring(n-1, string);
    }
}
istring(1000, "moises dominguez")




