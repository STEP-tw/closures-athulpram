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
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
