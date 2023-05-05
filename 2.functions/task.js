
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  let avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  let differenceMaxMin = max-min;
  return differenceMaxMin;
}


function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ===0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let differenceEvenOdd = sumEvenElement-sumOddElement;
  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 ===0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  } 
  let averageEvenElements = sumEvenElement/countEvenElement;
  return averageEvenElements;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let arrMax = func(...arrOfArr[i]);
    if (arrMax > maxWorkerResult) {
      maxWorkerResult = arrMax;
    }
  }
  return maxWorkerResult;
}

