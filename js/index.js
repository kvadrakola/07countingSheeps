const list1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];
const list2 = [ false, false, false ];

function countSheep(sheepArray) {
const result = sheepArray.filter((word) => word === true); 
const count = result.length; 

if (count > 0) {
console.log("There are " + count + " sheep in total");
}
else {
    console.log("UPS!!! Wolves have eaten the sheep");
}
}

countSheep(list1);
countSheep(list2)


