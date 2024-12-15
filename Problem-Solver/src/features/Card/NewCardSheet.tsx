import { useForm } from "react-hook-form";
import Sheet from "../Sheet/Sheet";
import "./styles/newCardSheet.scss";
import cardSchema, { NewCardFormType } from "./validations/newCard.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdate } from "@/hooks/useUpdate";
import toast from "react-hot-toast";
import Loading from "@/components/Loading/Loading";
import NewCardForm from "./NewCardForm";
type Props = {
  openSheet: boolean;
  onClose: () => void;
};
function NewCardSheet({ openSheet, onClose }: Props) {
  const { postCard, loading } = useUpdate();
  const form = useForm<NewCardFormType>({
    resolver: zodResolver(cardSchema),
  });
  const isValid = form.formState.isValid;
  const onSubmit = async (data: NewCardFormType) => {
    try {
      await postCard(data);
      onClose();
      toast.success("Successfully added.");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Sheet
      onClose={() => {
        form.reset();
        // formRef.current?.clearInput();
        onClose();
      }}
      open={openSheet}
      style={{ width: "400px" }}>
      <Sheet.Header onClose={onClose} headerText="add new card" />
      <Sheet.Body>
        <NewCardForm {...form} onSubmit={onSubmit} openSheet={openSheet}/>
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
            onClick={form.handleSubmit(onSubmit)}>
            {loading ? <Loading /> : "Save card"}
          </button>
        </div>
      </Sheet.Footer>
    </Sheet>
  );
}

export default NewCardSheet;
