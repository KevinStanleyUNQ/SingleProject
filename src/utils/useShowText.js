import { useState } from "react";

export function useShowText() {
    const [modal, setModal] = useState({
        show: false,
        text: "",
      });
    
      const showModal = (value) => {
        setModal({ text: value, show: true });
        setTimeout(() => {
          setModal({ text: "", show: false });
        }, 3500);
      };
    
      return [showModal, modal.show, modal.text]
}
