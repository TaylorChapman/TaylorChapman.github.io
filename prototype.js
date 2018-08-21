var counthunger;
var s;
localStorage.setItem("s", s);
localStorage.setItem("counthunger", counthunger);
var countelephants;
var countdeforest;
var countchildren;
var countmarine;
var countcancer;
var countdoctors;
var countgirls;

var cause

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setvarhunger(){
  document.cookie = "causename=hunger";
  var x = document.Cookie;
  console.log(x);
}

function setvarelephants(){
  document.cookie = "causename = 'elephants'";
}

function setvarbreastcancer(){
  document.cookie = "causename = 'breastcancer'"
}

function setvardeforest(){
  document.cookie = "causename = 'deforest'"
}
