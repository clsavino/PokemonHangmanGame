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
		'jpgFile'File: "assets/images/snorlax.jpg",
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


function startMsg() {
	// Tells user to guess a letter in the Pokemon's name
	// Display "Wins" followed by number of wins
	// Display "Current Word" and blanks
	// Display "Number of guesses remaining"
	// Display "Letters already guessed"
	// Display Wins = 0

	}
}

 function silhouetteSong(round) {
 	if round > 0 {
 		moveGif();
 	}
 	document.getElementById("silImage").innerHTML = "<img src=assets/images/pokemon.jpgFile>";
 
 	document.getElementById('whosthatpokemon').innerHTML = '<audio id="whosthatpokemon" src="assets/audio/whosthatpokemon.mp3" type="audio/mp3" autoplay>';
	 document.getElementById("audio").innerHTML = audioHTML; 
}

 function displayWord() {
    
    var pos = str.indexOf("letter");
}

function tallyWins () {

}

function updateGuesses (){
	
}

function displayGif (){
	
} 

function  () {

}

//Declare Game Variables
var round = 0;

//Display Start Message
startMsg();

// Listen for key press 
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


	displayGif();
	tallyWins();
	round = 1;
	playAgainMsg();
} //end of event listener
