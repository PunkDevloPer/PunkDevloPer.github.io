
function openmachine(evt, machine) {
    var i, x, tablinks;
    x = document.getElementsByClassName("machine");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("w3-red");
    }
    document.getElementById(machine).classList.add("active");
    evt.currentTarget.classList.add("w3-red");
}
