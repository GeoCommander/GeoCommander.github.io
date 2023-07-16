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
  
});

// THIS PART OF THE CODE PRE-RENDERS images// Load all images at the start