
     
     
    var school = { 
        name : "Arena",
        location : "Sarajevo",
        establish : 2020,
        
    };
   
function myFunction (name) {
    school.name = "Paragon";
    return name
}
    // Only change code below this line
   
    
      // Only change code above this line
      

    console.log(myFunction(school));
   
    module.exports = { school, myFunction };
  

