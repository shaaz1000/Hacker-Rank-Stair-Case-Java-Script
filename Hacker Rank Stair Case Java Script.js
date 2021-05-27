function Staircase(n){
  
  for(let i = 1;i<=n;i++){
    console.log("#".repeat(i).padStart(n))
  }
}

console.log(Staircase(6))