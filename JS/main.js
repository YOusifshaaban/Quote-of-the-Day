var quotes = [
    {
      quote: "“Be yourself; everyone else is already taken.”",
      person: " ― Oscar Wilde",
    },
    {
      quote: "“Without music, life would be a mistake.”",
      person: "― Friedrich Nietzsche, Twilight of the Idols",
    },
    {
      quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
      person: "― Marilyn Monroe",
    },
    {
      quote:"“ You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one ”",
      person: "John Lennon",
    },
    {
      quote:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
      person: " ― William W. Purkey",
    },
    {
      quote:" It is during our darkest moments that we must focus to see the light.",
      person: "-Aristotle",
    },
    {
      quote:"“Be the change that you wish to see in the world.” ",
      person: "― Mahatma Gandhi",
    },
    {
      quote:"“I am so clever that sometimes I don't understand a single word of what I am saying.”",
      person: "― Oscar Wilde, The Happy Prince and Other Stories",
    },
    {
      quote:"“ “Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend”",
      person: " Albert Camus",
    },
    {
      quote: "“It is better to be hated for what you are than to be loved for what you are not.”",
      person: "Andre Gide, Autumn Leaves ",
    },
  ];


 var box = "";
  function creater() {
    for (var i = 0; i < quotes.length; i++) {
      var random = Math.floor(Math.random()*quotes.length) + 0;
  
      box = ` <div>
      <h2>${quotes[random].quote}</h2>
      <p> ~ ${quotes[random].person} ~ </p>
  
  </div>`;
  
      document.getElementById("display").innerHTML = box;
    
  }
  }

/* /////////////////////////////////////////////////////////////////////////*/
 /*--------------That code for non-rebeat a random quotes------------------------*/


//   var checkIndex = [];

// function creater() {
//   if (checkIndex.length === quotes.length) {
//     checkIndex = [];
//   }

//   var randomIndex;
//   do {
//     randomIndex = Math.floor(Math.random() * quotes.length);
//   } while (checkIndex.includes(randomIndex));

//   checkIndex.push(randomIndex);

//   const selectedQuote = quotes[randomIndex];
  
//   const box = `<div>
//     <h2>${selectedQuote.quote}</h2>
//     <p> ~ ${selectedQuote.person} ~ </p>
//   </div>`;

//   document.getElementById("display").innerHTML = box;
// }