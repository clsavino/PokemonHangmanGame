window.onload = function() {

var pokemon = [
	{
		'name': 'pikachu',
		'jpgFile': "assets/images/pikachu.jpg",
		'gifFile': "assets/images/pikachu.gif"
	},
	{
		'name': ['charmander'],
		'jpgFile': "assets/images/charmander.jpg",
		'gifFile': "assets/images/pikcharmanderachu.gif"
	},
	{
		'name': ['squirtle'],
		'jpgFile': "assets/images/squirtle.jpg",
		'gifFile': "assets/images/squirtle.gif"
	},
	{
		'name': ['bulbasaur'],
		'jpgFile': "assets/images/bulbasaur.jpg",
		'gifFile': "assets/images/bulbasaur.gif"
	},
	{
		'name': ['snorlax'],
		'jpgFile': "assets/images/snorlax.jpg",
		'gifFile': "assets/images/snorlax.gif"
	},	
	{
		'name': ['jigglypuff'],
		'jpgFile': "assets/images/jigglypuff.jpg",
		'gifFile': "assets/images/jigglypuff.gif"
	},		
	{
		'name': ['krabby'],
		'jpgFile': "assets/images/krabby.jpg",
		'gifFile': "assets/images/krabby.gif"
	},
	{
		'name': ['onix'],
		'jpgFile': "assets/images/onix.jpg",
		'gifFile': "assets/images/onix.gif"
	},
	{
		'name': ['sandshrew'],
		'jpgFile': "assets/images/sandshrew.jpg",
		'gifFile': "assets/images/sandshrew.gif"
	},
	{
		'name': ['pidgeotto'],
		'jpgFile': "assets/images/pidgeotto.jpg",
		'gifFile': "assets/images/pidgeotto.gif"
	},	
	{
		'name': ['charizard'],
		'jpgFile': "assets/images/charizard.jpg",
		'gifFile': "assets/images/charizard.gif"
	},
	{
		'name': ['cubone'],
		'jpgFile': "assets/images/cubone.jpg",
		'gifFile': "assets/images/cubone.gif"
	}];


 function silhouetteSong(round) {
 	if (round > 0) {
 		moveGif();
 	}
 	var imageSrc = pokemon[round].jpgFile;
	document.getElementById("silImage").innerHTML = '<img src=' + imageSrc + '>';
 
 	document.getElementById('whosthatpokemon').innerHTML = '<audio id="whosthatpokemon" src="assets/audio/whosthatpokemon.mp3" type="audio/mp3" autoplay>';

	//.setAttribute('class', 'imgSil');
}

 function displayWord() {
    
    //var pos = str.indexOf("letter");
}

function tallyWins () {

}

function updateGuesses (){
	
}

function displayGif (){
	//<img id="gifImage" src='assets/images/pikachu.gif'>	
} 
function moveGif (){

}
function playAgainMsg (){

}

// Declare Game Variables


var wins = 0;

//var word = "_ _ _ _ _ _ _";
var word = '<h1>_ _ _ _ _ _ _</h1>';

var usedLetters = '<p>NONE</p>';
var round = 0;
silhouetteSong(round);
// Display Pikachu silhouette & play song
	// var imageSrc = pokemon[0].jpgFile;
	// document.getElementById("silImage").innerHTML = '<img src=' + imageSrc + '>';
 
 // 	document.getElementById('whosthatpokemon').innerHTML = '<audio id="whosthatpokemon" src="assets/audio/whosthatpokemon.mp3" type="audio/mp3" autoplay>';
 // Set and Display wins, guesses left, and letters used
 	document.getElementById('wins').innerHTML = '<p>0</p>';
 	document.getElementById('guessesLeft').innerHTML = '<p>7</p>';
	document.getElementById('lettersUsed').innerHTML = usedLetters; 	
// Display first word blanks
	document.getElementById('word').innerHTML = word;



// Listen for key press 
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	displayWord();
	
	tallyWins();
	displayGif();

	round = 1;
	playAgainMsg();
} //end of event listener

}//end of window.onload