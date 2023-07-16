document.querySelectorAll('a').forEach((a) => {
  a.addEventListener('mouseover', function(e) {
    const imageUrl = this.getAttribute('data-preview');
    if(imageUrl) {
      // load the corresponding image into the preview element
      document.getElementById('preview').innerHTML = `<img src="${imageUrl}" alt="Preview">`;
      // show the preview box
      document.getElementById('preview').style.display = 'block';
    }
  });

  a.addEventListener('mouseout', function(e) {
    // hide the preview box
    document.getElementById('preview').style.display = 'none';
    // remove the preview when the mouse leaves the link
    document.getElementById('preview').innerHTML = '';
  });
  function filterTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("skillsTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];  //Changed index from 0 to 1
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
});