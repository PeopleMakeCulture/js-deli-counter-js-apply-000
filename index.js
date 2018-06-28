var number = 0

function takeANumber(line){
  //adds a person to the line
  number = number + 1; //number+=1
  line.push(number);

  //return message
  return `Welcome. You are number ${number} in line.`
}

function nowServing(line){
//returns an announcement about the person it is serving,
//and shifts the line
// returns the line is empty when no on is on line
  if (line.length > 0) {
    //return `Currently serving ${line.shift()}.`
    //var currentlyServing = line.shift();
    var currentlyServing = line[0];
    line.shift();
    return `Currently serving ${currentlyServing}.`;
  }
  else
    return 'There is nobody waiting to be served!';
}


function currentLine(line){
  if (line.length === 0) {
    return `The line is currently empty.`;
  }

  else {
    const whosInLine = [];
    for (let i = 0; i < line.length; i++)
      whosInLine.push(`${i===0 ? '' : ' '}${i+1}. ${line[i]}`);
    return `The line is currently: ${whosInLine}`;
  }
}
