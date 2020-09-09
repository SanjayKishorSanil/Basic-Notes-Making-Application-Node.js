//const fs=require('fs')
//fs.writeFileSync('notes.txt','MY NAME IS SANJAY')

//fs.appendFileSync('notes.txt',' Am working in JEUGO STUDIOS')
//const name=require('./utils.js')

//console.log(name)
// const add=require('./utils.js')
// const sum=add(4,3)
// console.log(sum)
 //const gn=require('./notes.js')
 
//  const msg=getNotes()

//  console.log(msg)
//  //console.log(validator.isURL('https://google.com'))
// console.log(chalk.white.bgBlue.bold.inverse("success"))
//  console.log(process.argv)
// const command= process.argv[2];
// if(command==='add'){
//     console.log('Adding Nodes')
// }
// else if(command==='remove'){
//     console.log('Removing Nodes')
// }
// const validator=require('validator')
const notes = require('./notes.js')

const chalk=require('chalk')
const yargs=require('yargs')
//customize yargs version
yargs.version('1.1.0')
//add , rermove,read,list notes
// add command

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Description',
            demandOption:true,
            type:'string'

        }
    },
    handler:function(argv){
        //console.log('Title: '+argv.title)
       // console.log('Body: '+argv.body)
       notes.addNote(argv.title,argv.body)
    }
})
// remove command

yargs.command({
    command:'remove',
    describe:' Remove Note!',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
       // console.log('removing a Note!!')
       notes.removeNotes(argv.title)
    }
})
// read command
yargs.command({
    command:'read',
    describe:'Reading a Note',
    builder:{
        title:{
            describe:'Read Note',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
       // console.log('Reading a Note!')
       notes.readNote(argv.title)
    }
})
// list Command
yargs.command({
    command:'list',
    describe:'Notes Listing',
    handler: function(){
        //console.log('Notes Listing')
        notes.listNotes();
    }
})
yargs.parse()
//console.log(process.argv)
//console.log(yargs.argv)
