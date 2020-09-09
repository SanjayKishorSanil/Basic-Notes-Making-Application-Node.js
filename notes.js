
const fs=require('fs')
const { default: chalk } = require('chalk')


const addNote =(title,body)=>{
    const notes=loadNotes()
    //const duplicateNotes=notes.filter((note)=> note.title===title) 
    const duplicateNotes=notes.find((note)=>note.title==title)
    if(!duplicateNotes){
        notes.push({
            title: title,
            body:body
        })
        console.log(chalk.bgGreen("New Note Added !"))
        saveNotes(notes)
    
    //console.log(notes)
    }else{
        console.log(chalk.bgRed("NOTES TITLE TAKEN!"))
    }
    
}

const removeNotes=(title)=>{
   const notes=loadNotes();
   const unmatchedNotes=notes.filter((note) => note.title!==title)
   if(notes.length>unmatchedNotes.length ){
    
    saveNotes(unmatchedNotes)
    console.log(chalk.bgGreen("Note removed!"))
   }else{
       console.log(chalk.bgRed("No Note found !"))
   }
  

    // console.log(title)
}

const listNotes=()=>{
    const notes=loadNotes();
    console.log(chalk.bgMagenta('YOUR NOTES'))
    notes.forEach((note) => {
        console.log(chalk.blue(note.title))
    });

}
const readNote=(title)=>{
    const notes=loadNotes()
    const note=notes.find((note)=> note.title===title)
    if(note){
        console.log(chalk.bgGreen(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.bgRed("No Note Found"))
    }
    // notes.forEach((note)=>{
    //     if(note.title===title){
    //         console.log(chalk.blueBright(note.title))
    //         console.log(note.body)
    //     }
    //     else{
    //         console.log(chalk.bgRed("No Note Found !"))
    //     }

    // })
}
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}



const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []

    }

}
module.exports={
    addNote :addNote,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
}