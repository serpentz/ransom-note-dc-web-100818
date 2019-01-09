let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t",
"h", "a", "t", "y", "o", "u", "s", "h", "o", "u", "l", "d", "b",
"u", "y", "t", "h", "e", "y", "a", "r", "e", "c", "h", "e", "a",
"p", "a", "n", "d", "w", "o", "n", "d", "e", "r", "f", "u", "l",
 "f", "o", "r", "t", "h", "e", "s", "u", "m", "m", "e", "r"]

 let note = "give me the ferbie or else"




function buildHistogram(magazine){
 let letters = {}

 for (let letter of magazine){

 	let letterObject = letter
 	if(letters[letterObject]){
 		letters[letterObject] = letters[letterObject] + 1
 	}else{
 		letters[letterObject] = 1 
 	}

 }
 return letters
}

function canBuildNote(mag,note){
	let magletters = buildHistogram(mag)
	let noteLetters = buildHistogram(note.split(""))

	for (let letter in noteLetters){

 		if(magletters[letter]){

 			if(noteLetters[letter] <= magletters[letter]){magletters[letter] = magletters[letter] - noteLetters[letter]}else{return false}
 		}else{
 			return false
 		}

 	}
 	return true

	

}
