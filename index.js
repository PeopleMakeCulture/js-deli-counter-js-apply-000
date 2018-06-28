function takeANumber(line, person){
  //adds a person to the line
  //appends the person the end of the line if there are already people on it
  //properly handles multiple people being added
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`
}
