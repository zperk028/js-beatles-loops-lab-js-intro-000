// add solution here

function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array
}

function johnLennonFacts(facts){
  let finalArray = [];

  for(let i=0; i<facts.length; ++i){
    finalArray.push(facts[i]+"!!!");
  }

  return finalArray;
}
