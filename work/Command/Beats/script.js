function createAddButton () {
    let addButton = document.createElement('button');
    addButton.className='add-button';
    let addIcon = document.createElement('img');
    addIcon.src='./images/add.png';
    addButton.appendChild(addIcon);
    addButton.onclick = function () {
        let newLine = document.createElement('p');
        newLine.setAttribute('contenteditable', 'true');
        newLine.textContent = 'Click to Edit';
        addButton.parentNode.insertAdjacentElement('afterend', newLine);
        newLine.appendChild(createAddButton());
    }
    return addButton;
}


const paragraphs = document.querySelectorAll('#main-text p');
paragraphs.forEach (notebookLine => {
    notebookLine.appendChild(createAddButton());
});

