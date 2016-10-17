window.onload = function() {
  var qs = (function(a) {
    if (a == "") return {"n" : 0};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  })(window.location.search.substr(1).split('&'));
  if (!("n" in qs)){
    calculate(qs["gender"], qs["weight"], qs["height"], qs["age"]);
  }
}

function calculate(gender, weight, height, age) {
  if (gender === "male") {
    var para = document.createElement("P");
    var calories = document.createTextNode((10 * parseInt(weight)) + (6.25 * parseInt(height)) - (5 * parseInt(age)) + 5);
    para.appendChild(calories);
    document.getElementById("result").appendChild(para);
  } else{
    var para = document.createElement("P");
    var calories = document.createTextNode((10 * parseInt(weight)) + (6.25 * parseInt(height)) - (5 * parseInt(age)) - 161);
    para.appendChild(calories);
    document.getElementById("result").appendChild(para);
  }
}
