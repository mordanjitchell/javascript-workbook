'use strict';

$(document).ready(function() {
    // App logic goes here
    $('form').submit(function(event) {
        event.preventDefault();
        //nside your callback prevent the default event from occuring when you submit.
        //Then within the $(this) context, .find() the value of #todo and assign it to a variable called todoText.
        var todoText = $(this).find('#todo').val();
        $('#todo-list').append('<li>' + todoText + '</li>');
        var todoText = $(this).find('#todo').val(" ");
        $('ul').sortable();
    });

    var $listitem = $('li');
    $listitem.click(function() {
        $(this).remove();
    });

});
