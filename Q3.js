function containthevalue(inputs, x) {
    if (inputs.indexOf(x) !== -1){
        console.log("the value exists in the array")
        return true;
    }
    else {
        console.log("the value is not exists in the array")
        return false;
    }
}


  const inputs = [1, 2, 3, 'ranin', 'banana'];
  console.log(containthevalue(inputs, 2)); // true
  console.log(containthevalue(inputs, 'Ranin')); // false (case-sensitive comparison)
  console.log(containthevalue(inputs, 'banana')); // true
  console.log(containthevalue(inputs, 'orange')); // false
    