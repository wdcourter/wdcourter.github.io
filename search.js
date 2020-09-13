// var compTIA = ["Mobile Devices", "Networking", "Hardware", "Virtualization and Cloud Computing", "Hardware and Network Troubleshooting", "Operating Systems", "Security",
// "Software Troubleshooting", "Operational Procedures", "Networking Concepts", "Infrastructure", "Network Operations", "Network Security", "Network Troubleshooting and Tools",
// "Threats, Attacks and Vulnerabilities", "Technologies and Tools", "Architecture and Design", "Identity and Access Management", "Risk Management", "Cryptography and PKI"]
  
// function displaySearch() {
//  var displayResult = document.getElementById("displayResult");
//   window.history.pushState({},"Test","search.html");
//  document.body.innerHTML = result;
// }

// function doSearch() {
//  var searchField = document.getElementById("searchField").value;

//  result=db.filter(.toUpperCase()===searchField.toUpperCase()).map().join("<br>");

//  displaySearch();

// }

// function search ()  { 
//      document.getElementById("searchButton").addEventListener("click", doSearch, false);

// window.addEventListener("load", search, false);

var storage = {
    "networking": "netPlus.html",
    "devices": "aPlus1.html",
    "mobile": "aPlus1.html",
    "microsoft": "aPlus2.html"

}

function search(event){
    event.preventDefault()
    var searchQuery = document.getElementById('searchField').value.toLowerCase();

    if(storage[searchQuery]) {
        //redirect to the results of storage[searchQuery]
        //window.history.pushState((), '', )
        window.location = storage[searchQuery]
    }
}