console.log("here")

let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
  return journal;
}
console.log('here',addEntry(["work", "touched tree", "pizza", "running",
  "television"], false))

  console.log("journal",journal)

addEntry(["work", "ice cream", "cauliflower", "lasagna",

  "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
  "beer"], true);

  console.log("16",journal)


function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
      console.log("entry",entry)
      for (let event of entry.events) {
        if (!events.includes(event)) {
          events.push(event);
        }
      }
    }
    return events;
  }
  
  console.log("29",journalEvents(journal));

  console.log("Nan",NaN === NaN)
  console.log(null == undefined)
  console.log(("5" + "5")  + 5)
  console.log("5" - "5")
  console.log( 5 + 5)


  const value =[];
  function range(num1, num2){
    for( i = num1 ; num1 <= num2; num1++){
      value.push(num1)
    }
    return value;
  }
  console.log(range(1,10))

  const sumValue =[];
  
  function sumRange(num1,num2){
    let sum = 0;
    let count = num1
    while(count <= num2){   
      sum += count
       count++
    }
    return sum 
   
  }
  console.log(sumRange(1,10))


  function rangeFor(num1,num2){
    let sum = 0
    for(count = num1; count <= num2; count++ ){
      sum += count
    }
    return sum;
  }
  console.log(rangeFor(1,10))



  let dataList = ["shopping"]
  function list(task){
    dataList.push({task})
    return dataList;

  }
  console.log(list(["coding","cooking"]))



  dataList.forEach(data => {
    console.log("here",data)
    
  });

  dataList.map(val =>{
    console.log(val)
  })


  var countConsistentStrings = function(allowed, words) {  
    let allowedString = new Set(allowed)
    console.log(allowedString)
    let count = 0;

    words.forEach(word=>{
      if([...word].every(char => 
        allowedString.has(char)))
        {
        count ++;
      }
    })
    return count;
      
};

console.log(countConsistentStrings("cad",["cc","acd","b","ba","bac","bad","ac","d"]))

  


const temperatureForecast = [70, 71, 75, 80, 77, 88, 90];
console.log(temperatureForecast[0]);
console.log(temperatureForecast.at(0))