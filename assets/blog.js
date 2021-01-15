var sortByGroup = document.querySelector('.sort-by-button-group');

sortByGroup.addEventListener('click', function (event) {
  if (!matchesSelector(event.target, '.button')) {
    return;
  }
  var sortValue = event.target.getAttribute('data-sort-value');
  iso.arrange({ sortBy: sortValue });
});

var buttonGroups = document.querySelectorAll('.button-group');

for (var i = 0; i < buttonGroups.length; i++) {
  buttonGroups[i].addEventListener('click', onButtonGroupClick);
};

function onButtonGroupClick(event) {
   if (!matchesSelector(event.target, '.button')) {
     return;
   }
   var button = event.target;
   button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
   button.classList.add('is-checked');
 };

function filterFunction() {
   var input, filter, ul, li, a, i, txtValue;
   input = document.getElementById('filterInput');
   filter = input.value.toUpperCase();
   ul = document.getElementById("filterContainer");
   li = ul.getElementsByClassName('grid-item');
 
   for (i = 0; i < li.length; i++) {
     a = li[i].getElementsByTagName("a")[0];
     txtValue = a.textContent || a.innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
       li[i].style.display = "";
     } else {
       li[i].style.display = "none";
     }
   };
   iso.layout();
 };

 var iso = new Isotope('.grid', {
   itemSelector: '.element-item',
   getSortData: {
     name: '.name',
     date: '.date'
   },
   sortBy: '.date',
   percentPosition: true,
   transitionDuration: '0.8s'
 });
 
function filterTag(tag) { 
  document.getElementById("filterInput").value = tag;
  document.getElementById("filterInput").dispatchEvent(new Event('keyup'));
};

function filterClear() {
  document.getElementById("filterInput").value = '';
  document.getElementById("filterInput").dispatchEvent(new Event('keyup'));
};
 
function clientDate () {
  const currentTimestamp = Date.now();
  var array = document.getElementsByClassName('clientDate').length;

  var i;
  for (i = 0; i < array; i++) {
    var unixTimestamp = document.getElementsByClassName('clientDate')[i].innerHTML;
    unixTimestamp = unixTimestamp * 1000;
    const diff = currentTimestamp - unixTimestamp;
    var seconds = diff / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    if (days < 1) {
      if (hours < 1) {
        difference = "wenigen Minuten";
      } else {
        difference = Math.round(hours)+" Stunden";
      }
      
    } else {
      difference = Math.round(days)+ " Tagen";
    }
    document.getElementsByClassName('clientDate')[i].innerHTML = "vor "+difference;
    
  }
};


clientDate();

setTimeout(function () { iso.layout(); }, 750);