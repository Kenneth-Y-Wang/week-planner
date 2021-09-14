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
  // for (var i = 0; i < dataMonday.length; i++) {
  //   var $mondayTime = timeDom(dataMonday[i]);
  //   var $mondayDis = descriptionDom(dataMonday[i]);
  //   $timeMonday.appendChild($mondayTime);
  //   $descriptionMonday.appendChild($mondayDis);

  // }
  // for (var i = 0; i < dataMonday.length; i++) {
  //   var $mondayTime = timeDom(dataMonday[i]);
  //   var $mondayDis = descriptionDom(dataMonday[i]);
  //   $timeMonday.appendChild($mondayTime);
  //   $descriptionMonday.appendChild($mondayDis);

  // }
  // for (var i = 0; i < dataMonday.length; i++) {
  //   var $mondayTime = timeDom(dataMonday[i]);
  //   var $mondayDis = descriptionDom(dataMonday[i]);
  //   $timeMonday.appendChild($mondayTime);
  //   $descriptionMonday.appendChild($mondayDis);

  // }
  // for (var i = 0; i < dataMonday.length; i++) {
  //   var $mondayTime = timeDom(dataMonday[i]);
  //   var $mondayDis = descriptionDom(dataMonday[i]);
  //   $timeMonday.appendChild($mondayTime);
  //   $descriptionMonday.appendChild($mondayDis);

  // }
  // for (var i = 0; i < dataMonday.length; i++) {
  //   var $mondayTime = timeDom(dataMonday[i]);
  //   var $mondayDis = descriptionDom(dataMonday[i]);
  //   $timeMonday.appendChild($mondayTime);
  //   $descriptionMonday.appendChild($mondayDis);

}

document.addEventListener('DOMContentLoaded', entryDisplay);
