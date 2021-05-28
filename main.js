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

var $entryBtn = document.querySelector('.entry-button');
var $allViews = document.querySelectorAll('.view');
var $entryForm = document.querySelector('.entry-form');
console.log($entryForm);
$entryBtn.addEventListener('click', handleSwap);
$entryForm.addEventListener('submit', handleSubmit);

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

function handleSubmit(event) {
  event.preventDefault();

  var entry = {
    time: $entryForm.elements.timeDropdown.value,
    day: $entryForm.elements.dayDropdown.value,
    description: $entryForm.elements.description.value
  };

}
