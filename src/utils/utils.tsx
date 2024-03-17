/**
 * Formats Card numbers
 * @param value - Card Number
 * @returns Formatted card number
 */

export function CardFormatter(value: string): string {
  const cleanCard = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  const formatted = [];
  for (let i = 0; i < cleanCard.length; i += 4) {
      formatted.push(cleanCard.substring(i, i + 4));
    }
  return formatted.length > 1 ? formatted.join(" ") : value;
}

/**
 *  Luhn Algorithm validation
 * @param card - Card Number
 * @returns Boolean if card is valid or not
 */
export function luhnValidation(card: string): boolean {
  const cardNumberNoSpaces = card.replace(/\D/g, "");
  const digits = cardNumberNoSpaces.split("").map(Number);
  if (card.length < 13 || card.length > 19) {
    return false;
  }
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    let double = digits[i] * 2;
    if (double > 9) {
      double -= 9;
    }
    digits[i] = double;
  }
  const sum = digits.reduce((acc, current) => acc + current, 0);
  return sum % 10 === 0;
}

/**
 * 
 * @param amount 
 * @returns 
 */
export function formatCurrency(amount: string | number): string | undefined {
  if(!amount) return undefined
  const currencyCol = amount.toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
  });
  return currencyCol;
}


export function getCartTotal(arr: any[]) {
  if(!arr || arr.length === 0) return arr 
  return arr.reduce((acc, current) => acc + current.price * current.quantity, 0)
}