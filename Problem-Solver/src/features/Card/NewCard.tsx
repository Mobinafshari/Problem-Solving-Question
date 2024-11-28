import {  useMainContext } from "@/context/Main";
import "./styles/card.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import cardSchema, { NewCardFormType } from "./validations/newCard.validation";

function NewCard() {
  const { removeNew } = useMainContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver : zodResolver(cardSchema)
  });
  const onSubmit = (values: NewCardFormType) => {
    console.log(values)
  };
  return (
    <form className="card" onSubmit={handleSubmit(onSubmit)}>
      <div className="card__wrapper">
        <label htmlFor="cardNumber" className="card__wrapper-label">
          Card Number
        </label>
        <input
          id="cardNumber"
          {...register("card")}
          type="text"
          className="card__wrapper-input"
          placeholder="Enter Card Number."
          style={{ border: errors.card?.message ? "1px solid red" : "" }}
        />
        {errors.card?.message && (
          <p className="card__wrapper-input--error">
            {String(errors.card?.message)}
          </p>
        )}
      </div>
      <div className="card__wrapper">
        <label htmlFor="cvv2Number" className="card__wrapper-label">
          cvv2
        </label>
        <input
          id="cvv2Number"
          {...register("cvv2")}
          type="text"
          className="card__wrapper-input"
          placeholder="Enter cvv2 Number."
          style={{ border: errors.cvv2?.message ? "1px solid red" : "" }}
        />
        {errors.cvv2?.message && (
          <p className="card__wrapper-input--error">
            {String(errors.cvv2?.message)}
          </p>
        )}
      </div>
      <div className="card__wrapper">
        <label htmlFor="expireDate" className="card__wrapper-label">
          Expire Date
        </label>
        <input
          id="expireDate"
          {...register("expireDate")}
          type="text"
          className="card__wrapper-input"
          placeholder="Enter Expire Date Number."
          style={{ border: errors.expireDate?.message ? "1px solid red" : "" }}
        />
        {errors.expireDate?.message && (
          <p className="card__wrapper-input--error">
            {String(errors.expireDate?.message)}
          </p>
        )}
      </div>
      <div className="card__buttons">
        <button className="card__button">Submit</button>
        <button
          className="card__button card__button-cancel"
          onClick={removeNew}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NewCard;
