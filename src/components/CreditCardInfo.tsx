import Input from "./Input";
import Label from "./Label";
import { expirationDateFormat } from "../utils/utils";
import { useDispatch } from "react-redux";
import { useTypedShoppingSelector } from "../hooks/useTypedSelector";
import { handleForm } from "../actions";
import { CardInformation } from "../types/store.types";

function CreditCardInfo() {
  const { cardInformation } = useTypedShoppingSelector();
  const dispatch = useDispatch();

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    const name = target.name as keyof CardInformation;
    dispatch(
      handleForm({
        name,
        value,
      })
    );
  };

  return (
    <>
      <div className="flex gap-2 flex-col md:flex-row">
        <div className="w-full flex flex-col">
          <Label htmlFor="amount">Expiration Date</Label>
          <Input
            name="expirationDate"
            type="text"
            placeholder="mm/yy"
            value={expirationDateFormat(cardInformation.expirationDate)}
            onChange={handleChange}
            minLength={7}
            maxLength={7}
          />
        </div>
        <div className="w-full flex flex-col">
          <Label htmlFor="amount">Security Code</Label>
          <Input
            name="securityCode"
            maxLength={3}
            type="text"
            placeholder="Security Code"
            onChange={handleChange}
            value={cardInformation.securityCode}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <Label htmlFor="amount">Name on card</Label>
        <Input
          name="holderName"
          type="text"
          placeholder="Name on card"
          onChange={handleChange}
          value={cardInformation.holderName}
        />
      </div>
    </>
  );
}

export default CreditCardInfo;
