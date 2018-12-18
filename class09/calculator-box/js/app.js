// 1. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, let count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - .html()
// - .css()

let center = 0;

$("#a10").click(function() {
  const ten = center + 10;
  center = ten;
  $("#out").html(center);
});

$("#a20").click(function() {
  const twenty = center + 20;
  center = twenty;
  $("#out").html(center);
});

$("#a30").click(function() {
  const thirty = center + 30;
  center = thirty;
  $("#out").html(center);
});

$("#n10").click(function() {
  const negten = center - 10;
  center = negten;
  $("#out").html(center);
});
$("#n20").click(function() {
  const negtwenty = center - 20;
  center = negtwenty;
  $("#out").html(center);
});

$("#n30").click(function() {
  const negthirty = center - 30;
  center = negthirty;
  $("#out").html(center);
});

$("#red").click(function() {
  $("#out").css("background", "red");
});

$("#blue").click(function() {
  $("#out").css("background", "blue");
});

$("#out").click(function() {
  $("#out").css("background", "white");
  center = 0;
  $("#out").html(center);
});
