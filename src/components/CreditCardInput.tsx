import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa6";
import Label from "./Label";
import { CardFormatter } from "../utils/utils";
import { useDispatch } from "react-redux";
import { handleForm } from "../actions";
import { useTypedShoppingSelector } from "../hooks/useTypedSelector";

type CreditCardInputProps = {
};

const IssuerNumbers: Record<string, any> = {
  "3": <FaCcAmex />,
  "4": <FaCcVisa />,
  "5": <FaCcMastercard />,
};

function CreditCardInput({}: CreditCardInputProps) {
  const dispatch = useDispatch();
  const {cardInformation: {card}} = useTypedShoppingSelector()

  const handleCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const card = event.target.value;
    dispatch(handleForm({
      name: 'card',
      value: card.trim(),
    }))
  };

  const issuerValidation = (card: string) => {
    const identificationNumber = card.substring(0, 1);
    return IssuerNumbers[identificationNumber] || undefined;
  };
  return (
    <div>
      <Label htmlFor="name">Card number</Label>
      <div className="flex items-center gap-2 px-2 border border-slate-300 rounded focus-within:outline focus-within:outline-green-300">
        <span aria-label="issuer-icon">{issuerValidation(card)}</span>
        <input
          className="w-full p-2 rounded outline-none"
          type="text"
          placeholder="Card number"
          required
          value={CardFormatter(card)}
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
