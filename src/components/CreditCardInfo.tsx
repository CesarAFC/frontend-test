import CreditCardInput from "./CreditCardInput";
import Input from "./Input";
import Label from "./Label";

type CreditCardInfoProps = {};

function CreditCardInfo({}: CreditCardInfoProps) {

    const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const form = event.target;
        const dataForm = new FormData(form);
        const card = dataForm.get("card");
        console.log("### ~ card:", card);

    }

  return (
    <section>
      <h5>Payment</h5>
      <p>All transactions are secured and encrypted</p>

      <form onSubmit={handleSubmitForm} className="flex gap-2 items-center flex-col">

        <CreditCardInput />
        <Label htmlFor="amount">Expiration Date</Label>
        <Input type="month" placeholder="Expiration Date" />

        <Label htmlFor="amount">Security Code</Label>
        <Input type="number" placeholder="Security Code" />

        <Label htmlFor="amount">Name on card</Label>
        <Input type="text" placeholder="Name on card" />
        <input type="submit" />
      </form>
    </section>
  );
}

export default CreditCardInfo;
