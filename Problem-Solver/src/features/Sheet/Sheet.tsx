import useClickOutside from "@/hooks/useClickOutside";
import "./styles/cardSheet.scss";
import { RxCross1 } from "react-icons/rx";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  onClose: () => void;
  open : boolean
};
function Sheet({ children, onClose }: Props) {
  const ref = useClickOutside<HTMLDivElement>(onClose);
  return (
    <>
      <div
        ref={ref}
        className="card-sheet"
        style={{ bottom: open ? "0" : "-700px" }}>
        {children}
      </div>
    </>
  );
}

type SheetHeaderProps = { onClose: () => void; headerText: string };
const SheetHeader = ({ onClose, headerText }: SheetHeaderProps) => {
  return (
    <div className="card-sheet__header">
      <p>{headerText}</p>
      <RxCross1
        className="card-sheet__header-icon"
        size="20"
        onClick={onClose}
      />
    </div>
  );
};

export default Sheet;
