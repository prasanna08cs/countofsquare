let n= 101;
let c=0;
let ar=[];
   for(let i=2;i<=n;i++){
          for(let j=1;j<=i;j++){
                 if(j*j==i){
                   c++;
                   ar[j]=i;
                 }
          }            
          
   }
console.log(c);
console.log(ar);
