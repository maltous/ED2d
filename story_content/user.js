function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YCac0PykSb":
        Script1();
        break;
      case "6S2gXyPHm31":
        Script2();
        break;
      case "691lw3U9LiU":
        Script3();
        break;
      case "5V7ziFAFcIy":
        Script4();
        break;
      case "6G4YriGnIHL":
        Script5();
        break;
      case "6mtHvdc9y1B":
        Script6();
        break;
      case "5yltlZj3QS9":
        Script7();
        break;
      case "6GDevcMxbO2":
        Script8();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  $("#tab-customlink").show();
}

function Script8()
{
  window.print();
}

