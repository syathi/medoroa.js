var style = document.createElement("style");
style.type = "text/css";
document.getElementsByTagName("head").item(0).appendChild(style);
css = document.styleSheets.item(0);

var idx = document.styleSheets[0].cssRules.length
css.insertRule("*{display: none;}");