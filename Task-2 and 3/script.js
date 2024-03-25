/* Task 2 =>
    To display all the country flags in the console 
    API URL ="https://restcountries.com/v3.1/all"
*/

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var objData = JSON.parse(data);
  for (var i = 0; i < objData.length; i++) {
    console.log("Flag " + [i + 1] + ": " + objData[i].flags.svg);
  }
};

/* Task 3 =>
    To print all the countries names,regions,sub-region and populations
    using the same API URL.
*/
var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data = request1.response;
  var objData = JSON.parse(data);
  for (var i = 0; i < objData.length; i++) {
    console.log(
      "Name :" + objData[i].name.common,
      ",Region :" + objData[i].region,
      ",Subregion :" + objData[i].subregion,
      ",Population :" + objData[i].population
    );
  }
};
