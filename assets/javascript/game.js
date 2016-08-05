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
	console.log(pokemon);

	// Declare Game Variables
	var userGuess = "";
	var wins = 0;
	var usedLetters = []; //empty array
	var round = 0;
	var currentPokemon = "";
	var currentWord = [];
	var displayWord = "";
	var usedIndex = 0;
	var remainingGuesses = 7;
	var gameOver = false;
	var lettersStr = "";
	var lettersLeft = 0;
	var gifArray = ['gifImage0','gifImage1','gifImage2','gifImage3','gifImage4','gifImage5','gifImage6','gifImage7','gifImage8','gifImage9','gifImage10','gifImage11'];
	//declare "play again" msg
	var playAgain = "<h4>Press Y to play again</h4>";
	var reset = false;

	console.log(userGuess);
	console.log(wins); 
	console.log(usedLetters); 
	console.log(round);
	console.log(currentPokemon);
	console.log(currentWord); 
	console.log(displayWord);
	console.log(usedIndex); 
	console.log(gameOver); 
	console.log(lettersStr);
	console.log(lettersLeft)
	console.log(gifArray);
	console.log("=================================");
	
 function silhouetteSong(round) {
 	//if (round > 0) { moveGif();}
 	// clear play again message, update guesses remaining and letters used
 	document.getElementById("playAgain").innerHTML = '<p></p>';
 	document.getElementById('guessesLeft').innerHTML = '<p>7</p>';
	document.getElementById('lettersUsed').innerHTML = '<p>NONE</p>'; 

	//display new pokemon
 	var imageSrc = pokemon[round].jpgFile;
 	console.log('imageSrc is ' + imageSrc);
	document.getElementById("silImage").innerHTML = '<img src=' + imageSrc + '>';
 
 	document.getElementById('whosthatpokemon').innerHTML = '<audio id="whosthatpokemon" src="assets/audio/whosthatpokemon.mp3" type="audio/mp3" autoplay>';

 	currentPokemon = pokemon[round].name;
 	lettersLeft = currentPokemon.length;
 	for (var i=0; i < currentPokemon.length; i++) {
		currentWord[i] = '_';
	}
	displayWord = currentWord.join(" ");
	document.getElementById('pokemonName').innerHTML = '<h3>' + displayWord + '</h3>';

	console.log('currentPokemon is ' + currentPokemon);
	console.log('currentPokemon.length = ' + currentPokemon.length);
	console.log('currentWord array is ' + currentWord);

	console.log('displayWord is ' + displayWord);
	
	//.setAttribute('class', 'imgSil');
}

 function updateWord(posWord) {
 	if (!gameOver){
	    for(var i=0; i < currentPokemon.length; i++) {
	        if (currentPokemon[i] === userGuess) {
	        	currentWord[i] = userGuess;
	        	lettersLeft = lettersLeft - 1;
	        }
	    }
	 	//currentWord[posWord] = userGuess;
	 	displayWord = currentWord.join(" ");
		document.getElementById('pokemonName').innerHTML = '<p>' + displayWord + '</p>';
		
		if (lettersLeft <= 0 ) {
			gameOver = true;
			wins++;
			document.getElementById('wins').innerHTML = '<p>' + wins + '</p>';
		}
		console.log('wins = ' + wins);
		console.log('letters left ' + lettersLeft);
		console.log('gameOver ' + gameOver);
		console.log("=================================");
	} //end of if (!gameOver)	
}

function updateGuesses() {
	var	pos = usedLetters.indexOf(userGuess);
	if (pos === -1) {
		usedLetters[usedIndex] = userGuess;
		usedIndex = usedIndex + 1;
		remainingGuesses = remainingGuesses - 1;
	}

	//lettersStr = usedLetters.join(" ");
	document.getElementById('lettersUsed').innerHTML = '<p>' + usedLetters + '</p>';
	console.log('usedLetters = ' + usedLetters);
	console.log('usedIndex = ' + usedIndex);	

	document.getElementById('guessesLeft').innerHTML = '<p>' + remainingGuesses + '</p>';
	console.log('remainingGuesses = ' + remainingGuesses);
	//check to see if used all 7 guesses
	if (remainingGuesses <= 0) {
		gameOver = true;

	}
	console.log("=================================");
}

function displayGif() {
	var imageSrc = pokemon[round].gifFile;
	document.getElementById("silImage").innerHTML = '<img src=' + imageSrc + '>';
}

function moveGif() {
	var imageSrc = pokemon[round].gifFile;
	var gifLoc = gifArray[round];
	document.getElementById(gifLoc).innerHTML = '<img src=' + imageSrc + '>';
}

 function playAgainMsg() {
 	document.getElementById("playAgain").innerHTML = playAgain; 
 	document.getElementById('guessesLeft').innerHTML = '<p>7</p>';
	document.getElementById('lettersUsed').innerHTML = '<p>NONE</p>'; 	
	reset = true; //time to reset arrays and counters that are displayed (except wins)
}



	//Display wins = 0, Call the function to display the 1st pokemon and play the audio clip
	document.getElementById('wins').innerHTML = '<p>0</p>';

	silhouetteSong(round);
	
 // 	document.getElementById('wins').innerHTML = '<p>0</p>';
 // 	document.getElementById('guessesLeft').innerHTML = '<p>7</p>';
	// document.getElementById('lettersUsed').innerHTML = '<p>NONE</p>'; 	
	
// Display the current word in blanks
	currentPokemon = pokemon[round].name;
	lettersLeft = currentPokemon.length;
	console.log('lettersLeft ' + lettersLeft);
 	for (var i=0; i < currentPokemon.length; i++) {
		currentWord[i] = '_';
	}
	console.log('currentWord is ' + currentWord);
	displayWord = currentWord.join(" ");
	console.log('displayWord is ' + displayWord);
	document.getElementById('pokemonName').innerHTML = '<h3>' + displayWord + '</h3>';
	//document.getElementById('pokemonName').innerHTML = '<h1>' + blanksWord.join("") + '</h1>';

// Listen for key press 

    document.onkeyup = function(event) {
	    if (gameOver) {
			displayGif();
			playAgainMsg();
			gameOver = false;
		}else {	
			userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log('user guessed ' + userGuess);
			
			if ((userGuess == 'y' ) && (reset)) { //user wants to play again
				moveGif();
				round++;
				if (round != 12) {
					console.log('round is ' + round);
					usedLetters = []; //empty array
					currentPokemon = "";
					currentWord = [];
					displayWord = "";
					usedIndex = 0;
					remainingGuesses = 7;
					lettersStr = "";
					lettersLeft = 0;
					silhouetteSong(round);
					reset = false;
				}else {
					document.getElementById("playAgain").innerHTML = '<p>ALL DONE WITH POKEMON HANGMAN</p>';
				}	

			} else {
				// user still guessing letters
				posWord = currentPokemon.indexOf(userGuess);

				console.log('posWord = ' + posWord);

				if (posWord > -1) {
					updateWord(posWord);
				} else {
					updateGuesses();
				}		
			}//end of else
		}//end of if

} //end of event listener

}//end of window.onload