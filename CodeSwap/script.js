var x = 1;
//fetches from web server for chrome and stores in var
fetch('./company_db.json')

//converts from JSON string to JSON object
.then(response => response.json()).then(products => {

//sets empty var for HTML to be stored in
var offers = [];

//maps through products, sets var html to "arrivingFrom: VALUE<br/><br/>arrivalTime: VALUE"
var arrOffers = products.map(function(offer){
var html =  "<tr>" + "<td>" + "<a target=blank href=" + offer["current_link"] + ">" + offer["name"] + "</a>" + "</td>" + "<td>$" + offer["user_cost"] + "</td>" + "<td>$" + offer["promo_worth"] + "</td></div>" + "</tr>";
//pushes var html into var offers, which is global scope
    offers.push(html);
});

//sets var p to result ID in HTML
var p = document.querySelector("#result")
//passes var citites into var p and replaces comma normally separating array items with a space
p.innerHTML = offers.join(" ");
})
