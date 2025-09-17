const titles = ["Mrs Ajibade", "Mr Solomon", "Miss Esther","Mr Samson" ]
console.log(titles)
console.log(titles[3])
titles.push("Sister Tomiwa")
console.log(titles)
const title = ["Mrs Ajibade", "Mr Solomon", "Miss Esther","Mr Samson" ];
titles.shift();
console.log(title)
title.unshift("Sis Banjo")
console.log(title.length) 

alert("Welcome to FirstBank")
let userName = prompt("Login Pin");
let choice = prompt(`\nChoose Option:\n1. Make a transfer.\n2. Change Password.\n3. Buy Airtime\n4. Exit.`);
switch (choice) {
  case "1":
    let Make = alert("Here is your balance = 300,000");
    parseInt(prompt("Enter account Number"))
    break;
    case "2":
    let Change = prompt(`\nChoose Option:\n1. View Balance.\n2. Make a deposit.\n3. Withdraw.\n4. Exit.`);
    let option = parseInt(choice)
    if(option == null || option == "" && option <= 20){
        alert('Enter a reasonable value')
    }
    break;
    case "3":
    let userName = prompt("Enter your amount");
    break;
    case "4":
    alert("Transaction Successfull")
    console.log("Thanks for banking with us")
  case "5":
    alert(`Goodbye + "!`);
    break;
}

