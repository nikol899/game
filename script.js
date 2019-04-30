"use script";
userHealth = 40;
grantHealth = 10;
userWin = 0;
grantWin = 0;
let userName = undefined;
grantName = "Grant";

let question=prompt("Would you like to play? yes or no")
if(question === "yes"){
    userName = prompt("Enter your name:");
}else{
    window.prompt("Maybee next time.");
}
while (userHealth > 0 && grantHealth > + 0) {
   userHealth -= Math.floor((Math.random() * 2) + 1);
   console.log(`${userName} has ${userHealth} left`);
   grantHealth -= Math.floor((Math.random() * 2) + 1);
   console.log(`${grantName} has ${grantHealth} left`);
   if (grantHealth <= 0) {
      userWin++;
      grantHealth = 10;
   }
}
console.log(`${userName} won ${userWin} games`);

