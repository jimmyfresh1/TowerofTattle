// Line 2 grabs every p tag in #main-text and assigns it to a constant titled paragraphs
const paragraphs = document.querySelectorAll('#main-text p');
// Here, forEach refers to "each paragraph." noteBookLine is a variable or const, idk which, within the scope of the function
//apparently paragraphs here is referred to as a "nodeList." the nodeList (all the pghs that satisfy the conditions) is passed into noteBookLine
paragraphs.forEach (notebookLine => {
    // Here, addButton and addIcon are defined for the scope of the function. it's just a button and a picture.
    let addButton=document.createElement('button');
    addButton.className='add-button'
    let addIcon= document.createElement('img'); 
    addIcon.src='./images/add.png';
    // the icon is appended to the button, and the button is appended to notebookLine, which is the group of all ps in main-text
    addButton.appendChild(addIcon);
    notebookLine.appendChild(addButton)
});


// This code only makes each button add a naked unclasses p 
// this gets the nodelist of every + button in a p tag, and passes them into the parameter addButton
document.querySelectorAll('p .add-button').forEach(addButton => {
    // the onclick event means that if any of these buttons are pressed the function happens 
    addButton.onclick = 
    function () {
     // function () {console.log("Yes, it blends!")} test
     // first the function makes a new p tag, with content editable set to true, and with the inner text Click to Edit
        let newLine = document.createElement('p');
        newLine.setAttribute('contenteditable', 'true');
        newLine.textContent = 'Click to Edit';
        // this makes sure that the new line is inserted right after the parentNode of our button, which in this case is the p tag 
        addButton.parentNode.insertAdjacentElement('afterend', newLine)
        let addNewButton = document.createElement('button')
        addNewButton.className ='add-button'
        let addIcon= document.createElement('img'); 
        addIcon.src='./images/add.png';
        addNewButton.appendChild(addIcon);
        newLine.appendChild(addNewButton);
} 
});


// document.querySelectorAll('p .add-button').forEach(addButton => {
//     addButton.onclick = 
//     function () {
//         addButton.style.display ='none';
//         let lineStyleContainer = document.createElement('div');
//         let addSwingButton = document.createElement('button');
//         addSwingButton.className='swing-button';
//         let addBeatButton = document.createElement('button');
//         addBeatButton.className='beat-button'
//         let addAdmonitionButton = document.createElement('button');
//         addAdmonitionButton.className='admonition-button'
//         let addSwingIcon = document.createElement('img');
//         addSwingIcon.src='./images/swing.png';
//         let addBeatIcon = document.createElement('img');
//         addBeatIcon.src='./images/beat.png';
//         let addAdmonitionIcon = document.createElement('img');
//         addAdmonitionIcon.src='./images/admonition.png';

        // }
        // const classes = ['swingButton', 'beatButton', 'admonitionButton']
        // class.forEach(classType =>
        //     let newButton= document.createElement())
    // });