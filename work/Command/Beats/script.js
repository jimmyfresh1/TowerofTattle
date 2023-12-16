const paragraphs = document.querySelectorAll('#main-text p').forEach (notebookLine => {
    let addButton=document.createElement('button');
    addButton.className='add-button'
    let addIcon= document.createElement('img'); 
    addIcon.src='./images/add.png';
    addButton.appendChild(addIcon);
    notebookLine.appendChild(addButton)
});

document.querySelectorAll('p .add-button').forEach(addButton => {
    addButton.onclick = 
    // function () {console.log("Yes, it blends!")} test
    function () {
    let newLine = document.createElement('p');
    newLine.setAttribute('contenteditable', 'true');
    newLine.textContent = 'Click to Edit';
    addButton.parentNode.insertAdjacentElement('afterend', newLine)
} 
});