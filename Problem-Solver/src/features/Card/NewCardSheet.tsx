import { useForm } from "react-hook-form";
import Sheet from "../Sheet/Sheet";
import "./styles/newCardSheet.scss";
import cardSchema, { NewCardFormType } from "./validations/newCard.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { spaceCardNumber } from "@/utils/spaceCardNumber";
import { useState } from "react";
import { useUpdate } from "@/hooks/useUpdate";
import toast from "react-hot-toast";
import Loading from "@/components/Loading/Loading";
type Props = {
  openSheet: boolean;
  onClose: () => void;
};
function NewCardSheet({ openSheet, onClose }: Props) {
  const [inputValue, setInputValue] = useState("");
  const { postCard , loading } = useUpdate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    reset,
  } = useForm<NewCardFormType>({
    resolver: zodResolver(cardSchema),
  });
  const onSubmit = async (data: NewCardFormType) => {
    try {
      await postCard(data);
      onClose();
      toast.success("Successfully added.")
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <Sheet
      onClose={() => {
        reset();
        setInputValue("");
        onClose();
      }}
      open={openSheet}
      style={{ width: "400px" }}>
      <Sheet.Header onClose={onClose} headerText="add new card" />
      <Sheet.Body>
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
      </Sheet.Body>
      <Sheet.Footer>
        <div>
          <button
            style={{
              backgroundColor: !isValid ? "#4a4ae842" : "",
              cursor: !isValid ? "not-allowed" : "",
            }}
            disabled={!isValid}
            className="newCard__button"
            type="submit"
            onClick={handleSubmit(onSubmit)}>
            {loading ? <Loading /> : "Save card"}
          </button>
        </div>
      </Sheet.Footer>
    </Sheet>
  );
}

export default NewCardSheet;
