function openmachine(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("machine");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  if (cityName === 'London') {
    document.getElementById('firstParagraph').style.display = "none";
  }
  evt.currentTarget.className += " w3-red";
}