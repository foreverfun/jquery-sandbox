$(document).on('ready', function() {
  // list item 1
  $( 'li' ).first().css( "background-color", "red" );
  
  // list item A
  $( '.test2' ).first().css( "background-color", "red" );

  // list item E
  $( "li" ).last().css( "background-color", "green" );

  // list item 5
  $( '.test' ).last().css( "background-color", "green" );

  // list item 2
  $( "li" ).first().next().css( "background-color", "blue" );

  $("li").last().prev().css( "background-color", "blue" );
});