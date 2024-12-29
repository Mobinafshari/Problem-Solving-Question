import useClickOutside from "@/hooks/useClickOutside";
import "./styles/Sheet.scss";
import { RxCross1 } from "react-icons/rx";
import { CSSProperties, ReactNode } from "react";
type Props = {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  style?: CSSProperties;
};
function Sheet({ children, onClose, open, style }: Props) {
  const ref = useClickOutside<HTMLDivElement>(onClose);
  return (
    <section
      ref={ref}
      className="sheet"
      style={{ ...style,bottom: open ? "0" : "-700px" }}>
      {open && children}
    </section>
  );
}

type HeaderProps = { onClose: () => void; headerText: string };
const Header = ({ onClose, headerText }: HeaderProps) => {
  return (
    <header className="sheet__header">
      <h2>{headerText}</h2>
      <RxCross1 className="sheet__header-icon" size="20" onClick={onClose} />
    </header>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <div className="sheet__footer">{children}</div>;
};

Sheet.Header = Header;
Sheet.Body = Body;
Sheet.Footer = Footer;

export default Sheet;
