
  function findWordByLettersAndBackWordOfArray(words, letters) {
            // Convert letters to lowercase for case-insensitive matching
                const arrayOfWord = [];
            // const letters = letter.toLowerCase(); for case sensitivity
            // Iterate through each word in the array
            for (let i = 0; i < words.length; i++) {
                const word = words[i]; // Check if all letters are present in the word toLowerCase() for case sensitivity
                let allLettersFound = true;

                for (let j = 0; j < letters.length; j++) {
                    if (!word.includes(letters[j])) {
                        allLettersFound = false;
                        break;
                    }
                }

                if (allLettersFound) {
                    arrayOfWord.push(word);
                }
            } // If no word is found,return null or an empty string return arrayOfWord; }

            return arrayOfWord;

        }



         function wantedWords(arr,len){
            const newArr = [];
            for(const word of arr){
                if(word.length === len){
                    newArr.push(word);
                }
            }

            return newArr;
        }

        function removeDuplicateWords(arr){
            const uniqueArray = [];
            for(const word of arr){
                if(!uniqueArray.includes(word)){
                 uniqueArray.push(word);
                }
            }
            return uniqueArray;
        }

        function firstLetterMatch(arr, fLetter){
            const matchingWords = [];
            for(const word of arr){
                if(word[0] === fLetter){
                    matchingWords.push(word);
                }
            }
            return matchingWords;
        }

        function lastLetterMatch(arr, lLetter){
            const matchingWords = [];
            for(const word of arr){
                if(word[word.length -1] === lLetter){
                    matchingWords.push(word);
                }
            }
            return matchingWords;
        }




        document.getElementById('btn').addEventListener("click", (e) => {
            e.preventDefault();
            const letter = document.getElementById('letter').value;
            const length = document.getElementById('length').value;
            const firstLetter = document.getElementById("first_letter").value;
            const lastLetter = document.getElementById("last_letter").value;
            const output = document.getElementById('output');
            const number = parseInt(length);

            if (letter !== "" && length === "" && firstLetter === "" && lastLetter === ""){
                const arrayResult = findWordByLettersAndBackWordOfArray(words,letter);
                const uniqueArrayResult = removeDuplicateWords(arrayResult);
                output.innerText = uniqueArrayResult.join(", ")
                document.getElementById('output_container').classList.remove("hidden");
            }else if(letter !== "" && length !== "" && firstLetter === "" && lastLetter === ""){
                const arrayOfResult = findWordByLettersAndBackWordOfArray(words,letter);
                const findWantedWords = wantedWords(arrayOfResult,number);
                const uniqueArrayOfResult2 = removeDuplicateWords(findWantedWords);
                output.innerText = uniqueArrayOfResult2.join(", ");
                document.getElementById('output_container').classList.remove("hidden");
            }else if(letter !== "" && length !== "" && firstLetter !== "" && lastLetter === ""){
                const arrayOfResult = findWordByLettersAndBackWordOfArray(words,letter);
                const findWantedWords = wantedWords(arrayOfResult,number);
                const firstLetterFound = firstLetterMatch(findWantedWords, firstLetter);
                const uniqueArrayOfResult2 = removeDuplicateWords(firstLetterFound);
                output.innerText = uniqueArrayOfResult2.join(", ");
                document.getElementById('output_container').classList.remove("hidden");
            }else if(letter !== "" && length !== "" && firstLetter !== "" && lastLetter !== ""){
                const arrayOfResult = findWordByLettersAndBackWordOfArray(words,letter);
                const findWantedWords = wantedWords(arrayOfResult,number);
                const firstLetterFound = firstLetterMatch(findWantedWords, firstLetter);
                const lastLetterFound = lastLetterMatch(firstLetterFound,lastLetter);
                const uniqueArrayOfResult2 = removeDuplicateWords(lastLetterFound);
                output.innerText = uniqueArrayOfResult2.join(", ");
                document.getElementById('output_container').classList.remove("hidden");

            }else if(letter !== "" && length === "" && firstLetter !== "" && lastLetter === ""){
                const arrayOfResult = findWordByLettersAndBackWordOfArray(words,letter);
                const firstLetterFound = firstLetterMatch(arrayOfResult, firstLetter);
                const uniqueArrayOfResult2 = removeDuplicateWords(firstLetterFound);
                output.innerText = uniqueArrayOfResult2.join(", ");
                document.getElementById('output_container').classList.remove("hidden");

            }else if(letter !== "" && length === "" && firstLetter === "" && lastLetter !== ""){
                const arrayOfResult = findWordByLettersAndBackWordOfArray(words,letter);
                const lastLetterFound = lastLetterMatch(arrayOfResult,lastLetter);
                const uniqueArrayOfResult2 = removeDuplicateWords(lastLetterFound);
                output.innerText = uniqueArrayOfResult2.join(", ");
                document.getElementById('output_container').classList.remove("hidden");

            }else if(letter !== "" && length === "" && firstLetter !== "" && lastLetter !== ""){
                const arrayOfResult = findWordByLettersAndBackWordOfArray(words,letter);
                const firstLetterFound = firstLetterMatch(arrayOfResult, firstLetter);
                const lastLetterFound = lastLetterMatch(firstLetterFound, lastLetter);
                const uniqueArrayOfResult2 = removeDuplicateWords(lastLetterFound);
                output.innerText = uniqueArrayOfResult2.join(", ");
                document.getElementById('output_container').classList.remove("hidden");
            }
            document.getElementById('letter').value = "";
            document.getElementById('length').value = "";
            document.getElementById('first_letter').value = "";
            document.getElementById('last_letter').value = "";

        })