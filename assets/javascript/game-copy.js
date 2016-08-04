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
		'gifFile': "assets/images/pikcharmanderachu.gif"
	},
	{
		'name': 'squirtle',
		'jpgFile': "assets/images/squirtle.jpg",
		'gifFile': "assets/images/squirtle.gif"
	},
	{
		'name': 'bulbasaur',
		'jpgFile': "assets/images/bulbasaur.jpg",
		'gifFile': "assets/images/bulbasaur.gif"
	},
	{
		'name': 'snorlax',
		'jpgFile': "assets/images/snorlax.jpg",
		'gifFile': "assets/images/snorlax.gif"
	},	
	{
		'name': 'jigglypuff',
		'jpgFile': "assets/images/jigglypuff.jpg",
		'gifFile': "assets/images/jigglypuff.gif"
	},		
	{
		'name': 'krabby',
		'jpgFile': "assets/images/krabby.jpg",
		'gifFile': "assets/images/krabby.gif"
	},
	{
		'name': 'onix',
		'jpgFile': "assets/images/onix.jpg",
		'gifFile': "assets/images/onix.gif"
	},
	{
		'name': 'sandshrew',
		'jpgFile': "assets/images/sandshrew.jpg",
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
		'jpgFile': "assets/images/cubone.jpg",
		'gifFile': "assets/images/cubone.gif"
	}];
	console.log(pokemon);

	//var word = ['_','_','_','_','_','_','_'];// blanks for pokemon[0]

	// Declare Game Variables
	var userGuess = "";
	var wins = 0;
	var usedLetters = []; //empty array
	var round = 0;
	var currentPokemon = "";
	var currentWord = [];
	var displayWord = "";
	var guesses = 7;
	var gameOver = false;
	var lettersStr = "";
	var gifArray = ['gifImage0','gifImage1','gifImage2',
				  'gifImage3','gifImage4','gifImage5',
				  'gifImage6','gifImage7','gifImage8',
				  'gifImage9','gifImage10','gifImage11'];
	console.log(userGuess);
	console.log(wins); 
	console.log(usedLetters); 
	console.log(round);
	console.log(currentPokemon);
	console.log(currentWord); 
	console.log(displayWord);
	console.log(guesses); 
	console.log(gameOver); 
	console.log(lettersStr);
	console.log(gifArray);

 function silhouetteSong(round) {
 	if (round > 0) {
 		moveGif();
 	}
 	var imageSrc = pokemon[round].jpgFile;
 	console.log('imageSrc is ' + imageSrc);
	document.getElementById("silImage").innerHTML = '<img src=' + imageSrc + '>';
 
 	document.getElementById('whosthatpokemon').innerHTML = '<audio id="whosthatpokemon" src="assets/audio/whosthatpokemon.mp3" type="audio/mp3" autoplay>';
 	currentPokemon = pokemon[round].name;
 	for (var i=0; i < currentPokemon.length; i++) {
		currentWord[i] = '_';
	}
	console.log('currentPokemon is ' + currentPokemon);
	console.log('currentPokemon.length = ' + currentPokemon.length);
	console.log('currentWord array is ' + currentWord);
	//.setAttribute('class', 'imgSil');
}

 function displayWord(posWord) {
    
 	currentWord[posWord] = userGuess;
 	displayWord = currentWord.join("");
	document.getElementById('pokemonName').innerHTML = '<h1>' + displayWord + '</h1>';
}

function tallyWins () {
	wins++;
	document.getElementById('wins').innerHTML = '<p>' + wins + '</p>';
}

function updateGuesses (){
	usedLetters = usedLetters.push(userGuess);
	lettersStr = usedLetters.join("");
	document.getElementById('lettersUsed').innerHTML = usedLetters.join("");
	console.log('usedLetters = ' + usedLetters.join(""));
	console.log('usedLetters = ' + usedLetters);
	guesses--;
	console.log('guesses = ' + guesses);
	if (guesses = 0) {
		gameOver = true;
	}
}

function displayGif (){
	var imageSrc = pokemon[round].gifFile;
	document.getElementById("silImage").innerHTML = '<img src=' + imageSrc + '>';
}

function moveGif (){
	var imageSrc = pokemon[round].gifFile;
	var gifLoc = gifArray[round];
	document.getElementById(gifLoc).innerHTML = '<img src=' + imageSrc + '>';
}

function playAgainMsg (){
	//display click to play again message
	document.getElementById('button').innerHTML = '<p>Click to play a game of Hangman</p>';
}

	//var word = ['_','_','_','_','_','_','_'];// blanks for pokemon[0]
	//Call the function to display the 1st pokemon and play the audio clip
	silhouetteSong(round);
	// Display Pikachu silhouette & play song
		// var imageSrc = pokemon[0].jpgFile;
		// document.getElementById("silImage").innerHTML = '<img src=' + imageSrc + '>';
	 
	 // 	document.getElementById('whosthatpokemon').innerHTML = '<audio id="whosthatpokemon" src="assets/audio/whosthatpokemon.mp3" type="audio/mp3" autoplay>';
	 // Set and Display wins, guesses left, and letters used
	 //Initial values for window.onload - wins=0, guessLeft=7, usedLetters=NONE
 	document.getElementById('wins').innerHTML = '<p>0</p>';
 	document.getElementById('guessesLeft').innerHTML = '<p>7</p>';
	document.getElementById('lettersUsed').innerHTML = '<p>NONE</p>'; 	
	po
// Display the current word in blanks
	for (var i=0; i<pokemon[round].name.length; i++) {
		currentWord[i] = '_';
	}
	console.log('currentWord is ' + currentWord);
	blanksWord = currentWord.join("");
	console.log('blanksWord is ' + blanksWord);
	document.getElementById('pokemonName').innerHTML = '<h1>' + blanksWord + '</h1>';
	//document.getElementById('pokemonName').innerHTML = '<h1>' + blanksWord.join("") + '</h1>';

// Listen for key press 

    document.onkeyup = function(event) {
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log('user guessed ' + userGuess);
	guesses++;
	posWord = pokemon[round].name.indexOf(userGuess);

	console.log(posWord);

	if (posWord > -1) {
		displayWord(posWord);
	} else {
		updateGuesses();
	}

	if (gameOver) {
		tallyWins();
		displayGif();
		round++;
		guesses = 7;
		playAgainMsg();
		gameOver = false;
	}


} //end of event listener

}//end of window.onload