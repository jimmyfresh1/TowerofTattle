function createButton (buttonClass, buttonImageSource) {
    console.log("I'm here!")
    let addButton = document.createElement('button');
    addButton.className= buttonClass;
    let addIcon = document.createElement('img');
    addIcon.src = buttonImageSource;
    addButton.appendChild(addIcon);
    return addButton;
    
}

const buttons = document.querySelectorAll ('button');
buttons.forEach(button => {
    button.addEventListener('click', function (){
        buttonPress(button)
    })
})


function buttonPress (button){
    if (button.classList.contains('add-button'))
    {
        console.log("I'm here! Super here!")
        let lineContainer = createLineType ()
        button.parentNode.insertBefore(lineContainer, button);
    }

    else if (button.classList.contains('swing-button'))
    { console.log("Hold me!")}
}

const pTags = document.querySelectorAll('#main-text p');
pTags.forEach (notebookLine => {
    notebookLine.appendChild(createButton('add-button', './images/add.png'));
});


function createLineType (){
    let lineStyleContainer = document.createElement('div');
    lineStyleContainer.className='line-style-container';
    lineStyleContainer.appendChild(createButton ('swing-button', './images/swingLast.png'));
    lineStyleContainer.appendChild(createButton ('beat-button', './images/beat-take3.png'));
    lineStyleContainer.appendChild(createButton ('admonition-button', './images/admonition-take3.png'));
    return lineStyleContainer;
}

function beatType () {
    let beatOptionsContainer = document.createElement('div');
    beatOptionsContainer.className='beat-options-container';
    beatOptionsContainer.appendChild(createButton ('beat1', './images/eighth.png'));
    beatOptionsContainer.appendChild(createButton ('beat2', './images/quarter-beat.png'));
    beatOptionsContainer.appendChild(createButton ('beat3', './images/half-beat.png'));
    beatOptionsContainer.appendChild(createButton ('rest1', './images/quarter-rest.png'));
    beatOptionsContainer.appendChild(createButton ('rest2', './images/half-rest.png'));
}


function createLine (lineClass){
    let newLine = document.createElement('p');
    let newSpan= document.createElement('span');
    newSpan.setAttribute ('contenteditable', 'true');
    newSpan.textContent = 'Click to Edit';
    newLine.className = lineClass;
    newLine.appendChild(newSpan);
    button.parentNode.insertAdjacentElement('afterend', newLine);
    newLine.appendChild(createButton());
    lineContainer.remove();
}



//defunct 

// buttons.addEventListener('click', () => console.log("I'm here! Super here!"))
// buttons.onclick = 

// buttonPress.forEach (button =>{
//     button.onclick=(console.log('I am still here! Really!'))
//         if (button.className == 'add-button'){
//             button.onclick=(console.log('I am still here!'));
//             button.onclick = (createLineType ());
//     }
// })
// function pressAdd (buttonPress) {
//     if (button.className == 'add-button'){
//         button.onclick(console.log('I am still here! Really!'));
//         button.onclick (createLineType ());
//         addButton.parentNode.insertBefore(lineStyleContainer, addButton);
//     }
// }

//