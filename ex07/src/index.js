
     
     
    var lion = { 
        name : "Simba",
        legs : 4,
        tails : 1,
        
    };
   
    function myFunction (roar) {
    delete lion[roar];
    return lion
}
    // Only change code below this line
   
    
      // Only change code above this line
      

    console.log(myFunction(lion));
   
    module.exports = myFunction;
  

