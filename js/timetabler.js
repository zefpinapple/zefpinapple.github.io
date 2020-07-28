var data = [{"WC":"27/07/20","Monday":"Day Off","Tuesday":"0930-1630","Wednesday":"1300-2030","Thursday":"0930-1630","Friday":"1230-2030","Saturday":"Day Off","Sunday":"0930-1730"},{"WC":"03/08/20","Monday":"Day Off","Tuesday":"1300-2030","Wednesday":"1300-2030","Thursday":"0930-1630","Friday":"0915-1745","Saturday":"Day Off","Sunday":"1000-1730"},{"WC":"10/08/20","Monday":"1300-2030","Tuesday":"Day Off","Wednesday":"0915-1745","Thursday":"0930-1630","Friday":"1230-2030","Saturday":"Day Off","Sunday":"1000-1730"},{"WC":"17/08/20","Monday":"Day Off","Tuesday":"1300-2030","Wednesday":"1300-2030","Thursday":"0930-1630","Friday":"0915-1745","Saturday":"Day Off","Sunday":"1000-1730"}]

var template = $.templates("#theTmpl");
  
var htmlOutput = template.render(data);
  
$("#result").html(htmlOutput);

$.getJSON('js/timetable.json', function(data){
    console.log(data);
})