const addToZero = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            } else {
                return false
            }
        }
    }
}

// Runtime is O(n^2)
// Space complexity is O(n)

const hasUniqueChars = str => {
    let uniqueChars = new Set([]);
    for (let i = 0; i < str.length; i++) {
        uniqueChars.add(str[i])
    }
    return uniqueChars.size === str.length
}

// Runtime is O(n)
// Space complexity is O(n)

const isPangram = str =>{
    let strArr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < alphabet.length; i++) {
        if(strArr.indexOf(alphabet[i]) < 0){
          return false;
        }
      }
      return true;
    }

    // runtime is O(n)
    // Space complexity is O(1)

const findLongestWord = arr => {
    let longestWord = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord) {
            longestWord = arr[i].length
        }
    }
    return longestWord
}

    // runtime is O(n)
    // Space complexity is O(n)