const noteForm = document.querySelector('[name = "note-form"]');
const note = document.querySelector('[name="note-input"]');
const noteContainer = document.querySelector('.note-container');
const noteTitle = document.querySelector('[name="note-title"]');

//Array that stores the notes we create.
let notes = [];

//function that adds our notes to the array.
function addNote(){
    newNote = {html: `<div class="card bg-dark-subtle w-15" style="width: 18rem;>"
                        <div class= "card-body">
                        <h3 class="card-title">${noteTitle.value}</h3>
                        <p class="card-text">${note.value}</p>
                        </div>
                       </div>`}

                       notes.push(newNote);
                       console.log('adding a note to the Array');
} 


function displayNote(){
    noteContainer.innerHTML="";
    notes.forEach((noteObject) => {
        const myFragment = document.createRange().createContextualFragment(noteObject.html);
        noteContainer.appendChild(myFragment);
    });
}

noteForm.addEventListener('submit',function(event){
    event.preventDefault();
    addNote();
    //this custom event will trigger the functions we need.
    noteContainer.dispatchEvent(new CustomEvent('notesUpdated'));
})

function mirrorToLocalStorage(){
    console.log('saving to LS');
    localStorage.setItem('notes',JSON.stringify(notes));
}

function restoreFromLocalStorage(){
    console.log('Restoring from LS');
    //Pull notes from LS
    const lsNotes = JSON.parse(localStorage.getItem('notes'));
    if (lsNotes > 0){
        notes = lsNotes; //Replace the existing notes with new ones from LS.
        noteContainer.dispatchEvent(new CustomEvent('notesUpdated'));
    }
}


noteContainer.addEventListener('notesUpdated', displayNote);
noteContainer.addEventListener('notesUpdated', mirrorToLocalStorage);

restoreFromLocalStorage();
