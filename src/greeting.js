console.log("lo que sea");
const queryString = window.location.search;
console.log("queryString", queryString);
const urlParams = new URLSearchParams(queryString);
console.log("urlParams", urlParams);
const name1 = urlParams.get("name1");
const name2 = urlParams.get("name2");

console.log("doc", document.getElementById("greeting"));
console.log("name2", name2);
const tickets = name1 && name2 ? 2 : 1;

if (name1 && name2) {
  // Update the webpage with personalized content for two people
  document.getElementById("greeting").textContent = `${name1} & ${name2} `;
  document.getElementById("tickets").innerText = `(${tickets})PERSONAS`;
} else {
  // Update the webpage with a generic greeting
  document.getElementById("greeting").textContent = `${name1} `;
  document.getElementById("tickets").innerText = `(${tickets})PERSONA`;
}
