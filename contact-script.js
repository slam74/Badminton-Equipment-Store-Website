// contact-email-form radio buttons and order number input display
window.addEventListener('load', function(){
    document.querySelector('#order-number').style.display = 'none';
    document.querySelector('#order-number-label').style.display = 'none';
  });
  
  document.querySelector('#order-problem-option').addEventListener('click', function(){
    document.querySelector('#order-number').style.visibility = 'visible';
    document.querySelector('#order-number').style.display = 'block';
    document.querySelector('#order-number-label').style.visibility = 'visible';
    document.querySelector('#order-number-label').style.display = 'block';
  });
  
  document.querySelector('#comment-option').addEventListener('click', function(){
    document.querySelector('#order-number').style.display = 'none';
    document.querySelector('#order-number-label').style.display = 'none';
  });
  
  document.querySelector('#question-option').addEventListener('click', function(){
    document.querySelector('#order-number').style.display = 'none';
    document.querySelector('#order-number-label').style.display = 'none';
  });
