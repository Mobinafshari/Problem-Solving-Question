import useClickOutside from "@/hooks/useClickOutside";
import "./styles/Sheet.scss";
import { RxCross1 } from "react-icons/rx";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  onClose: () => void;
  open : boolean
};
function Sheet({ children, onClose , open}: Props) {
  const ref = useClickOutside<HTMLDivElement>(onClose);
  return (
    <>

      <div
        ref={ref}
        className="sheet"
        style={{ bottom: open ? "0" : "-700px" }}>
        {children}
      {open && <div className="sheet-backdrop" onClick={onClose}></div>}

      </div>
    </>
  );
}

type HeaderProps = { onClose: () => void; headerText: string };
const Header = ({ onClose, headerText }: HeaderProps) => {
  return (
    <div className="sheet__header">
      <p>{headerText}</p>
      <RxCross1
        className="sheet__header-icon"
        size="20"
        onClick={onClose}
      />
    </div>
  );
};

const Body = ( {children} : { children : ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

const Footer = ({ children }: { children: ReactNode }) => {
  return <div className="sheet__footer">{children}</div>;
};

Sheet.Header = Header;
Sheet.Body = Body;
Sheet.Footer = Footer;

export default Sheet;
