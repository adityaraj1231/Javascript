const accountid=12356
let accountmail="aditya@google.com"
var accountcity="Ranchi"
let accountpassword=156489
//  accountid=5
accountstate="Simla";


/*
Prefer not to use var because of the issue in scope  issue 
*/

accountmail="adityahdfc@google.com"
accountcity="Delhi"
console.log(accountmail);
console.log(accountcity);

console.table([accountcity,accountid,accountmail,accountpassword,accountstate])