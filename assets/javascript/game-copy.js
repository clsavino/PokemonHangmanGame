window.onload = function() {

var pokemon = [
	{
		'name': 'pikachu',
		'jpgFile': "assets/images/pikachu.jpg",
		'gifFile': "assets/images/pikachu.gif"
	},
	{
		'name': 'charmander',
		'jpgFile': "assets/images/charmander.jpg",
		'gifFile': "assets/images/charmander.gif"
	},
	{
		'name': 'squirtle',
		'jpgFile': "assets/images/squirtle.png",
		'gifFile': "assets/images/squirtle.gif"
	},
	{
		'name': 'bulbasaur',
		'jpgFile': "assets/images/bulbasaur.jpg",
		'gifFile': "assets/images/bulbasaur.gif"
	},
	{
		'name': 'snorlax',
		'jpgFile': "assets/images/snorlax.png",
		'gifFile': "assets/images/snorlax.gif"
	},	
	{
		'name': 'jigglypuff',
		'jpgFile': "assets/images/jigglypuff.jpg",
		'gifFile': "assets/images/jigglypuff.gif"
	},		
	{
		'name': 'krabby',
		'jpgFile': "assets/images/krabby.png",
		'gifFile': "assets/images/krabby.gif"
	},
	{
		'name': 'onix',
		'jpgFile': "assets/images/onix.png",
		'gifFile': "assets/images/onix.gif"
	},
	{
		'name': 'sandshrew',
		'jpgFile': "assets/images/sandshrew.png",
		'gifFile': "assets/images/sandshrew.gif"
	},
	{
		'name': 'pidgeotto',
		'jpgFile': "assets/images/pidgeotto.jpg",
		'gifFile': "assets/images/pidgeotto.gif"
	},	
	{
		'name': 'charizard',
		'jpgFile': "assets/images/charizard.jpg",
		'gifFile': "assets/images/charizard.gif"
	},
	{
		'name': 'cubone',
		'jpgFile': "assets/images/cubone.png",
		'gifFile': "assets/images/cubone.gif"
	}];

var gifArray = ['gifImage0','gifImage1','gifImage2','gifImage3','gifImage4','gifImage5','gifImage6','gifImage7','gifImage8','gifImage9','gifImage10','gifImage11'];

// Declare Game Variables
var userGuess = "";
var wins = 0; 
var losses = 0;
var alreadyUsed = [];// array to keep track of letters already used in pokemon name - used in updateWord
var usedIndex = 0;// index into usedLetters array
var usedLetters = []; //empty array for keeping track of guessed letters not in pokemon name - used in updateGuesses
var round = 0;
var currentPokemon = "";
var currentWord = [];
var displayWord = "";
var usedIndex = 0;
var remainingGuesses = 7;
var gameOver = false;
var lettersStr = "";
var lettersLeft = 0;
var reset = false;
var state = "stillPlaying";
// Play Again? message
var playAgain = "<h4>Press Y to play again</h4>";
// audio element needed for controls
var audioCntl = document.getElementById("themeSong");
audioCntl.volume = 0.5;
//set up page for a round of pokemon hangman
// reset info displayed from last round
// set state of game to "stillPlaying"
// display pokemon silhouette and play audio ("who's that pokemon")	
 function silhouetteSong(round) {
 	document.getElementById("playAgain").innerHTML = '<p></p>';
 	document.getElementById('guessesLeft').innerHTML = '<p>7</p>';
	document.getElementById('lettersUsed').innerHTML = '<p>NONE</p>'; 
	document.getElementById('wins').innerHTML = '<p>' + wins + '</p>'; 

	//display new pokemon
 	var imageSrc = pokemon[round].jpgFile;
	document.getElementById("silImage").innerHTML = '<img src=' + imageSrc + '>'; 
 	document.getElementById('whosthatpokemon').innerHTML = '<audio id="whosthatpokemon" src="assets/audio/whosthatpokemon.mp3" type="audio/mp3" autoplay>';

 // reset items for updateWord function
 	currentWord = [];
 	displayWord = "";
 	alreadyUsed = [];
 	currentPokemon = pokemon[round].name;
 	lettersLeft = currentPokemon.length;

 	for (var i=0; i < currentPokemon.length; i++) {
		currentWord[i] = '_';
	}

	displayWord = currentWord.join(" ");
	document.getElementById('pokemonName').innerHTML = '<h3>' + displayWord + '</h3>';

	// reset items for updateGuesses function
	usedIndex = 0;
	usedLetters = []; //empty array
	remainingGuesses = 7;

	//set game state to "stillPlaying"
	//state = "stillPlaying";
}

// function used to display user's guess of letters in pokemon name. Doesn't execute code if gameOver

 function updateWord() {
 	if (!gameOver){
 		
 		// Put userGuess in alreadyUsed array
 		var pos = alreadyUsed.indexOf(userGuess);
 		if (pos === -1) {
 		// Put userGuess in array of blanks in every spot it belongs (could be multiple locations)
			alreadyUsed.push(userGuess);
		    for(var i=0; i < currentPokemon.length; i++) {
		    	
		        if (currentPokemon[i] === userGuess) {
		        	currentWord[i] = userGuess;
		        	lettersLeft = lettersLeft - 1;
		        }
		    }
		}
	 	displayWord = currentWord.join(" ");
		document.getElementById('pokemonName').innerHTML = '<h3>' + displayWord + '</h3>';
		//set gameOver and update wins
		if (lettersLeft <= 0 ) {
			gameOver = true;
			wins++;
			document.getElementById('wins').innerHTML = '<p>' + wins + '</p>';
		}

	} //end of if (!gameOver)	
}// end of updateWord


// function runs if userGuess is not correct, displays used letters and displays number of remaining guesses

function updateGuesses() { 
	if (!gameOver) {
	var	pos = usedLetters.indexOf(userGuess);
	// if userGuess is not in usedLetters array then add it in
		if (pos === -1) {
			usedLetters[usedIndex] = userGuess;// Put userGuess in usedLetters array
			usedIndex = usedIndex + 1;// update #of trys 
			remainingGuesses = remainingGuesses - 1; //decrement number of guesses they have left
		}

		//lettersStr = usedLetters.join(" ");
		document.getElementById('lettersUsed').innerHTML = '<h3>' + usedLetters + '</3>';

		document.getElementById('guessesLeft').innerHTML = '<h3>' + remainingGuesses + '</h3>';

		//check to see if used all 7 guesses
		if (remainingGuesses <= 0) {
			gameOver = true;
			losses++;
		}

	} //end of if (!gameOver)
}

// displays pokemon gif when round is over - win or lose
function displayGif() {
	var imageSrc = pokemon[round].gifFile;
	document.getElementById("silImage").innerHTML = '<img src=' + imageSrc + '>';
}

// puts gif in the bottom row for user to see
function moveGif() {
	var imageSrc = pokemon[round].gifFile; //imageSrc for gitfile
	var gifLoc = gifArray[round];// id of the column to put gif in
	document.getElementById(gifLoc).innerHTML = '<img class="gifImage" src=' + imageSrc + '>';
}

//Displays Play Again message - resets number of guesses left and letters already used then sets reset=true
// Sets state of game to "overAndReset"
 function playAgainMsg() {
 	document.getElementById("playAgain").innerHTML = playAgain; 
 	document.getElementById('guessesLeft').innerHTML = '<p>7</p>';
	document.getElementById('lettersUsed').innerHTML = '<p>NONE</p>';
	currentWord = []; 
	displayWord = currentWord.join(" ");
	document.getElementById('pokemonName').innerHTML = '<h3>' + displayWord + '</h3>';	
	reset = true; //time to reset arrays and counters that are displayed (except wins)
	/*
	if (round === 12) {
		state = "allDone";
	} else {
		state = "roundOverAndReset"; // waiting for user to enter "Y" to play again
	}
	*/
}

//**********************************
// ***** Start of Game *************
//**********************************
//Call function to set up Pokemon silhouette and song for round 0

	silhouetteSong(round);
	
// Listen for key press 

    document.onkeyup = function(event) {
    	userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    	switch (state) {

		  case "allDone":  // All 12 rounds played 
		  	document.getElementById("playAgain").innerHTML = '<h4>ALL DONE WITH POKEMON HANGMAN</h4y>';
			//document.getElementById("playAgain").innerHTML = '<p> </p>'; 
		    break;

		  case "roundOverAndReset":
		  		if (userGuess == 'y' ) { //user wants to play again
					gameOver = false;
					moveGif();
					round++;
					if (round != 12) { // play new round
						silhouetteSong(round);
						//set game state to "stillPlaying"
						state = "stillPlaying";
						reset = false;
					}
					if (round === 12) {
						state = "allDone";
					}					
				}		
		    break;

		  case "stillPlaying":
		    // user still guessing letters in current round
				posWord = currentPokemon.indexOf(userGuess);

				if (posWord > -1) {
					updateWord();
				} else {
					updateGuesses();
				}
				if (gameOver) {
		    		displayGif();
		    		playAgainMsg();
		    		if (round === 12) {
						state = "allDone";
					} else {
						state = "roundOverAndReset"; // waiting for user to enter "Y" to play again
					}
		    	}	
		    break;
		}
		/*
		if (round === 12) { // display All done with Hangman
			document.getElementById("playAgain").innerHTML = '<h4>ALL DONE WITH POKEMON HANGMAN</h4y>';
			//document.getElementById("playAgain").innerHTML = '<p> </p>';
			state = "allDone";
		}
		*/
} //end of event listener

}//end of window.onload