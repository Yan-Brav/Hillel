var fullName = prompt("Enter your full name (last name, first name and middle name)");
var indexMidName = fullName.lastIndexOf(" ") + 1;
var indexFirstName = fullName.indexOf(" ") +1;
var shortFirstName = fullName.slice(indexFirstName, indexFirstName + 1);
var shortMidName = fullName.slice(indexMidName, indexMidName +1);
var lastName = fullName.substring(0, indexFirstName);
var result = lastName + " " + shortFirstName + "." + " " + shortMidName + ".";
alert(result);
console.log(result);
