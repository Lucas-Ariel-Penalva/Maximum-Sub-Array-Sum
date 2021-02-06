// First solution to the problem with O(n^2) time complexity.

function quadraticMaxSubarraySum(arr){
  
  if (!arr.length) return 0;
  let max = arr[0];
  let currentSum;

  for(let i = 0 ; i < arr.length; i++){
    let currentArray = [];
   
    for(let k = i; k < arr.length; k++){
      currentArray.push(arr[k]);
      currentSum = currentArray.reduce( (a, b) => a+b);
      if(currentSum > max) max = currentSum;
    };

  };
  
  return max <= 0 ? 0 : max;
};

//______________________________________________________________

//Second solution with O(n) time complexity using Kadane's Algorithm.

function linearMaxSubarraySum(arr){
  let max = arr[0];
  let currentSum = max;

  for(let i = 1 ; i < arr.length; i++){
    currentSum = Math.max( currentSum + arr[i], arr[i]);
    max = Math.max(currentSum, max);
  };
  
  return max >= 0 ? max : 0;
};





