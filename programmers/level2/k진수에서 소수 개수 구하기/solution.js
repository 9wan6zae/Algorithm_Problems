function solution(n, k) {
  const arr = n.toString(k).split('0').map(v => +v)
  
  const isPrime = (num) => {
      if(!num || num === 1) return false;
      
      for(let i = 2; i <= Math.sqrt(num); i++){
          if(num % i === 0) return false;
      }
      return true;
  }

  
  return arr.filter(v => isPrime(v)).length;
}