var compTIA = ["Mobile Devices", "Networking", "Hardware", "Virtualization and Cloud Computing", "Hardware and Network Troubleshooting", "Operating Systems", "Security",
"Software Troubleshooting", "Operational Procedures", "Networking Concepts", "Infrastructure", "Network Operations", "Network Security", "Network Troubleshooting and Tools",
"Threats, Attacks and Vulnerabilities", "Technologies and Tools", "Architecture and Design", "Identity and Access Management", "Risk Management", "Cryptography and PKI"
  
function displaySearch() {
 var displayResult = document.getElementById("displayResult");
  window.history.pushState({},"Test","search.html");
 document.body.innerHTML = result;
}

function doSearch() {
 var searchField = document.getElementById("searchField").value;

 result=db.filter(.toUpperCase()===searchField.toUpperCase()).map().join("<br>");

 displaySearch();

}

function search ()  { 
     document.getElementById("searchButton").addEventListener("click", doSearch, false);

window.addEventListener("load", search, false);