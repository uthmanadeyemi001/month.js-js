let display = document.getElementById("display")

function  subResult() {
    let eng = document.getElementById("eng").value
    let math = document.getElementById("math").value
    let chem = document.getElementById("chem").value
    let phy = document.getElementById("phy").value
  let average = (eng + math + chem + phy) / 4
  let grade = ("A")
  let gradeB = ("B")
  let gradeC = ("C")
  let gradeD = ("D")
  let gradeF = ("F")
 console.log(average);
 if (eng === "" || math === ""|| chem ===""||phy ==="") {
    alert("all field must be filled")
 }else if (average >= 80) {
    
        document.getElementById("display").innerHTML = `your grade is A and you average is ${average}`;
      }else if ( average >= 70) {
        document.getElementById("display").innerHTML = "your grade is B";
        
      }else if (average >= 60) {
        document.getElementById("display").innerHTML = "your grade is C";
        
      }else if (average >= 50) {
        document.getElementById("display").innerHTML = "your grade is D";
        
      }else if (average < 50) {
        document.getElementById("display").innerHTML = "your grade is F";
        
      }else{
        alert("invalid score")
      }
    //   document.getElementById("display").innerText = `your average is  ${average} and your grade is ${grade}`

      
}