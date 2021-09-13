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

var $form = document.querySelector('form');
var $time = document.querySelector('#time');
var $day = document.querySelector('#day');
var $textArea = document.querySelector('textarea');

$form.addEventListener('submit', function () {
  event.preventDefault();
  var entryData = {
    time: $time.value,
    day: $day.value,
    description: $textArea.value
  };
});

//= ============ render function

/* <tr>
     <td>
       10:00
     </td>
    </tr> */

function timeDom(entry) {
  var $tr = document.createElement('tr');

  var $td = document.createElement('td');
  $td.textContent = entry.time;

  $tr.appendChild($td);

  return $tr;
}

/* <tr>
  <td>
    <div class="eventRow space-between">
      <div class="column-one-third textRow" >Go to school</div>
      <div class="column-one-third buttonHolder space-between">
        <button class="delete">Delete</button>
        <button class="edit">Edit</button>
      </div>
    </div>
  </td>
</tr>; */

function descriptionDom(entry) {
  var $tr = document.createElement('tr');
  var $td = document.createElement('td');
  var $eventRow = document.createElement('div');
  $eventRow.setAttribute('class', 'eventRow space-between');

  var $textRow = document.createElement('div');
  $textRow.setAttribute('class', 'column-one-third textRow');
  $textRow.textContent = entry.description;

  var $buttonHolder = document.createElement('div');
  $buttonHolder.setAttribute('class', 'column-one-third buttonHolder space-between');

  var $delete = document.createElement('button');
  $delete.setAttribute('class', 'delete');
  $delete.textContent = 'Delete';

  var $edit = document.createElement('button');
  $edit.setAttribute('class', 'edit');
  $edit.textContent = 'Edit';

  $tr.appendChild($td);
  $td.appendChild($eventRow);
  $eventRow.appendChild($textRow);
  $eventRow.appendChild($buttonHolder);
  $buttonHolder.appendChild($delete);
  $buttonHolder.appendChild($edit);

  return $tr;

}
