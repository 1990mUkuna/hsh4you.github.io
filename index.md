## Du bist

<script type="text/javascript"> window.onload = function() { document.title = "Hsh4You"; } </script>
<script type="text/javascript">
  var lastselectedlistname = '';
  const DEFAULTLISTNAME = 'listDefault';

  function updateLists(selectedlistelem) {
    var selectedlistname = selectedlistelem.id;
    var lastselectedlistelem = document.getElementById(lastselectedlistname);
    if (selectedlistname.valueOf() != lastselectedlistname.valueOf()) {
      lastselectedlistelem.style.display = "none";
      selectedlistelem.style.display = "block";
      lastselectedlistname = selectedlistname;
    }
    else {
      selectedlistelem.style.display = "none";
      var defaultlistelem = document.getElementById(DEFAULTLISTNAME);
      defaultlistelem.style.display = "block";
      lastselectedlistname = defaultlistelem.id;
    }
  }

  function showImage(imageelem) {
    imageelem.style.display = 'inline';
  }

  function hideImage(imageelem) {
    imageelem.style.display = 'none';
  }

  function updateImagesAndLists(clickedimageelem) {
    var clickedimagename = clickedimageelem.id;
    var defaultimagename = clickedimagename.replace('Clicked', 'Default')
    var defaultimageelem = document.getElementById(defaultimagename);
    var hasimagebeenclickedagain = (clickedimagename.indexOf('Clicked') > 0);
    if (hasimagebeenclickedagain) {
      hideImage(clickedimageelem);
      showImage(defaultimageelem);
    }
    else {
      hideImage(defaultimageelem);
      showImage(clickedimageelem);
    }
    var listtoshowname = clickedimagename.replace('img', 'list').replace('Default', '');
    var listtoshowelem = document.getElementById(listtoshowname);
    //updateLists(listtoshowelem);
  }  
</script>

<label class="userselectioncontainer">
  <img onclick="updateImagesAndLists(this)" id="imgJugendlicherDefault" src="images/startpage/Jugendlicher.png"><img onclick="updateImagesAndLists(this)" id="imgJugendlicherClicked" src="images/startpage/Jugendlicher_selected.png"><br>Jugendliche/r
</label>
<label class="userselectioncontainer">
  <img onclick="updateImagesAndLists(this)" id="imgElternDefault" src="images/startpage/Eltern.png"><img onclick="updateImagesAndLists(this)" id="imgElternClicked" src="images/startpage/Eltern_selected.png"><br>Mama/Papa
</label>
<label class="userselectioncontainer">
  <img onclick="updateImagesAndLists(this)" id="imgNeuDefault" src="images/startpage/Neu_in_Hsh.png"><img onclick="updateImagesAndLists(this)" id="imgNeuClicked" src="images/startpage/Neu_in_Hsh_selected.png"><br>Neu in Hsh
</label>
<label class="userselectioncontainer">
  <img onclick="updateImagesAndLists(this)" id="imgSeniorDefault" src="images/startpage/Senior.png"><img onclick="updateImagesAndLists(this)" id="imgSeniorClicked" src="images/startpage/Senior_selected.png"><br>Senior/in
</label>

## Du suchst
<div id="listDefault">
- [Jugendklubs](Jugendklubs/Jugendklubs.md)
- [Kitas](Kitas/Kitas.md)
- [Schulen](Schulen/Schulen.md)
- [Veranstaltungen](calendar/calendar.html)
- [Beratung](Beratung/Beratung.md)
- [Freizeit](Freizeit/Freizeit.md)
- Familienzentren
</div>
<div id="listJugendlicher">
- [Jugendklubs](Jugendklubs/Jugendklubs.md)
- [Veranstaltungen](calendar/calendar.html)
- [Beratung](Beratung/Beratung_Jugendlicher.md)
- Aktivitäten
</div>
<div id="listEltern">
- [Kitas](Kitas/Kitas.md)
- [Schulen](Schulen/Schulen.md)
- [Jugendklubs](Jugendklubs/Jugendklubs.md)
- [Veranstaltungen](calendar/calendar.html)
- Beratung
- Familienzentren
- Jugendamt
</div>
<div id="listNeu">
- [Kitas](Kitas/Kitas.md)
- [Schulen](Schulen/Schulen.md)
- [Veranstaltungen](calendar/calendar.html)
- Beratung
- Familienzentren
- Jugendamt
- Bürgeramt
- Begegnungen
</div>
<div id="listSenior">
- [Veranstaltungen](calendar/calendar.html)
- Beratung
- Ehrenamt
</div>

<script type="text/javascript">
  function formatLists() {
    // replace all lists markdown code with html code
    var listnames = ['listDefault', 'listJugendlicher', 'listEltern', 'listNeu', 'listSenior'];
    for (let listname of listnames) {
      var listelem = document.getElementById(listname);
      if (listelem != null) {
        var markdowncode = listelem.innerHTML;
        var htmlcode = marked(markdowncode);
        listelem.innerHTML = htmlcode;
      }
    }
    // show default list
    var defaultlistelem = document.getElementById(DEFAULTLISTNAME);
    defaultlistelem.style.display = "block";
  }

  // format lists after page has loaded
  document.addEventListener("DOMContentLoaded", function(event) { 
    formatLists();
  });
</script>
