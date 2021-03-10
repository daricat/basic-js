const alphabit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
    constructor (direct = true) {
      this.direct = direct;
    }
  
    encrypt(message, key) {
        if (arguments.length === 0 || arguments.length === 1) {throw new Error();};
        let readyString = "";
        let upperCaseWord = message.toUpperCase();
        let rightKey = this.transformKey(key, upperCaseWord);              
        for ( let i = 0, j = 0; i < upperCaseWord.length; i += 1, j += 1) {
            if ( /[a-zA-Z]/.test(upperCaseWord[i]) ) {
              let indexLetterWord = alphabit.indexOf(upperCaseWord[i]);;
              let indexLetterKey = alphabit.indexOf(rightKey[j]);
              let indexLetterEncrypt = 0;
              ((indexLetterWord + indexLetterKey) >= alphabit.length) ? 
              (indexLetterEncrypt = Math.abs(indexLetterWord + indexLetterKey - alphabit.length)) : 
              (indexLetterEncrypt = Math.abs(indexLetterWord + indexLetterKey));
      
              readyString += alphabit.charAt(indexLetterEncrypt);
            } else {
              readyString += upperCaseWord[i];
              j -= 1;
            }    
        }
        return (this.direct) ? (readyString) : (readyString.split('').reverse().join(''));  
    }    

    decrypt(encryptedMessage, key) {
      if (arguments.length === 0 || arguments.length === 1) {throw new Error();};
      let readyString = "";
      let upperCaseEncryptedWord = encryptedMessage.toUpperCase();
      let rightKey = this.transformKey(key, upperCaseEncryptedWord);      
      for ( let i = 0, j = 0; i < upperCaseEncryptedWord.length; i += 1, j += 1) {
        if (/[a-zA-Z]/.test(upperCaseEncryptedWord[i])) {
      		let indexLetterWord = alphabit.indexOf(upperCaseEncryptedWord[i]);
      		let indexLetterKey = alphabit.indexOf(rightKey[j]);
      		let indexLetterEncrypt = 0;
      		indexLetterWord - indexLetterKey >= 0
        	? (indexLetterEncrypt = Math.abs(indexLetterWord - indexLetterKey))
        	: (indexLetterEncrypt = Math.abs(
            indexLetterWord - indexLetterKey + alphabit.length
          	));      		
      		readyString += alphabit.charAt(indexLetterEncrypt);
    		} else {
      		readyString += upperCaseEncryptedWord[i];
      		j -= 1;
    		}
      }
      readyString = (this.direct) ? (readyString) : (readyString.split('').reverse().join(''));
      return readyString;
    }

    transformKey(key, upperCaseEncryptedWord) {
      let rightKey = '';
      if (upperCaseEncryptedWord.match(/[a-zA-Z]/g) === null) {
        rightKey = key;
      } else {
        rightKey =
      	  key.length <= upperCaseEncryptedWord.match(/[a-zA-Z]/g).length
          ? key
            .padEnd(upperCaseEncryptedWord.match(/[a-zA-Z]/g).length, key)
            .toUpperCase()
          : key
            .slice(0, upperCaseEncryptedWord.match(/[a-zA-Z]/g).length)
            .toUpperCase();
      }
      return rightKey;
    }
}

module.exports = VigenereCipheringMachine;
