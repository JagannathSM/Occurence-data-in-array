var arr = [1,1,2,3,4,5,6,7,4,3,2,5,6,7];
var out = {};
var min = 1;
var element = 0;
var occurence;
var temp =0;
var check = arr[0]
for(var i=0;i<arr.length;i++){
  var ele = arr[i]
  if(out[ele]){
    out[ele]++
  }
  else{
    out[ele]=1;
  }
 
  if(out[ele] <= min){
    if(element==ele){
      element = 0
      occurence = 0;
    }
    else{
      element = ele;
      occurence = out[ele]
    }
  }   
  
  if(ele==element && out[ele]>1){
    element = 0;
    occurence=0;
  }
}
console.log(`Unique number is ${element} and its occurence is ${occurence}`);

for(var key in out){
  if(out[key]==1){
    console.log(`Unique number is ${key}`);
    temp = 1;
    break;
  }
}
if(temp==0){
    console.log(`no such number`)
}
