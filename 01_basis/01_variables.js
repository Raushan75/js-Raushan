const accountId = 14254
let accountEmail ="raushan@gmail.com"
var accountPassword ="12345"
accountCity = "Patna"

// accountId =2  // not allowed

accountEmail ="hc@gamil.com"
accountPassword="12543"
accountCity="delhi"

let accountState;

console.log(accountEmail);


/*
prefer not to use var
beacuse of issue in block scope and functional scope

*/ 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
