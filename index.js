function takeANumber(katzDeliLine, newName) {
  var newArray = [];
  for (var i = 0; i > katzDeliLine.length; i++) {
  if (katzDeliLine.length > 1) {
    katzDeliLine.push(newName);
  }
  return `Welcome, ${newName}. You are number ${katzDeliLine.length + 1} in line.`;  
  }
}
