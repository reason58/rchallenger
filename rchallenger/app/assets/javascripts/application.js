// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
    $('#login-trigger').click(function(){
        $(this).next('#login-content').slideToggle();
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
        else $(this).find('span').html('&#x25BC;')
    })
});

/*
window.onload = function() {
    var loginButton = document.getElementById("loginbutton");

    document.addEventListener('click', function() {
        if ($('#logindropdown').is(':visible')) {
            if (!$(event.target).closest('#logindropdown', '#loginbutton').length) {
                $("#logindropdown").hide();
            }
            console.log("is visible");
        }}, false);

    loginButton.addEventListener('click', function() {
        $("#logindropdown").toggle();
    }, false);
}
*/


/*
    loginButton.addEventListener('click', function () {{
            if (!$(event.target).closest('#logindropdown').length) {
                $("#logindropdown").toggle();
                console.log('Now hiding loginbutton');
            }
            ;
        }
    }, false);

}
*/

/*
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#logindropdown').length) {
            $("#logindropdown").toggle();
            console.log('Now hiding loginbutton');
        };
    });
}
*/

/*
$(document).ready(function(){
    $("#loginbutton").click(function(){
        $("#logindropdown").toggle();

        /* Status Check

        if($('#logindropdown').is(':visible')) {
            console.log("Dropdown is visible");
        }
        else if($('#logindropdown').is(':hidden')) {
            console.log("Dropdown is hidden");
        }
    })
});
*/
/*
$(document).click(function(event) {
    if ($('#logindropdown').is(':visible')) {
        console.log("Click event fires");
        /*if(!$(event.target).closest('#logindropdown-content').length) {
            $("#logindropdown-content").hide();
        }
    })
*/
/*
 $(document).on('click', function(event) {
 if ($('#logindropdown').is(':visible')) {
 if(!$(event.target).closest('#logindropdown-content').length) {
 $("#logindropdown-content").hide();
 }
 }
 })

 */
