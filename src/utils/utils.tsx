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
  if (/^[a-zA-Z]+$/.test(card)) {
    return false;
  }
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
 * Formats number to dollar $
 * @param amount - amount to be formated
 * @returns Fomated dollar or undefined
 */
export function formatCurrency(amount: string | number): string | undefined {
  if(!amount) return undefined
  const currencyCol = amount.toLocaleString("en-US", {
    currency: "USD",
    style: "currency",
  });
  return currencyCol;
}

/**
 * Get total from Cart
 * @param arr - Array of objects with price and quantity 
 * @returns Total amount 
 */
export function getCartTotal(arr: any[]) {
  if(!arr || arr.length === 0) return arr 
  return arr.reduce((acc, current) => acc + current.price * current.quantity, 0)
}

/**
 * Validates year and month
 * @param value Input String
 * @returns String formatted and validated  
 */
export const expirationDateFormat = (value: string): string => {
  const month = value.substring(0, 2).replace(/[^0-9]/g, "");
  const year = value.substring(2, 7).replace(/[^0-9]/g, "");

  let monthValidated = month;
  if (month.length === 2) {
    monthValidated = Number(month) <= 12 ? month : "";
  }

  let yearValidated = year;
  if (year.length === 4) {
    yearValidated = Number(year) >= 2025 ? year : "";
  }

  const formatter =
    monthValidated.replace(/\//g, "") +
    (value.length > 2 ? "/" : "") +
    yearValidated.replace(/\//g, "");

  return formatter;
};