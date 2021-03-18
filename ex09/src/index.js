
     
     
    var myObj = { 
        "title" : "Titanic",
        "song" : "My Heart Will Go On",
        "genre" : "drama"
        
    };
    

    function myFunction (myObj, checkProp) {
        myObj.hasOwnProperty({title:"Titanic", song : "My Heart Will Go On", genre : "drama"}, "title");
        
    

        return "Titanic"
        
}
    // Only change code below this line
   
    
      // Only change code above this line
      

    console.log(myFunction());
   
    module.exports = myFunction;
  

