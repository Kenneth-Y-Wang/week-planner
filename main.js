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

var $timeMonday = document.querySelector('.monday-time');
var $descriptionMonday = document.querySelector('.monday-description');
var $timeTuesday = document.querySelector('.tuesday-time');
var $descriptionTuesday = document.querySelector('.tuesday-description');
var $timeWednesday = document.querySelector('.wednesday-time');
var $descriptionWednesday = document.querySelector('.wednesday-description');
var $timeThursday = document.querySelector('.thursday-time');
var $descriptionThursday = document.querySelector('.thursday-description');
var $timeFriday = document.querySelector('.friday-time');
var $descriptionFriday = document.querySelector('.friday-description');
var $timeSaturday = document.querySelector('.saturday-time');
var $descriptionSaturday = document.querySelector('.saturday-description');
var $timeSunday = document.querySelector('.sunday-time');
var $descriptionSunday = document.querySelector('.sunday-description');

$form.addEventListener('submit', function () {
  event.preventDefault();
  var entryData = {
    time: $time.value,
    day: $day.value,
    description: $textArea.value
  };
  if (entryData.day === 'monday') {
    $timeMonday.appendChild(timeDom(entryData));
    $descriptionMonday.appendChild(descriptionDom(entryData));
    dataMonday.push(entryData);
  }
  if (entryData.day === 'tuesday') {
    $timeTuesday.appendChild(timeDom(entryData));
    $descriptionTuesday.appendChild(descriptionDom(entryData));
    dataTuesday.push(entryData);
  }
  if (entryData.day === 'wednesday') {
    $timeWednesday.appendChild(timeDom(entryData));
    $descriptionWednesday.appendChild(descriptionDom(entryData));
    dataWednesday.push(entryData);
  }
  if (entryData.day === 'thursday') {
    $timeThursday.appendChild(timeDom(entryData));
    $descriptionThursday.appendChild(descriptionDom(entryData));
    dataThursday.push(entryData);
  }
  if (entryData.day === 'friday') {
    $timeFriday.appendChild(timeDom(entryData));
    $descriptionFriday.appendChild(descriptionDom(entryData));
    dataFriday.push(entryData);
  }
  if (entryData.day === 'saturday') {
    $timeSaturday.appendChild(timeDom(entryData));
    $descriptionSaturday.appendChild(descriptionDom(entryData));
    dataSaturday.push(entryData);
  }
  if (entryData.day === 'sunday') {
    $timeSunday.appendChild(timeDom(entryData));
    $descriptionSunday.appendChild(descriptionDom(entryData));
    dataSunday.push(entryData);
  }

  modalHolder.className = 'hidden modalHolder';
  $form.reset();
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
  $buttonHolder.setAttribute('class', 'column-one-third buttonHolder justify-evenly');

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

function entryDisplay(event) {
  for (var i = 0; i < dataMonday.length; i++) {
    var $mondayTime = timeDom(dataMonday[i]);
    var $mondayDis = descriptionDom(dataMonday[i]);
    $timeMonday.appendChild($mondayTime);
    $descriptionMonday.appendChild($mondayDis);

  }
  for (var j = 0; j < dataTuesday.length; j++) {
    var $tuesdayTime = timeDom(dataTuesday[j]);
    var $tuesdayDis = descriptionDom(dataTuesday[j]);
    $timeTuesday.appendChild($tuesdayTime);
    $descriptionTuesday.appendChild($tuesdayDis);

  }
  for (var k = 0; k < dataWednesday.length; k++) {
    var $wednesdayTime = timeDom(dataWednesday[k]);
    var $wednesdayDis = descriptionDom(dataWednesday[k]);
    $timeWednesday.appendChild($wednesdayTime);
    $descriptionWednesday.appendChild($wednesdayDis);

  }
  for (var l = 0; l < dataThursday.length; l++) {
    var $thursdayTime = timeDom(dataThursday[l]);
    var $thursdayDis = descriptionDom(dataThursday[l]);
    $timeThursday.appendChild($thursdayTime);
    $descriptionThursday.appendChild($thursdayDis);

  }
  for (var m = 0; m < dataFriday.length; m++) {
    var $fridayTime = timeDom(dataFriday[m]);
    var $fridayDis = descriptionDom(dataFriday[m]);
    $timeFriday.appendChild($fridayTime);
    $descriptionFriday.appendChild($fridayDis);

  }
  for (var n = 0; n < dataSaturday.length; n++) {
    var $saturdayTime = timeDom(dataSaturday[n]);
    var $saturdayDis = descriptionDom(dataSaturday[n]);
    $timeSaturday.appendChild($saturdayTime);
    $descriptionSaturday.appendChild($saturdayDis);

  }
  for (var o = 0; o < dataSunday.length; o++) {
    var $sundayTime = timeDom(dataSunday[o]);
    var $sundayDis = descriptionDom(dataSunday[o]);
    $timeSunday.appendChild($sundayTime);
    $descriptionSunday.appendChild($sundayDis);

  }
}
document.addEventListener('DOMContentLoaded', entryDisplay);
