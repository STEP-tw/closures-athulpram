const makeConstant = function(constant){
  return function(){
    return constant;
  }
}

const makeCounterFromN = function(counter){
  return function(){
    return counter++;
  }
}

const makeCounterFromZero = function(){
  return makeCounterFromN(0);
}

const makeDeltaTracker = function(deltaStatus){
  let deltaState = {old : deltaStatus, delta : 0, new : deltaStatus};
  return function(currentDelta){
    if(currentDelta){
      deltaState.old = deltaState.new;
      deltaState.delta = currentDelta;
      deltaState.new = deltaState.old + currentDelta;
    }
    return deltaState;
  }
}

const determineFiboState = function(currentNumber,nextNumber){
  if(!nextNumber && !currentNumber){
    nextNumber = 1;
    currentNumber = 0;
  }
  if(currentNumber && !nextNumber){
    nextNumber = currentNumber;
    currentNumber = 0;
  }
  return {currentNumber,nextNumber};
}

const makeFiboGenerator = function(currentNumber,nextNumber){
  let fiboState = determineFiboState(currentNumber,nextNumber);
  return function(){
    let swapVariable = fiboState.currentNumber;
    fiboState.currentNumber = fiboState.nextNumber;
    fiboState.nextNumber = fiboState.nextNumber + swapVariable;
    return swapVariable;
  }
};

const returnArgument = function(value){
  return value;
}

const makeCycler = function(inputSource){
  let source = inputSource.map(returnArgument);
  let currentIndex = 0;
  return function(){
    let currentValue = source[currentIndex++];
    if(currentIndex == source.length){
      currentIndex=0;
    }
    return currentValue;
  }
}

const curry = function(func,srcArgument){
  return function(arg1,arg2){
    return func(srcArgument,arg1,arg2);
  } 
}

const compose = function(function1,function2){
   return function(arg1,arg2){
    return function1(function2(arg1,arg2));
   }
};

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
