const accountId = 14453;
let accountEmail = "prakhar@google.com";
var accountPassword = "12345"
accountCity = "Bhopal";
let accountState;

accountEmail = "ps@ps.com"
accountPassword = "212121"
accountCity = "Bengaluru"


/*prefer not to use var because of issue in functional scope and block scope*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])