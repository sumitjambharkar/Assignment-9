const sort = arr => {
    let newArr =[];
    let i = 1;
    do{
        let j = arr.indexOf(i);
        newArr.push(arr[j]);
        i++;
    } while (i <= arr.length);

    return newArr;
}

console.log(sort([5,2,1,4,3]));