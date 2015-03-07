// Part I
// 1. Create a static user profile with HTML and css
// 2. Add a click handler to each text block
// 3. When a text block is clicked, hide the text block and display an input in its palce. The input should take up the same spaces as the text block so that the transition from text to editable field is seamless and doesn't throw off the layout
// 4. When the input is blurred: 1. Hide the input, 2. Show the text block, 3. Update the text block with the next text

$(document).on('ready', function() {
  $('input[type="text"]').on('click', function() {
  	alert('text click');
  });
  $('input[type="button"]').on('click', function() {
  	alert('button click');
  });
  $ ('input[type="submit"]').on('click',function() {
  	alert('submit click');
  });
});