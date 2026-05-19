// function monthCheck() {
// const monthDays = {
//     january: 31,
//     february: 28,
//     march: 31,
//     april: 30,
//     may: 31,
//     june: 30,
//     july: 31,
//     august: 31,
//     september: 30,
//     october: 31,
//     november: 30,
//     december: 31
//   };

//   let month = prompt("you can search about a month here");
//   if (month === january) {
//    alert( `${month} has 30 days in it`)
//    }
// }
function monthCheck() {
  let month = prompt("You can search about a month here:")
  if (month === "january") {
    alert(`${month} has 31 days in it`);
  } 
  else if (month === "february") {
    alert(`${month} has 28 days in it (29 in a leap year)`);
  } 
  else if (month === "march") {
    alert(`${month} has 31 days in it`);
  } 
  else if (month === "april") {
    alert(`${month} has 30 days in it`);
  } 
  else if (month === "may") {
    alert(`${month} has 31 days in it`);
  } 
  else if (month === "june") {
    alert(`${month} has 30 days in it`);
  } 
  else if (month === "july") {
    alert(`${month} has 31 days in it`);
  } 
  else if (month === "august") {
    alert(`${month} has 31 days in it`);
  } 
  else if (month === "september") {
    alert(`${month} has 30 days in it`);
  } 
  else if (month === "october") {
    alert(`${month} has 31 days in it`);
  } 
  else if (month === "november") {
    alert(`${month} has 30 days in it`);
  } 
  else if (month === "december") {
    alert(`${month} has 31 days in it`);
  } 
  else {
    alert("you need to input a proper month name");
  }
}
