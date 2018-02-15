function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;  
}

function nowServing() {
  if (katzDeliLine.length > 0) {
    return katzDeliLine[0].shift();
  } else {
    return "There is nobody waiting to be served!";
  }
}