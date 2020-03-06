var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1DBnwJgwOFSz56wFIeGTfpBQIwuWBmpxq6I9FeurpbrE/edit?usp=sharing';

$(document).ready( function() {
  Tabletop.init( { key: public_spreadsheet_url,
				   callback: showInfo,
           parseNumbers: true } );
           
});
  
function showInfo(data, tabletop) {
  console.log(data);
  var source   = $("#timetable-template").html();
  var template = Handlebars.compile(source);

  $.each( tabletop.sheets('Timetable').all(), function(i, ttble) {
	var html = template(ttble);
  $("#ttble").append(html);
	// console.log(ttble);
  });
}

$(document).ready(function(){
  $('.collapsible').collapsible();

});