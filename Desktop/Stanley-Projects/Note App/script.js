
// Model Section

const notes = getNotes();
// const notes = JSON.parse(localStorage.getItem("note-app") || "[]");
    
// Create a Note
    
function createNote(id, content) {
        
        
    notes.push({
            
        id: Math.floor(Math.random()*100000),
        content: "" 
    
    });

    saveNotes(notes);

    render();
}
    

    
function deleteNote(id, element){
    const notes = getNotes().filter((note) => note.id != id);
    saveNotes(notes);
    appE.removeChild(element);

    saveNotes(notes);

    render();
};

function updateNote(id, content){
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNotes(notes);

    saveNotes(notes);

    render();
}




//   Controller Section

function addNote() {
    
    const btnE = document.getElementById("btn");
    
    const appE = document.getElementById("app");


    const noteE = createNoteE(note.id, note.content);
    appE.insertBefore(noteE, btnE);
    
        
    //  Save notes inside the local storage

    saveNotes(notes);
};

function saveNotes(notes){
    localStorage.setItem("note-app", JSON.stringify(notes));
};

function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]")
}




        // View Section

    function render() {
        getNotes().forEach((note)=>{
            const noteE = createNoteE(note.id, note.content);
            appE.insertBefore(noteE, btnE);
        })
        


        function createNoteE(id, content) {
            const element = document.createElement("textarea");
            element.innerText = id + ' ' + content;
            element.classList.add("note");
            element.placeholder = "Empty Note";
            // element.value = content;
        
            element.addEventListener("dblclick", ()=>{
                const warning = confirm("Do you want to delete this note?");
                if (warning) {
                    deleteNote(id, element);
                }
            });
        
            element.addEventListener("input", ()=>{
                updateNote( id, element.value);
            
            });
        
            return element;

            btnE.addEventListener("click", addNote);
       
        };
    }
        