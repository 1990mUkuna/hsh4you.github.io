## Du bist

<label class="container">
  <input type="image" onclick="toggleImage(this)" value=0 class="toggle" id="Jugendlicher" src="images/Jugendlicher.png"><br>Jugendliche/r
</label>
<label class="container">
  <input type="image" onclick="toggleImage(this)" value=0 class="toggle" id="Eltern" src="images/Eltern.png"><br>Mama/Papa
</label>
<label class="container">
  <input type="image" onclick="toggleImage(this)" value=0 class="toggle" id="Neu_in_Hsh" src="images/Neu_in_Hsh.png"><br>Neu in Hsh
</label>
<label class="container">
  <input type="image" onclick="toggleImage(this)" value=0 class="toggle" id="Senior" src="images/Senior.png"><br>Senior/in
</label>
<br>
<div id="list_">
</div>

<script type="text/javascript">
  window.onload = function() { 
  	document.title = "Hsh4You";
    cacheLists();
    preloadImages();
    updateList3();
  }
</script>
