var canvasLeftContent = document.getElementById("canvasLeftContent");
var currentWord = document.getElementById("currentWord");
var lettersGuessed = document.getElementById("lettersGuessed");
var numberWins = document.getElementById("numberWins");
var guessesRemaining = document.getElementById("guessesRemaining");
var lastWord = document.getElementById("lastWord");
var pic = document.getElementById("pic");

// Main game object
var Hangman = {
	words: ['cardinals', 'falcons', 'ravens', 'bills', 'panthers', 'bears', 'bengals', 'browns', 
	        'cowboys', 'broncos', 'lions', 'packers', 'texans', 'colts', 'jaguars', 'chiefs', 'chargers',
	        'rams', 'dolphins', 'vikings', 'patriots', 'saints', 'giants', 'jets', 'raiders', 'eagles',
	        'steelers', 'seahawks', 'buccaneers', 'titans', 'redskins'],
	numberWins: 0,
	guessesRemaining: 12,
	lettersGuessed: [],
	randomWord: "",
	dashWord: "",
	gameOver: false,
	numberGuessed: 0,
	// Method to begin playing game
	play: function() {
		// Reset for every word
		this.guessesRemaining = 12;
		this.numberGuessed = 0;
		this.randomWord = "";
		this.dashWord = "";
		this.lettersGuessed = [];
		// Pick a random team from word array
		this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];
		// Create string that will appear to user
		for(var i = 0; i < this.randomWord.length; i++) {
			this.dashWord += "_";
		}
		// Update DOM with applicable values
		currentWord.innerText = this.dashWord;
		numberWins.innerText = this.numberWins;
		guessesRemaining.innerText = this.guessesRemaining;
		lettersGuessed.innerText = this.lettersGuessed;
	},
	// Event handler for key presses
	keyPressed: function(e) {
		// Converts ascii value to a char
		var letter = String.fromCharCode(e.keyCode);
	    if(e.keyCode >= 97 && e.keyCode <= 122)
	    	// If user hasn't already guessed letter
		    if(!Hangman.lettersGuessed.includes(letter)) {
		    // Add it to the guessed letter list
			Hangman.lettersGuessed.push(letter);
			// Update list of letters guessed
			lettersGuessed.innerText = Hangman.lettersGuessed.join(" ");
			// Decrement number of guesses
			Hangman.guessesRemaining--;
			// Update number of guesses on screen
			guessesRemaining.innerText = Hangman.guessesRemaining;
			// If user guesses letter, replace 
			for(var x = 0; x < Hangman.randomWord.length; x++) {
				// If guessed letter matches any letters in word
				if(letter === Hangman.randomWord[x]) {
					// Must build new string as they are immutable
					Hangman.dashWord = Hangman.dashWord.substring(0, x) + letter + Hangman.dashWord.substring(x + 1);
					// Incrememnt for every correct guess
					Hangman.numberGuessed++;
				}
			}
			// Referesh current word on screen
			currentWord.innerText = Hangman.dashWord;

			// If user has guessed all letters
			if(Hangman.numberGuessed === Hangman.randomWord.length) {
				Hangman.numberWins++;
				lastWord.innerText = Hangman.randomWord;
				pic.src = "./assets/images/" + Hangman.randomWord + ".png";
				new Audio('./assets/nfl_theme.mp3').play();
				Hangman.play();
			}

			// If user is out of guesses restart game
			if(Hangman.guessesRemaining <= 0) {
				alert("You have used all your guesses");
				Hangman.play();
			}
	    }
	}
};

// Begins the game
Hangman.play();

// Sets up event handler for keypress
document.addEventListener('keypress', Hangman.keyPressed);
