// Regex pattern to validate zip code 400088
const prompt = require('prompt-sync')();
const ZIPCODE = RegExp("^[0-9]{6}$");
let zip = prompt("Enter pincode: ");
try{
    if(!ZIPCODE.test(zip)) throw "Invalid Zip code"
    {
        console.log("Valid Zip code");
    }
}catch(Exception){
    console.log(Exception);
}