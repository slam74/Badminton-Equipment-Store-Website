// radio button options

window.addEventListener('load', function(){
  document.querySelector('#order-number').style.display = 'none';
});

document.querySelector('#order-problem-option').addEventListener('click', function(){
  document.querySelector('#order-number').style.visibility = 'visible';
  document.querySelector('#order-number').style.display = 'block';
});

document.querySelector('#comment-option').addEventListener('click', function(){
  document.querySelector('#order-number').style.display = 'none';
});

document.querySelector('#question-option').addEventListener('click', function(){
  document.querySelector('#order-number').style.display = 'none';
});

// category selection menu bar

// product contents to be displayed on the page
 var allHeader = document.querySelector('#shop-all');
 var racquets = document.querySelector('.racquets');
 var shoes = document.querySelector('.shoes');
 var shuttlecocks = document.querySelector('.shuttlecocks');
 
// function clears the main element of all categories
function clear() {
   var content = document.querySelector('main');
   while (content.firstChild) {
     content.removeChild(content.firstChild);
   }
 }
 
// function for filtering display based on the category clicked on the menu bar
 function menuSelection(choice, display) {
   document.querySelector(choice).addEventListener('click', function() {
     clear();
     document.querySelector('main').appendChild(display);
   });
 }
 
// if racquets is clicked, only display racquet products
 menuSelection('#racquets-category', racquets);

// if shoes is clicked, only display shoes products
 menuSelection('#shoes-category', shoes);

// if shuttlecocks is clicked, display only shuttlecocks
 menuSelection('#shuttlecocks-category', shuttlecocks);

// if shop all is clicked, display all item categories
 document.querySelector('#all-categories').addEventListener('click', function() {
   clear();
   document.querySelector('main').appendChild(allHeader);
   document.querySelector('main').appendChild(racquets);
   document.querySelector('main').appendChild(shoes);
   document.querySelector('main').appendChild(shuttlecocks);
});
