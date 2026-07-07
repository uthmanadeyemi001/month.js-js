let display = document.getElementById("display")

function  subResult() {
    let eng = document.getElementById("eng").value
    let math = document.getElementById("math").value
    let chem = document.getElementById("chem").value
    let phy = document.getElementById("phy").value
  let average = (Number(eng) + Number(math) + Number(chem) + Number(phy)) / 4
  let grade = ("A")
  let gradeB = ("B")
  let gradeC = ("C")
  let gradeD = ("D")
  let gradeF = ("F")
 console.log(average);
 if (eng === "" || math === ""|| chem ===""||phy ==="") {
    alert("all field must be filled")
 }else if (average >= 80) {
    
        document.getElementById("display").innerHTML = `your grade is A and your average is ${average}`;
      }else if ( average >= 70) {
        document.getElementById("display").innerHTML = `your grade is B and your average is ${average}`;
        
      }else if (average >= 60) {
        document.getElementById("display").innerHTML = `your grade is C and your average is ${average}`;
        
      }else if (average >= 50) {
        document.getElementById("display").innerHTML = `your grade is D and your average is ${average}`;
        
      }else if (average < 50) {
        document.getElementById("display").innerHTML = `your grade is F and your average is ${average}`;
        
      }else{
        alert("invalid score")
      }
    //   document.getElementById("display").innerText = `your average is  ${average} and your grade is ${grade}`

      
}
// for(let i = 10; i >= 0; i--)
//   console.log(i);

// for(let num = 0; num <= 10++){
//   console.log(`${num} * ${num}`);
  
// }

// for (let i = 1; i <= 12; i++ ){
//   console.log(`${i}* 2 = ${times * 2} `);
  
// }
for (let i = 1; i <= 12; i++ ){
  console.log(`${i}* 3 = ${times * 3} `);
  
}