const list1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];
const list2 = [ false, false, false ];

function countSheep(sheepArray, listName) {
const result = sheepArray.filter((word) => word === true); 
const count = result.length; 

if (count > 0) {
    console.log(listName + " There are " + count + " sheep in total");
    return listName + " ✅ " + count + " sheep survived!";
}
else {
    console.log(listName + " UPS!!! Wolves have eaten the sheep");
    return listName + " ❌ UPS!!! Wolves have eaten the sheep!";
}
}

const output1 = countSheep(list1, "1.");
const output2 = countSheep(list2, "2.");

document.getElementById('result-display').innerHTML =
output1 + "<br>" + output2;





