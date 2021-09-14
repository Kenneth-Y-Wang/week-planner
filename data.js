/* exported data */

var dataMonday = [];
var dataTuesday = [];
var dataWednesday = [];
var dataThursday = [];
var dataFriday = [];
var dataSaturday = [];
var dataSunday = [];

var previousMondayJSON = localStorage.getItem('data-monday-storage');
if (previousMondayJSON !== null) {
  dataMonday = JSON.parse(previousMondayJSON);
}
var previousTuesdayJSON = localStorage.getItem('data-tuesday-storage');
if (previousTuesdayJSON !== null) {
  dataTuesday = JSON.parse(previousTuesdayJSON);
}

window.addEventListener('beforeunload', function () {
  var mondayJSON = JSON.stringify(dataMonday);
  var tuesdayJSON = JSON.stringify(dataTuesday);
  localStorage.setItem('data-monday-storage', mondayJSON);
  localStorage.setItem('data-tuesday-storage', tuesdayJSON);

});
