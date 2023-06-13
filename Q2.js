function calctheavg(marks) {
    let sumofmarks = 0.0;
    let totalofmarks  = 0.0;
    let numberOfmarks = marks.length;
    for(let i=0; i<marks.length; i++) {
       sumofmarks += marks[i];
    }
    totalofmarks =  Math.round(sumofmarks/ numberOfmarks, 2);
    console.log(totalofmarks);
  return  totalofmarks;
}

let marks = [98, 99, 77, 66, 90, 93, 88];
calctheavg(marks);