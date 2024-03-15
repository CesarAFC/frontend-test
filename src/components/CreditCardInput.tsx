import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa6";
import Label from "./Label";
import { useState } from "react";
import { CardFormatter, luhnValidation } from "../utils/utils";

type CreditCardInputProps = {};

const IssuerNumbers: Record<string, any> = {
  "3": <FaCcAmex />,
  "4": <FaCcVisa />,
  "5": <FaCcMastercard />,
};

function CreditCardInput({}: CreditCardInputProps) {
  const [cardNumber, setCardNumber] = useState<string>("");

  const handleCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const card = event.target.value;
    setCardNumber(card.trim());
    issuerValidation(card);
  };

  const issuerValidation = (card: string) => {
    const identificationNumber = card.substring(0, 1);
    return IssuerNumbers[identificationNumber] || undefined;
  };
  return (
    <>
      <Label htmlFor="name">Card number</Label>

      <div className="flex items-center gap-2 px-2 rounded focus-within:outline">
        <span>{issuerValidation(cardNumber)}</span>
        <input
          className="p-2 rounded outline-none"
          type="text"
          placeholder="Card number"
          required
          value={CardFormatter(cardNumber)}
          onChange={handleCardNumber}
          name="card"
          maxLength={19}
        />
      </div>

      <p>Card is: {luhnValidation(cardNumber) ? "valid" : "invalid"}</p>
    </>
  );
}

export default CreditCardInput;
