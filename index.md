## Du bist

<label class="container">
  <input type="radio" name="radio" onclick="updateList()" value="Jugendlicher">
  <span class="checkmark"></span>
  Jugendlicher
</label>
<label class="container">
  <input type="radio" name="radio" onclick="updateList()" value="Eltern">
  <span class="checkmark"></span>
  Elternteil
</label>
<label class="container">
  <input type="radio" name="radio" onclick="updateList()" value="Neu_in_Hsh">
  <span class="checkmark"></span>
  Neu in Hsh
</label>
<label class="container">
  <input type="radio" name="radio" onclick="updateList()" value="Senior">
  <span class="checkmark"></span>
  Senior
</label>
<label class="container">
  <input type="radio" name="radio" onclick="updateList()" value="Startauswahl" checked="checked">
  <span class="checkmark"></span>
  Weder noch
</label>
<br>
<div id="list_">
</div>

<script type="text/javascript">
  window.onload = function() { 
    windowOnLoad();
  }
</script>
