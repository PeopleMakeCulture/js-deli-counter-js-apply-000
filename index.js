function takeANumber(line, person){
  //adds a person to the line
  line.push(person);

  //return message
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line){
  //returns empty when no one on line
  if (line.length = 0){
    return 'There is nobody waiting to be served!';
  }

  else if (line.length > 0) {
    //shifts line
    //returns announcement about person it is serving
    return `Currently serving ${line.shift()}.`
  }


}

function currentLine(line){

}
