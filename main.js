var entryButton = document.querySelector('.entryButton');
var modalHolder = document.querySelector('.modalHolder');
var cancelButton = document.querySelector('.cancel-button');

entryButton.addEventListener('click', entryButtonClick);

function entryButtonClick(event) {
  if (event.target === entryButton) {
    modalHolder.classList.remove('hidden');
  }
}

cancelButton.addEventListener('click', cancelButtonClick);

function cancelButtonClick(event) {
  modalHolder.className = 'hidden modalHolder';
}

var $viewElements = document.querySelectorAll('div[data-view]');
function switchViews(view) {
  for (var i = 0; i < $viewElements.length; i++) {
    if ($viewElements[i].getAttribute('data-view') !== view) {
      $viewElements[i].className = 'table hidden';
    } else {
      $viewElements[i].className = 'table';
    }
  }
}

function handleViewNavigation(event) {
  switchViews(event.target.getAttribute('data-view'));
  console.log('test');
}

var $monday = document.querySelector('.monday');
$monday.addEventListener('click', handleViewNavigation);
var $tuesday = document.querySelector('.tuesday');
$tuesday.addEventListener('click', handleViewNavigation);
var $wednesday = document.querySelector('.wednesday');
$wednesday.addEventListener('click', handleViewNavigation);
var $thursday = document.querySelector('.thursday');
$thursday.addEventListener('click', handleViewNavigation);
var $friday = document.querySelector('.friday');
$friday.addEventListener('click', handleViewNavigation);
var $saturday = document.querySelector('.saturday');
$saturday.addEventListener('click', handleViewNavigation);
var $sunday = document.querySelector('.sunday');
$sunday.addEventListener('click', handleViewNavigation);
