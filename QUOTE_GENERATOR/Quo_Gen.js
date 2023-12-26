function generate() {
    var quotes = { 
        "- Martin Luther King Jr" : '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
        
        "- Christopher Columbus" : '"You can never cross the ocean until you have the courage to lose sight of the shore."',

        "- Earl Nightingale" : '"We become what we think about."'   
}

   var authors = Object.keys(quotes);

   var author = authors[Math.floor(Math.random()*authors.length)];

   var quote = quotes[author];

   document.getElementById("quote").innerHTML = quote;
   
   document.getElementById("author").innerHTML = author;


} 