/*
 * Tuesday, Feb 27th 2024
 * Daily Algorithm Challenge
 *
 * Title: Alphanumeric String Sort
 * Description:
 * Taking a string as input sort the string characters with the following rules:
 *   - Numbers go after Letters
 *   - Uppercase letters go after Lowercase
 *   - Odd numbers go before Even numbers
 *   - Any character that is not a letter or number should go after the letters and numbers
 *
 *   i.e.: abeCD4®
*/

class AlphanumericStringSort {

  static getSorted(input) {

    const asciiSections = {
      lettersLowerCase: [],
      lettersUpperCase: [],
      numbers: [],
      anyOtherCharacters: []
    };

    input = input.trim().replace(' ', '');

    for (const iterator of input) {
    
      const chartCode = iterator.charCodeAt(0);

      if (chartCode >= 97 && chartCode <= 122) {
        asciiSections.lettersLowerCase.push(chartCode);
        continue;
      }

      if (chartCode >= 65 && chartCode <= 90) {
        asciiSections.lettersUpperCase.push(chartCode);
        continue;
      }

      if (chartCode >= 48 && chartCode <= 57) {
        asciiSections.numbers.push(parseInt(iterator));
        continue;
      }

      asciiSections.anyOtherCharacters.push(chartCode);

    }

    const sortFunction = (a, b) => a - b;
    const sortOddEvenFunction = (a, b) => b % 2 - a % 2 || a - b;
    const getChartFunction = value => String.fromCharCode(value);

    asciiSections.lettersLowerCase.sort(sortFunction);
    asciiSections.lettersUpperCase.sort(sortFunction);
    asciiSections.numbers.sort(sortFunction);
    asciiSections.numbers.sort(sortOddEvenFunction);
    asciiSections.anyOtherCharacters.sort(sortFunction);

    let output = '';

    output += asciiSections.lettersLowerCase.map(getChartFunction).join('');
    output += asciiSections.lettersUpperCase.map(getChartFunction).join('');
    output += asciiSections.numbers.join('');
    output += asciiSections.anyOtherCharacters.map(getChartFunction).join('');

    console.log('Input: ', input);
    console.log('Output: ', output);
    return output;
 
  }

}

module.exports = { AlphanumericStringSort };
