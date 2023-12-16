const paragraphs = document.querySelectorAll('#main-text p');
paragraphs.forEach((p) => {
    p.addEventListener('mouseover', function() {p.style.cursor= 'url(./images/pencil_edit.png), auto';})
})