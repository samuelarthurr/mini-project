const toggle = document.getElementById("darkMode");
toggle.onclick = function () {
  document.body.classlist.toggle("light");
};
