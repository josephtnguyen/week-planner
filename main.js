var data = {
  view: 'default',
  days: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  }
};

var previousDataJSON = localStorage.getItem('data');

var $entryBtn = document.querySelector('.entry-button');
var $allViews = document.querySelectorAll('.view');
var $entryForm = document.querySelector('.entry-form');
var $formCancelButton = document.querySelector('.cancel-modal-button');
var $navDays = document.querySelector('.nav-days');
var $tableBody = document.querySelector('.tableBody');

window.addEventListener('beforeunload', handleUnload);
window.addEventListener('DOMContentLoaded', handleDOMContent);

$entryBtn.addEventListener('click', handleSwap);
$entryForm.addEventListener('submit', handleSubmit);
$formCancelButton.addEventListener('click', handleFormCancel);
$navDays.addEventListener('click', handleNav);

function handleUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}

function handleDOMContent(event) {
  if (previousDataJSON) {
    data = JSON.parse(previousDataJSON);
  }
}

function handleSwap(event) {
  if (!event.target.matches('.swap')) {
    return;
  }
  var location = event.target.getAttribute('data-view');
  for (var i = 0; i < $allViews.length; i++) {
    if (location === $allViews[i].getAttribute('data-view')) {
      $allViews[i].classList.remove('hidden');
    } else {
      $allViews[i].classList.add('hidden');
    }
  }
}

function handleFormCancel(event) {
  $entryForm.reset();
  event.target.closest('.view').classList.add('hidden');
}

function handleSubmit(event) {
  event.preventDefault();

  var entry = {
    time: $entryForm.elements.timeDropdown.value,
    day: $entryForm.elements.dayDropdown.value,
    description: $entryForm.elements.description.value
  };

  if (data.days[entry.day].length === 0) {
    data.days[entry.day].push(entry);
  } else {
    for (var i = 0; i < data.days[entry.day].length; i++) {
      if (data.days[entry.day][i].time > entry.time) {
        data.days[entry.day].splice(i, 0, entry);

        break;
      } else if (i === data.days[entry.day].length - 1) {
        data.days[entry.day].push(entry);

        break;
      }
    }
  }
  $entryForm.reset();
  event.target.closest('.view').classList.add('hidden');
}

function handleNav(event) {
  if (!event.target.matches('button')) {
    return;
  }

  var location = event.target.textContent.toLowerCase();

  for (var day in data.days) {
    if (location === day) {
      var entries = data.days[day];
      break;
    }
  }

}

function generateTableRow(entry) {
  var $tr = document.createElement('tr');
  var $tdTime = document.createElement('td');
  var $tdDescription = document.createElement('td');

  $tdTime.textContent = entry.time + ':00';
  $tdDescription.textContent = entry.description;

  $tr.append($tdTime, $tdDescription);

  return $tr;
}
