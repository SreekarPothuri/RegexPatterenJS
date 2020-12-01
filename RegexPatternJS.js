const prompt = require('prompt-sync')();
const ZIPCODE = RegExp("^[0-9]{6}$");
let zip1 = "400088";// UC1 - Regex pattern to validate zip code 400088 should pass
let zip2 = "A400088";// UC2 - Regex pattern to validate zip code A400088 should fail
let zip3 = "400088B";// UC3 - Regex pattern to validate zip code 400088B should fail
try{
    if(!ZIPCODE.test(zip3)) throw "Invalid Zip code"
    {
        console.log("Valid Zip code");
    }
}catch(Exception){
    console.log(Exception);
}