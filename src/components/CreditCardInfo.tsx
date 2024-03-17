import Input from "./Input";
import Label from "./Label";

type CreditCardInfoProps = {};

function CreditCardInfo({}: CreditCardInfoProps) {
  return (
    <>
      <div className="flex gap-2 flex-col md:flex-row">
        <div className="w-full flex flex-col">
          <Label htmlFor="amount">Expiration Date</Label>
          <Input
            name="expirationDate"
            type="month"
            placeholder="Expiration Date"
          />
        </div>
        <div className="w-full flex flex-col">
          <Label htmlFor="amount">Security Code</Label>
          <Input
            name="securityCode"
            maxLength={3}
            type="text"
            placeholder="Security Code"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <Label htmlFor="amount">Name on card</Label>
        <Input name="holderName" type="text" placeholder="Name on card" />
      </div>
    </>
  );
}

export default CreditCardInfo;
