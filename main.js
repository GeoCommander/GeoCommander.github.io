document.querySelectorAll('a').forEach((a) => {
    a.addEventListener('mouseover', function(e) {
      // load the corresponding image into the preview element
      document.getElementById('preview').innerHTML = `<img src="GitHub-Logo.png" alt="GitHub Logo">`;
      // show the preview box
      document.getElementById('preview').style.display = 'block';
    });
  
    a.addEventListener('mouseout', function(e) {
      // hide the preview box
      document.getElementById('preview').style.display = 'none';
      // remove the preview when the mouse leaves the link
      document.getElementById('preview').innerHTML = '';
    });
  });  