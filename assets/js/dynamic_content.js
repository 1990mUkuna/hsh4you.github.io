var filenameprefixes = ['Jugendlicher', 'Eltern', 'Neu_in_Hsh', 'Senior'];
var imagenameprefixes = ['Jugendlicher', 'Eltern', 'Neu_in_Hsh', 'Senior'];
var htmlcodecached = [];
var imagespreloaded = [];

function backupDefaultList() {
  var markdowncode = document.getElementById("list_").innerHTML;
  htmlcodecached["Startauswahl.md"] = marked(markdowncode); 
  document.getElementById("list_").innerHTML = htmlcodecached["Startauswahl.md"];
  document.getElementById("list_").style.visibility = "visible";
}

// source 1: https://www.w3schools.com/xml/tryit.asp?filename=tryajax_first
// source 2: https://github.com/markedjs/marked
function preloadMarkdownFile(markdownfilename) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var markdowncode = this.responseText;
      htmlcode = marked(markdowncode);
      htmlcode = htmlcode.replace(/\.md/g, '.html'); // fix links
      htmlcodecached[markdownfilename] = htmlcode;
    }
  };
  xhttp.open("GET", markdownfilename, true);
  xhttp.send();
}

function preloadLists() {
  for (let filenameprefix of filenameprefixes) {
    var markdownfilename = filenameprefix + '.md';
    preloadMarkdownFile(markdownfilename);
  }
}

function preloadImage(imagenameprefix) {
  var imagename_default = imagenameprefix + '.png';
  var imagename_selected = imagenameprefix + '_selected.png';
  var image_default = document.createElement('img');
  var image_selected = document.createElement('img');
  var imagepath = "images/startpage/";
  image_default.src = imagepath + imagename_default;
  image_selected.src = imagepath + imagename_selected;
  imagespreloaded[imagename_default] = image_default;
  imagespreloaded[imagename_selected] = image_selected;
}

function preloadImages() {
  for (let imagenameprefix of imagenameprefixes) {
    preloadImage(imagenameprefix);
  }
}

function updateList(userselection = "Startauswahl") {
  var markdownfilename =  userselection + ".md";
  var htmlcode = htmlcodecached[markdownfilename];
  document.getElementById("list_").innerHTML = htmlcode;
}

function updateSelection(elem) {
  var userselection = elem.id;

  for (let imagenameprefix of imagenameprefixes) {
    if (userselection.indexOf(imagenameprefix) == -1) {
      document.getElementById(imagenameprefix).src = "images/startpage/" + imagenameprefix + ".png";
      document.getElementById(imagenameprefix).value = "0";
    } 
    else {
      if (elem.value == null || elem.value.valueOf() == "0".valueOf()) {
        elem.src = "images/startpage/" + imagenameprefix + "_selected.png";
        elem.value = "1";
      } 
      else {
        elem.src = "images/startpage/" + imagenameprefix + ".png";
        elem.value = "0";
        userselection = "Startauswahl";
      }
    }
  }
  updateList(userselection);
}

function updateImages(selectedimageelem) {
  var selectedimagenameprefix = selectedimageelem.id;
  for (let loopimagenameprefix of imagenameprefixes) {
    if (selectedimagenameprefix.indexOf(loopimagenameprefix) == -1) {
      document.getElementById(loopimagenameprefix).src = "images/startpage/" + loopimagenameprefix + ".png";
      document.getElementById(loopimagenameprefix).value = "0";
    } 
    else {
      if (selectedimageelem.value == null || selectedimageelem.value.valueOf() == "0".valueOf()) {
        selectedimageelem.src = "images/startpage/" + selectedimagenameprefix + "_selected.png";
        selectedimageelem.value = "1";
      } 
      else {
        selectedimageelem.src = "images/startpage/" + selectedimagenameprefix + ".png";
        selectedimageelem.value = "0";
      }
    }
  }
}

function showList(selectedimageelem) {
  updateImages(selectedimageelem);
  var selectedimagenameprefix = selectedimageelem.id;
  var selectedlistname = 'liste' + selectedimagenameprefix;
  // hide all non selected lists
  var selectablelistnames = ['listeJugendlicher', 'listeEltern', 'listeNeu_in_Hsh', 'listeSenior'];
  for (let looplistname of selectablelistnames) {
    if (selectedlistname.indexOf(looplistname) == -1) {
      var looplistelem = document.getElementById(looplistname);
      if (looplistelem != null) {
        looplistelem.style.display = "none";
      }
    }
  }
  // show selected list if newly selected else load default list
  var selectedlistelem = document.getElementById(looplistname);
  if (selectedlistelem != null) {
    if (looplistelem.value == null || looplistelem.value.valueOf() == "0".valueOf()) {
      document.getElementById('listeKeineAngabe').style.display = "none";
      selectedimageelem.style.display = "block";
      selectedimageelem.value = "1";
    } 
    else {
      selectedimageelem.style.display = "none";
      selectedimageelem.value = "0";
      document.getElementById('listeKeineAngabe').style.display = "block";
    }
  }
}

function formatLists() {
  var listnames = ['listeKeineAngabe', 'listeJugendlicher', 'listeEltern', 'listeNeu_in_Hsh', 'listeSenior'];
  for (let listname of listnames) {
    var listelem = document.getElementById(listname);
    if (listelem != null) {
      var markdowncode = listelem.innerHTML;
      var htmlcode = marked(markdowncode);
      listelem.innerHTML = htmlcode;
    }
  }
}

function findAddress() {
  var address = '';
  var cells = document.getElementsByTagName("td");
  var i;
  for (i = 0; i < cells.length; i++) {
    cellcontent = cells[i].innerHTML;
    if (cellcontent.indexOf('Adresse') >= 0) {
      address = cells[i+1].innerHTML;
      break;
    }
  }
  return address;
};

// source: https://www.embedgooglemap.net/
function showMap(address = '') {
  if (address.length == 0) { address = findAddress(); }
  if (address.length == 0) { return };
  var zoomfactor = 14;
  var htmlcode = '';
  htmlcode += '\n<h2>Karte</h2>';
  htmlcode += '\n<iframe class="gmap_iframe" src="https://maps.google.com/maps';
  htmlcode += '?q=' + address;
  htmlcode += '&z=' + zoomfactor;
  htmlcode += '&output=embed" frameborder="0"></iframe>';
  document.getElementById('gmap').outerHTML = htmlcode;
};
