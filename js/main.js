var qoute;
var qoute_DB = [
   {
      txt: "T“Be yourself; everyone else is already taken.”",
      writer: " Oscar Wilde"
   },
   {
      txt: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
      writer: "― Marilyn Monroe"

   },
   {
      txt: "“So many books, so little time.”",
      writer: "― Frank Zappa"

   },
   {
      txt: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      writer: "― Albert Einstein"

   }
   ,
   {
      txt: "“A room without books is like a body without a soul.”",
      writer: "― Marcus Tullius Cicero"

   }
   ,
   {
      txt: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      writer: "― William W. Purkey"

   }
   ,
   {
      txt: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.””",
      writer: "― Albert Einstein"

   }];
var used=[];
function NewQuote(){

    var randomNumber=Math.floor(Math.random()*(qoute_DB.length));
    document.getElementById("qoute").innerHTML = qoute_DB[randomNumber].txt + "</br>"+qoute_DB[randomNumber].writer ;
   //  var spl=qoute_DB.splice(randomNumber,1);
   //  used.push(spl);
   //  console.log (used)
   //   if(qoute_DB.length==0)
   //   {
   //      qoute_DB=used;  
   //   }
   //   console.log(qoute_DB)
    
}



