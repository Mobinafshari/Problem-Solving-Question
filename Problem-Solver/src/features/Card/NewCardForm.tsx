import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { NewCardFormType } from "./validations/newCard.validation";
import { useEffect, useState } from "react";
import { spaceCardNumber } from "@/utils/spaceCardNumber";

type Props = UseFormReturn<NewCardFormType> & {
  onSubmit: SubmitHandler<NewCardFormType>;
};

const NewCardForm = ({
  formState: { errors },
  handleSubmit,
  onSubmit,
  register,
  setValue,
}: Props) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    return () => {
      setInputValue("");
    };
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="newCard">
        <input
          style={{ borderBottom: errors.fullName ? "1px solid red" : "" }}
          type="text"
          placeholder="Full Name"
          className="newCard__input"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p style={{ color: "red", fontSize: "11px" }}>
            {errors.fullName.message}
          </p>
        )}
        <input
          style={{ borderBottom: errors.cardNumber ? "1px solid red" : "" }}
          type="text"
          placeholder="Card Number"
          className="newCard__input"
          value={inputValue}
          onChange={(e) => {
            const rawValue = e.target.value.replace(/\s+/g, "");
            setValue("cardNumber", rawValue);
            setInputValue(spaceCardNumber(rawValue));
          }}
        />
        {errors.cardNumber && (
          <p style={{ color: "red", fontSize: "11px" }}>
            {errors.cardNumber.message}
          </p>
        )}

        <input
          style={{ borderBottom: errors.expireDate ? "1px solid red" : "" }}
          type="text"
          placeholder="Expire Date"
          className="newCard__input"
          {...register("expireDate")}
        />
        {errors.expireDate && (
          <p style={{ color: "red", fontSize: "11px" }}>
            {errors.expireDate.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default NewCardForm;
