const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name1 = urlParams.get('name1');
const name2 = urlParams.get('name2');

console.log("name1", name1)
console.log("name2", name2)

if (name1 && name2) {
  // Update the webpage with personalized content for two people
  document.getElementById('greeting').textContent = Hello, ${name1} and ${name2}! Welcome to our website.;
} else if (name1) {
  // Update the webpage with personalized content for the first person only
  document.getElementById('greeting').textContent = Hello, ${name1}! Welcome to our website.;
} else if (name2) {
  // Update the webpage with personalized content for the second person only
  document.getElementById('greeting').textContent = Hello, ${name2}! Welcome to our website.;
} else {
  // Update the webpage with a generic greeting
  document.getElementById('greeting').textContent = 'Welcome to our website.';
}