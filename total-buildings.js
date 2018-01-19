var totalBuildings = 0;
for (i = 1; i < 10; i++) {
  var built = parseInt($("#b" + i + " > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2)").text());
  var construction = parseInt($("#b" + i + " > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(5) > td:nth-child(2)").text());
  totalBuildings += (built + construction);
}

var wreckages = parseInt($("#b0 > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2)").text());

totalBuildings += wreckages;
$('<p style="font-weight: bold">City size: ' + totalBuildings + '</p>').appendTo('#infotext');

var cityGrowthSizes = [400, 6400, 14400, 25600, 40000, 57600, 78400, 90000, 200000, 1000000];
for (i = 0; cityGrowthSizes.length, i < 9; i++) {
  if(cityGrowthSizes[i] >= totalBuildings) {
    var buildingsLeftUntilNextGrowth = cityGrowthSizes[i] - totalBuildings;
    $('<p>City growth after ' + buildingsLeftUntilNextGrowth + ' buildings.</p>').appendTo('#infotext');
    break;
  }
} 