function takeANumber(line, person){
  //adds a person to the line
  line.push(person);

  //return message
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line){
//returns an announcement about the person it is serving,
//and shifts the line
// returns the line is empty when no on is on line
  if (line.length > 0) {
    //return `Currently serving ${line.shift()}.`
    var currentlyServing = line[0];
    line.shift();
    return `Currently serving ${currentlyServing}.`;
  }
  else
    return 'There is nobody waiting to be served!';
}


function currentLine(line){

}
