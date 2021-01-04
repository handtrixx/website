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
}
function onButtonGroupClick(event) {
   if (!matchesSelector(event.target, '.button')) {
     return;
   }
   var button = event.target;
   button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
   button.classList.add('is-checked');
 }
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
   }
   iso.layout();
 }
 var iso = new Isotope('.grid', {
   itemSelector: '.element-item',
   layoutMode: 'fitRows',
   getSortData: {
     name: '.name',
     date: '.date'
   },
   percentPosition: true,
   transitionDuration: '0.8s'
 });
 
 
 setTimeout(function () { iso.layout(); }, 750);