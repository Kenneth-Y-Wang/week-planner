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
var previousWednesdayJSON = localStorage.getItem('data-wednesday-storage');
if (previousWednesdayJSON !== null) {
  dataWednesday = JSON.parse(previousWednesdayJSON);
}
var previousThursdayJSON = localStorage.getItem('data-thursday-storage');
if (previousThursdayJSON !== null) {
  dataThursday = JSON.parse(previousThursdayJSON);
}
var previousFridayJSON = localStorage.getItem('data-friday-storage');
if (previousFridayJSON !== null) {
  dataFriday = JSON.parse(previousFridayJSON);
}
var previousSaturdayJSON = localStorage.getItem('data-saturday-storage');
if (previousSaturdayJSON !== null) {
  dataSaturday = JSON.parse(previousSaturdayJSON);
}
var previousSundayJSON = localStorage.getItem('data-sunday-storage');
if (previousSundayJSON !== null) {
  dataSunday = JSON.parse(previousSundayJSON);
}
window.addEventListener('beforeunload', function () {
  var mondayJSON = JSON.stringify(dataMonday);
  var tuesdayJSON = JSON.stringify(dataTuesday);
  var wednesdayJSON = JSON.stringify(dataWednesday);
  var thursdayJSON = JSON.stringify(dataThursday);
  var fridayJSON = JSON.stringify(dataFriday);
  var saturdayJSON = JSON.stringify(dataSaturday);
  var sundayJSON = JSON.stringify(dataSunday);
  localStorage.setItem('data-monday-storage', mondayJSON);
  localStorage.setItem('data-tuesday-storage', tuesdayJSON);
  localStorage.setItem('data-wednesday-storage', wednesdayJSON);
  localStorage.setItem('data-thursday-storage', thursdayJSON);
  localStorage.setItem('data-friday-storage', fridayJSON);
  localStorage.setItem('data-saturday-storage', saturdayJSON);
  localStorage.setItem('data-sunday-storage', sundayJSON);

});
