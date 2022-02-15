/**
 * Generates an array of
 * @param cardType the name of the card type so we can prefill it with some initial digits
 */
function generatePrefills(cardType) {
  let prefills = [];
  let secondDigit;

  switch (cardType) {
    case "american-express":
      // the first digit of american express is 3
      // the second digit of american express is 4 or 7
      // the total length is 15
      secondDigit = [4, 7][Math.floor(Math.random() * 2)];
      prefills = Array(12)
        .fill(0)
        .map(() => Math.floor(Math.random() * 10));
      return [3, secondDigit].concat(prefills);

    case "visa":
      // the first digit of a visa is 4
      prefills = Array(14)
        .fill(0)
        .map(() => Math.floor(Math.random() * 10));
      return [4].concat(prefills);

    case "mastercard":
      // the first digit of a mastercard is 5
      // the second digits should be from 0 - 5
      // the total length is 16 like normal
      secondDigit = [0, 1, 2, 3, 4, 5][Math.floor(Math.random() * 6)];
      prefills = Array(14)
        .fill(0)
        .map(() => Math.floor(Math.random() * 10));
      return [5, secondDigit].concat(prefills);

    case "discover":
      // the first 4 digits of discover card is 'usually' 6011
      prefills = Array(11)
        .fill(0)
        .map(() => Math.floor(Math.random() * 10));
      return [6, 0, 1, 1].concat(prefills);

    default:
      return [];
  }
}

/**
 * From the generated prefills, calculates the last checksum digits that needs to be added
 *
 * @param cardNumber Array of integer that represents the credit card number
 */
function addCheckSum(cardNumber) {
  let checkSum = 0;

  // Reason for this check offset is to figure out whether the final list is going
  // to be even or odd which will affect calculating the check_sum.
  // This is to avoid reversing the list back and forth which is specified on the Luhn algorithm.
  const checkOffset = (cardNumber.length + 1) % 2;

  checkSum = cardNumber.reduce((sum, num, index) => {
    if ((index + checkOffset) % 2 === 0) {
      const doubled_num = num * 2;
      sum += doubled_num > 9 ? doubled_num - 9 : doubled_num;
    } else {
      sum += num;
    }
    return sum;
  }, 0);

  // making sure the checksum is within 10 range
  return 10 - (checkSum % 10);
}

export default function generateCardNumber(cardType) {
  const prefills = generatePrefills(cardType);
  const checkSum = addCheckSum(prefills);
  prefills.push(checkSum);
  return prefills.join("");
}
