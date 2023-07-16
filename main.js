const links = document.querySelectorAll('a');
links.forEach((link) => {
    link.addEventListener('mouseover', (event) => {
        const targetURL = event.target.href;
        const previewDiv = document.getElementById('preview');
        previewDiv.innerHTML = `<iframe src="${targetURL}" sandbox="allow-same-origin" style="width: 100%; height: 100%; border: none;"></iframe>`;
    });
    link.addEventListener('mouseout', (event) => {
        const previewDiv = document.getElementById('preview');
        previewDiv.innerHTML = '';
    });
});