var charDex = function(input){
  var lowerInput = input.toLowerCase();
  var output = {};
  for(var i = 0; i < lowerInput.length; i++){
    if(lowerInput[i] !== " "){
      if(!output.hasOwnProperty(lowerInput[i])){
        output[lowerInput[i]] = [];
        output[lowerInput[i]].push(i);
      }else if(output.hasOwnProperty(lowerInput[i])){
        output[lowerInput[i]].push(i);
      }
    }
  }
  return output;
}

console.log(charDex("lighthouse in the house"));