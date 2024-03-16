import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa6";
import Label from "./Label";
import { useState } from "react";
import { CardFormatter, luhnValidation } from "../utils/utils";

type CreditCardInputProps = {
  setIsCardValid: (event: boolean) => void
};

const IssuerNumbers: Record<string, any> = {
  "3": <FaCcAmex />,
  "4": <FaCcVisa />,
  "5": <FaCcMastercard />,
};

function CreditCardInput({setIsCardValid}: CreditCardInputProps) {
  const [cardNumber, setCardNumber] = useState<string>("");

  const handleCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const card = event.target.value;
    setCardNumber(card.trim());
    const isValidCard = luhnValidation(card.trim())
    setIsCardValid(isValidCard)
  };

  const issuerValidation = (card: string) => {
    const identificationNumber = card.substring(0, 1);
    return IssuerNumbers[identificationNumber] || undefined;
  };
  return (
    <div>
      <Label htmlFor="name">Card number</Label>
      <div className="flex items-center gap-2 px-2 border border-slate-300 rounded focus-within:outline focus-within:outline-slate-500">
        <span>{issuerValidation(cardNumber)}</span>
        <input
          className="p-2 rounded outline-none"
          type="text"
          placeholder="Card number"
          required
          value={CardFormatter(cardNumber)}
          onChange={handleCardNumber}
          name="card"
          minLength={19}
          maxLength={19}
        />
      </div>
    </div>
  );
}

export default CreditCardInput;
