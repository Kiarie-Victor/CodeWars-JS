/*Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""*/

function order(words){
    if (words === '') {
      return '';
    }
  
    var word = words.split(" ");
  
    word.sort(function compare(word1, word2) {
    var number1 = parseInt(word1.match(/\d+/)[0]);
    //\d+/ is flag that checks for the presence of a digit in the string and returns the digit as  string
    var number2 = parseInt(word2.match(/\d+/)[0]);
      return number1 - number2;
    });
  
    return word.join(' ');
  } 