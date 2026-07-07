// arrow function
// write  a function that generates a random rgb color and logs the color in the rgb format to the console e.g rgb (126,255,0)


const hello = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  console.log(`rgb(${r},${g},${b})`);
  box.style.backgroundColor =`rgb(${r},${g},${b})`
}


setInterval(() => {
   hello() 
}, 1000);
