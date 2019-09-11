var x = 1;
//fetches from web server for chrome and stores in var
fetch('./company_db.json')

//converts from JSON string to JSON object
.then(response => response.json()).then(products => {

//sets empty var for HTML to be stored in
var offers = [];

//maps through products, sets var html to "arrivingFrom: VALUE<br/><br/>arrivalTime: VALUE"
var arrOffers = products.map(function(offer){
// var html =  "<tr>" + "<td id=1>" + offer["name"] + "</td>" + "<td>" + "<form><button type=button class='btn btn-primary'>Add</button></form>" + "</td>" + "</tr>" ;
var html =  "<tr>" + "<td id=" + offer["name_id"] + ">" + offer["name"] + "</td>" + "<td>" + "<id=" + offer["button_id"] +"><button type=button class='btn btn-primary'>Add</button>" + "</td>" + "</tr>" ;

// assigns function to button
document.getElementById("result").onclick = function(){getCompanyName()};

// logs offer name. ONLY PICKING UP LAST ONE FOR SOME REASON.
function getCompanyName(){
  var companyName = result.innerHTML;
  console.log(companyName);
}

//pushes var html into var offers, which is global scope
    offers.push(html);
});


//sets var p to result ID in HTML
var p = document.querySelector("#result")

//passes var citites into var p and replaces comma normally separating array items with a space
p.innerHTML = offers.join(" ");

})
