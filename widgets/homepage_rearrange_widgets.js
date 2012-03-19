$j(document).ready(function() {

if(window.location.pathname.match(/home/)) {

$j("#pinned_topics_title").parent().next().andSelf().wrapAll('<div id="pinned_topics_section" />');

$j("#introductory_text").insertAfter("#solution_suggestion");

$j("#pinned_topics_section").insertBefore("#solution_suggestion");

$j('.content content_green').css({"float":"left"});

}

});