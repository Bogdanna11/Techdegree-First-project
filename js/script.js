/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

let quotes = [
{
 quote:"'One day you will wake up & there won’t be any more time to do the things you’ve always wanted.Do it now.'",
 name: 'Paulo Coelo',
 year: 2014
 },
 {
  quote:"'It takes half your life before you discover that life is a do it yourself project'",
  name :'Napolen Hill',
  year: 1845
  },
  {
   quote:"'Be humble,be hungry and always be the hardest worker in the room'",
   name: 'Dwayne Johnson ',
   year: 2022
   },
   {
    quote:"'If you don’t get out of the box you’ve been raised in,you won’t understand how much bigger the world is.'",
    name:'Angelina Jolie',
    year: 2019
    }
];


function getRandomQuote(quote) {
    const max = quote.length;
    const index = Math.floor(Math.random() * max) + 1 ;
    const result = ` ${quote[index].quote} <br \><br \>- ${quote[index].name}, Twitter ${quote[index].year}`;
    return  result
    }
    

function printQuote () {
    const display = document.getElementById("quote").innerHTML = getRandomQuote(quotes);
    return display 
 
 }

document.getElementById('load-quote').addEventListener("click", printQuote, false);