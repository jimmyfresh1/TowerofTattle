
// This is the "simple" version of the button. We'll keep this around for people who don't want to mess with different beat types. And leave it as an option somewhere. 
// function createAddButton () {
//     let addButton = document.createElement('button');
//     addButton.className='add-button';
//     let addIcon = document.createElement('img');
//     addIcon.src='./images/add.png';
//     addButton.appendChild(addIcon);
//     addButton.onclick = function () {
//         let newLine = document.createElement('p');
//         newLine.setAttribute('contenteditable', 'true');
//         newLine.textContent = 'Click to Edit';
//         addButton.parentNode.insertAdjacentElement('afterend', newLine);
//         newLine.appendChild(createAddButton());
//     }
//     return addButton;
// script.js

// This is the complicated version which lets you make the different beats. 
function createAddButton () {
        console.log("I'm here!")
        let addButton = document.createElement('button');
        addButton.className='add-button';
        let addIcon = document.createElement('img');
        addIcon.src='./images/add.png';
        addButton.appendChild(addIcon);
        addButton.onclick = function () {
        // removing the add button
                addButton.style.display ='none';
        //declaring the div containing the three new buttons. lineStyleContainer contains our three buttons, addSwingButton, addBeatButton, and addAdmonitionButton
                let lineStyleContainer = document.createElement('div');
                lineStyleContainer.className='line-style-container';
        //creating the button, giving it a class. do this three times. first, swing
                let addSwingButton = document.createElement('button');
                addSwingButton.className='swing-button';
        //creating the button, giving it a class. do this three times. then beat
                let addBeatButton = document.createElement('button');
                addBeatButton.className='beat-button'
        //creating the button, giving it a class. do this three times. then admonition
                let addAdmonitionButton = document.createElement('button');
                addAdmonitionButton.className='admonition-button'
        //creating the icon, and sourcing it three times. swing then beat then adminition.
                let addSwingIcon = document.createElement('img');
                addSwingIcon.src='./images/swingLast.png';
                let addBeatIcon = document.createElement('img');
                addBeatIcon.src='./images/beat-take3.png';
                let addAdmonitionIcon = document.createElement('img');
                addAdmonitionIcon.src='./images/admonition-take3.png';
        //appending all three icons to all three buttons
                addSwingButton.appendChild(addSwingIcon);
                addBeatButton.appendChild(addBeatIcon);
                addAdmonitionButton.appendChild(addAdmonitionIcon);
                lineStyleContainer.appendChild(addSwingButton);
                lineStyleContainer.appendChild(addBeatButton);
                lineStyleContainer.appendChild(addAdmonitionButton);
                addButton.parentNode.insertBefore(lineStyleContainer, addButton);
// swingButton onclick, makes a Swing
        addSwingButton.onclick = function () { 
                let newLine = document.createElement('p');
                let newSpan= document.createElement('span');
                newSpan.setAttribute ('contenteditable', 'true');
                newSpan.textContent = 'Click to Edit';
                newLine.className = 'swing';
                newLine.appendChild(newSpan);
                addButton.parentNode.insertAdjacentElement('afterend', newLine);
                newLine.appendChild(createAddButton());
                lineStyleContainer.remove();
        }
        // BeatButton onclick, makes 5 more options 
        addBeatButton.onclick = function () { 
                
                let beatOptionsContainer = document.createElement('div');
                beatOptionsContainer.className='beat-options-container';
                // 
                let eighthBeatButton = document.createElement('button');
                eighthBeatButton.className='beat-options-button';
                let eighthBeatButtonIcon = document.createElement('img');
                eighthBeatButtonIcon.src='./images/eighth.png'
                eighthBeatButton.appendChild(eighthBeatButtonIcon);
                // 
                let quarterBeatButton = document.createElement('button');
                quarterBeatButton.className='beat-options-button';
                let quarterBeatButtonIcon = document.createElement('img');
                quarterBeatButtonIcon.src='./images/quarter-beat.png'
                quarterBeatButton.appendChild(quarterBeatButtonIcon);
                // 
                let halfBeatButton = document.createElement('button');
                halfBeatButton.className='beat-options-button';
                let halfBeatButtonIcon = document.createElement('img');
                halfBeatButtonIcon.src='./images/half-beat.png'
                halfBeatButton.appendChild(halfBeatButtonIcon);
                // 
                let quarterRestButton = document.createElement('button');
                quarterRestButton.className='beat-options-button';
                let quarterRestButtonIcon = document.createElement('img');
                quarterRestButtonIcon.src='./images/quarter-rest.png'
                quarterRestButton.appendChild(quarterRestButtonIcon);
                // 
                let halfRestButton = document.createElement('button');
                halfRestButton.className='beat-options-button';
                let halfRestButtonIcon = document.createElement('img');
                halfRestButtonIcon.src='./images/half-rest.png'
                halfRestButton.appendChild(halfRestButtonIcon);
                // 
                beatOptionsContainer.appendChild(eighthBeatButton);
                beatOptionsContainer.appendChild(quarterBeatButton);
                beatOptionsContainer.appendChild(halfBeatButton);
                beatOptionsContainer.appendChild(quarterRestButton);
                beatOptionsContainer.appendChild(halfRestButton);
                addButton.parentNode.insertBefore(beatOptionsContainer, lineStyleContainer);

//Pressing BeatButton first removes the lineStyleContainer
                lineStyleContainer.remove();

//Pressing BeatButton creates BeatOptionsContainer, which has five buttons. 
                eighthBeatButton.onclick = function  () { 
                        let newLine = document.createElement('p');
                        let newSpan= document.createElement('span');
                        newSpan.setAttribute ('contenteditable', 'true');
                        newSpan.textContent = 'Click to Edit?';
                        newLine.appendChild(newSpan);
                        newLine.className = 'beat1'
                        addButton.parentNode.insertAdjacentElement('afterend', newLine);
                        newLine.appendChild(createAddButton());
                        beatOptionsContainer.remove();
        }

                quarterBeatButton.onclick= function () { 
                        let newLine = document.createElement('p');
                        let newSpan= document.createElement('span');
                        newSpan.setAttribute ('contenteditable', 'true');
                        newSpan.textContent = 'Click to Edit';
                        newLine.appendChild(newSpan);
                        newLine.className = 'beat2'
                        addButton.parentNode.insertAdjacentElement('afterend', newLine);
                        newLine.appendChild(createAddButton());
                        beatOptionsContainer.remove();
        }

                halfBeatButton.onclick =function  () { 
                        let newLine = document.createElement('p');
                        let newSpan= document.createElement('span');
                        newSpan.setAttribute ('contenteditable', 'true');
                        newSpan.textContent = 'Click to Edit';
                        newLine.appendChild(newSpan);
                        newLine.className = 'beat3'
                        addButton.parentNode.insertAdjacentElement('afterend', newLine);
                        newLine.appendChild(createAddButton());
                        beatOptionsContainer.remove();
        }

                quarterRestButton.onclick= function  () { 
                        let newLine = document.createElement('p');
                        let newSpan= document.createElement('span');
                        newSpan.setAttribute ('contenteditable', 'true');
                        newSpan.textContent = 'Click to Edit!';
                        newLine.appendChild(newSpan);
                        newLine.className = 'rest1'
                        addButton.parentNode.insertAdjacentElement('afterend', newLine);
                        newLine.appendChild(createAddButton());
                        beatOptionsContainer.remove();
        }

                halfRestButton.onclick =function  () { 
                        let newLine = document.createElement('p');
                        let newSpan= document.createElement('span');
                        newSpan.setAttribute ('contenteditable', 'true');
                        newSpan.textContent = 'Click to Edit';
                        newLine.appendChild(newSpan);
                        newLine.className = 'rest2'
                        addButton.parentNode.insertAdjacentElement('afterend', newLine);
                        newLine.appendChild(createAddButton());
                        beatOptionsContainer.remove();
        }
        }

// admonitionButton onclick, makes an admonition
        addAdmonitionButton.onclick = function  () { 
                let newLine = document.createElement('p');
                let newSpan= document.createElement('span');
                newSpan.setAttribute ('contenteditable', 'true');
                newSpan.textContent = 'Click to Edit';
                newLine.appendChild(newSpan);
                newLine.className = 'admonition'
                addButton.parentNode.insertAdjacentElement('afterend', newLine);
                newLine.appendChild(createAddButton());
                lineStyleContainer.remove();
        }
        addButton.style.display = '';
        return addButton;
        }
        return addButton;
}

const paragraphs = document.querySelectorAll('#main-text p');
paragraphs.forEach (notebookLine => {
        notebookLine.appendChild(createAddButton());
});


document.getElementById('print-pdf').addEventListener('click', () => {
        window.print();
        });
