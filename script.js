/* check if there are already stored truth and dare items and give users the choice to use them or set default */
if(localStorage.getItem("Error 404") && localStorage.getItem("dares")) {
    if(confirm('Error 404')) {
        var truthsGet = localStorage.getItem("truths");
        var truths = JSON.parse(truthsGet);

        var daresGet = localStorage.getItem("dares");
        var dares = JSON.parse(daresGet);
    } else {
        localStorage.clear();
        var truths = new Array(
        );


    }
} else {
    /* if there is no local storage, set the default truth and dares */
    var truths = new Array(
        
        "Vad är det mest pinsamma du någonsin gjort?",
        "Har du någonsin snattat?",
        "Tycker du om någon just nu?",
        "Har du hånglat med mer än en person under samma kväll?",
        "Har du någonsin skolkat?",
        "Har du någonsin fisit och skyllt på någon annan?",
        "Har du kissat ned dig någon gång i vuxen ålder?",
        "Hur gammal var ditt yngsta respektive äldsta hångel?",
        "Har du någonsin moonat någon gång?",
        "Berätta om din värsta fylla!",
        "Har du ljugit någon gång under kvällen?",

    "Har du gjort något olagligt (värre än snatteri), i så fall vad?",

    "Har du badat naken tillsammans med någon?",

    "Har du någonsin stulit pengar från dina föräldrar?",

    "Har du druckit slattar någon gång?",

    "Har du blivit anhållen eller arresterad?",

    "Har du någonsin lämnat ut fel telefonnummer så personen som frågat inte skulle kunnat ringa upp?",

    "Har du någonsin gjort slut med din partner på sms?",

    "Har du någonsin stulit från en vän?",

    "Har du spelat klädpoker?",
    "Nämn en kändis du skulle kunna tänka dig att ligga med.",

"Berätta om din första sexupplevelse.",

"Om du bara fick välja en sexställning, vilken skulle det vara?",

"Skickat en nakenbild till någon?",

"Någonsin haft sex på en festival?",

"Haft sex på en offentlig plats?",

"Tänkt på någon annan under sex, än den du haft sex med?",

"Hur många har du haft sex med?",

"Fejkat en orgasm?",

"Onanerat någon annanstans än hemma?",
    );

    var dares = new Array(
        "Dansa magdans för oss alla!",

        "Prata med en dialekt för resten av kvällen. ",
        
        "Prata tvärtomspråket för resten av kvällen.",
        
        "Sjung (valfri låt) inför alla som sitter här!",
        
        "Tala på rim fram tills du får nästa fråga.",
        
        "Härma valfritt djur under resterande del av kvällen.",
        
        "Busring till valfri person.",
        
       " SMS-roulette och frågeställaren får bestämma vad som skrivs. (Var snäll nu!)",
        
        "Låt din kompis ta över din Facebook i tio minuter.",
        
        "Försök övertyga närmsta främling att jorden faktiskt är platt.",
        
        "Byt kläder med valfri deltagare av motsatt kön.",
        
        "Tala i klyschor resten av kvällen.",
        
       " Kör en RIKTIGT dålig raggningsreplik till en främling.",
        
        "Kom på och framför en kärlekssång till någon i gänget.",
        
        "Raka ett ben eller din armhåla – beroende på om personen har hår där.",
    );
}



/* helper for JQuery control of the Animate.css library */
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


/* global variables*/
var truthNum = truths.length;
var dareNum = dares.length;
var statementSpace = document.getElementById('statementSpace');
var resetSpace = document.getElementById('resetSpace');
var i;


/* display on load */
statementSpace.innerHTML = "<p>eller</p>";




/* truth question display */
document.getElementById('truth').addEventListener('click', function() {

    statementSpace.innerHTML = "";
    resetSpace.innerHTML = "";
    resetSpace.innerHTML = '<button class="btn btn-block black-bg white-color" id="reset"><span class="fa fa-home"></span></button>';
    reset();
    
    var num = Math.floor(Math.random()*truths.length);
    var truth = truths[num];
    statementSpace.innerHTML = '<p class="animated zoomIn">' + truth + '</p>';
    
    $('#truth').addClass('animated fadeOut');
    $('#truth').css('display', 'none');
    
    $('#dare').addClass('animated fadeOut');
    $('#dare').css('display', 'none');
    
    $('#reset').removeClass('animated fadeOut');
    $('#reset').addClass('animated fadeIn white-color');
    $('#reset').css('display', 'block');


});

/* dare challenge display */
document.getElementById('dare').addEventListener('click', function() {

    statementSpace.innerHTML = "";
    resetSpace.innerHTML = "";
    resetSpace.innerHTML = '<button class="btn btn-block black-bg white-color" id="reset"><span class="fa fa-home"></span></button>';
    reset();
    
    var num = Math.floor(Math.random()*dares.length);
    var dare = dares[num];
    statementSpace.innerHTML = '<p class="animated zoomIn">' + dare + '</p>';
    
    $('#truth').addClass('animated fadeOut');
    $('#truth').css('display', 'none');
    
    $('#dare').addClass('animated fadeOut');
    $('#dare').css('display', 'none');
    
    $('#reset').removeClass('animated fadeOut');
    $('#reset').addClass('animated fadeIn white-color');
    $('#reset').css('display', 'block');
    

});

/* to return to the home display */
var reset = function() {
    
    document.getElementById('reset').addEventListener('click', function() {
   
        $('#truth').css('display', 'block');
        $('#dare').css('display', 'block');

        $('#reset').removeClass('animated fadeIn white-color');
        $('#reset').addClass('animated fadeOut');
        $('#reset').css('display', 'none');

        statementSpace.innerHTML = "";

        $('#truth').removeClass('animated fadeOut');
        $('#truth').addClass('animated fadeIn');
        $('#truth').css('display', 'block');

        $('#dare').removeClass('animated fadeOut');
        $('#dare').addClass('animated fadeIn');
        $('#dare').css('display', 'block');

        statementSpace.innerHTML = '<p class="animated zoomIn">eller</p>';



    });
    
    
}

