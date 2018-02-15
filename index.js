function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;  
}

function nowServing(katzDeliLine) {
  var currentlyServing = ""
  if (katzDeliLine.length > 0) {
    currentlyServing = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return currentlyServing;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var newArray = [];
    for (var i = 0; i > katzDeliLine.length; i++) {
      newArray.push(`${katzDeliLine.length}. ${katzDeliLine}, `)
    }
    return `The line is currently: ${newArray.shift()
  } else {
    return "The line is currently empty.";
  }
}