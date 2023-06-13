function sumpositives(numbers) {
    let total = 0;
    for (let i=0; i<numbers.length; i++) {
        if(numbers[i] > 0) {
            total += numbers[i];
            console.log(numbers[i]);
        }

    }
    console.log("sum of all is:", total);
    return total;
}
numbers= [1, 3, -1, 5, 10, -3];
sumpositives(numbers);