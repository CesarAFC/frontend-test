import Input from "./Input";
import Label from "./Label";

type CreditCardInfoProps = {};

function CreditCardInfo({}: CreditCardInfoProps) {
  return (
    <>
      <div className="flex gap-2 flex-col md:flex-row">
        <Label htmlFor="amount">Expiration Date</Label>
        <Input name="expirationDate" type="month" placeholder="Expiration Date" />

        <Label htmlFor="amount">Security Code</Label>
        <Input name="securityCode" maxLength={3} type="text" placeholder="Security Code" />
      </div>

      <Label htmlFor="amount">Name on card</Label>
      <Input name="holderName" type="text" placeholder="Name on card" />
    </>
  );
}

export default CreditCardInfo;
