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

// THIS PART OF THE CODE PRE-RENDERS images

window.addEventListener('load', function() {
  // Find all of the links
  const links = document.querySelectorAll('a');

  links.forEach((a) => {
    // Get the URL of the image for this link
    const imageUrl = a.getAttribute('data-preview');

    // If this link has an associated image...
    if(imageUrl) {
      // ... create a new image element
      const img = document.createElement('img');

      // Set the source of the image element to the URL
      img.src = imageUrl;

      // Hide the image
      img.style.display = 'none';

      // Append the image element to the body
      // (this will start loading the image in the background)
      document.body.appendChild(img);

      // When the link is hovered over...
      a.addEventListener('mouseover', function(e) {
        // ... replace the image in the preview element with the preloaded image
        document.getElementById('preview').innerHTML = '';
        document.getElementById('preview').appendChild(img);

        // Show the preview box
        document.getElementById('preview').style.display = 'block';
      });

      // When the mouse leaves the link...
      a.addEventListener('mouseout', function(e) {
        // ... hide the preview box
        document.getElementById('preview').style.display = 'none';
      });
    }
  });
});
