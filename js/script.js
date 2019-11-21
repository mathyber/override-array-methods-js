Array.prototype.map = function(func){
  let resultArr = Array();
  for(let i=0; i<this.length; i++){
    resultArr.push(func(this[i]))
  }
  return resultArr;
}

Array.prototype.filter = function(func){
  let resultArr = Array();
  for(let i=0; i<this.length; i++){
     if(func(this[i])) resultArr.push(this[i])
  }
  return resultArr;
}

Array.prototype.find = function(func){
  for(let i=0; i<this.length; i++){
     if(func(this[i])) return this[i];
  }
  return undefined;
}

Array.prototype.some = function(func){
  for(let i=0; i<this.length; i++){
     if(func(this[i])) return true;
  }
  return false;
}

Array.prototype.every = function(func){
  for(let i=0; i<this.length; i++){
     if(!func(this[i])) return false;
  }
  return true;
}


let trr = [1,1,4,1,1,2,2,3,411];
console.log(trr.map(ss => ss*ss));
console.log(trr.filter(ss => ss>=2));
console.log(trr.find(ss => ss>1));
console.log(trr.some(ss => ss>4));
console.log(trr.every(ss => ss<1222));
