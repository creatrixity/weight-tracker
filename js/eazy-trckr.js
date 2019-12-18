(function() {
  let $historyList = document.getElementById('history-list');
  let $historyListing = document.getElementsByClassName('history-listing')[0];
  let $newEntryForm = document.getElementById('new-entry-form');

  function addHistoryEntry() {
    let $entryInput = document.getElementById('entry_input');
    $entryInput.value = '';
    window.location = '/index.html';
  }

  function createNewHistoryListing(item) {
    let $listing = $historyListing.cloneNode(true);
    let $listingWeightDiff = $listing.querySelector('.listing-weight-diff');
    let $listingWeightIndicator = $listing.querySelector(
      '.listing-weight-indicator'
    );
    let $listingWeight = $listing.querySelector('.listing-weight');
    let $arrowIcon = $listing.querySelector('.listing-arrow-icon');

    $listing.classList.remove('sr-only');
    $listingWeightDiff.innerText = item.weightDiff;
    $listingWeightIndicator.classList.add(
      item.recordedUptick ? 'text-primary' : 'text-danger'
    );

    $listingWeight.innerText = item.weight;
    $arrowIcon.classList.add(
      `${item.recordedUptick ? 'fa-arrow-up' : 'fa-arrow-down'}`
    );

    return $listing;
  }

  function buildHistoryList() {
    let data = [
      { weightDiff: 0.1, weight: 23, time: 'yesterday', recordedUptick: false },
      { weightDiff: 0.2, weight: 24, time: 'today', recordedUptick: true }
    ];

    data.forEach(item => $historyList.append(createNewHistoryListing(item)));
  }

  $historyList && buildHistoryList();
  if ($newEntryForm) {
    $newEntryForm.onsubmit = function(e) {
      e.preventDefault();
      addHistoryEntry();
    };
  }
})();
