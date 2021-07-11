const joinNames = namesObj => {
    

    let namesList = [];

    let lastName;

    let joinednames;
for (let i = 0; i < namesObj.length; i += 1) {
     namesList.push(namesObj[i].name);
        }
        
if (namesList.length === 2) {
joinednames = namesList.join("&");
return joinednames;
}

if (namesList.length > 2 ) {
lastName = namesList.pop()

var n = 1;
joinednames =
  namesList.splice(namesList - n).join(", ") + " &" + " " + lastName;
 
return joinednames;
}
console.log(namesList.length);
};

console.log(joinNames([{ name: "Bart" }, { name: "Ali" }, { name: "Ali" }]));


module.exports = joinNames;
