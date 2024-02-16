'use client';
import { FC, useEffect, useState } from "react";

interface Props {
  className?: string;
}

const HtmlButton: FC<Props> = ({className}) => {
  const [text, setText] = useState("I'm server rendered");
  useEffect(() => {
    setText("I'm browser rendered");
  }, []);

  return <button className={className} onClick={() => alert("click")}>{text}</button>;
};

export default HtmlButton;
