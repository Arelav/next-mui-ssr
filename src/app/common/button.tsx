"use client";
import Button, { ButtonProps } from "@mui/material/Button";
import { FC, PropsWithChildren, useEffect, useState } from "react";

interface Props extends ButtonProps {
  className?: string;
}

const CommonButton: FC<PropsWithChildren<Props>> = ({ className, children }) => {
  const [text, setText] = useState("I'm server rendered");
  useEffect(() => {
    setText("I'm browser rendered");
  }, []);

  return (
    <Button
      className={className}
      variant="contained"
      onClick={() => alert("click")}
    >
      {children ? children : text}
    </Button>
  );
};

export default CommonButton;
