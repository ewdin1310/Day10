
     
     
    var myClothes = { 
        hat : "Fedora",
        shirt : "Nike",
        shose : "Converse"
        
    };
   
function myFunction (myClothes){
    var hatValue = myClothes.hat;
    var shirtValue = myClothes.shirt;
    var shoseValue = myClothes.shose;
    return {hatValue, shirtValue, shoseValue};
}
    // Only change code below this line
   
    
      // Only change code above this line
      

    console.log(myFunction(myClothes));
   
    module.exports = myFunction(myClothes);
  

