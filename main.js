var data = {
  view: 'default',
  days: {
    {Monday: []
    },
    {Tuesday: []
    },
    {Wednesday: []
    },
    {Thursday: []
    },
    {Friday: []
    },
    {Saturday: []
    },
    {Sunday: []
    }
  },
}

var $entryBtn = document.querySelector('.entry-button');
$entryBtn.addEventListener('click', handleSwap);
var $allViews = document.querySelectorAll('.view');

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

function
