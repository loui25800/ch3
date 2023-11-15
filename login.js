const prompt = require ('prompt-sync') ()
let usecheck = (prompt ('username :'))
//let pwdcheck = (prompt ('password :'))
correctuse = "admin"
//correctpwd = 1234
var useresult
if (usecheck != correctuse) {
   useresult = ("username ไม่ถูกต้อง")
   //pwdresult = ("password ไม่ถูกต้อง")
} else {
    useresult = ("username ถูกต้อง")
    //pwdresult = ("password ถูกต้อง")
}
console.log(useresult)