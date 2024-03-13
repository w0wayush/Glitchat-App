import React from "react";
import Spinner from "./Spinner";

type ButtonProps = {
  text?: string;
  className?: string;
  secondary?: boolean;
  onClick?: () => void;
  loading?: boolean;
};

const Button = ({
  text = "Button",
  className,
  secondary,
  onClick,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      className={`py-2 px-9 flex gap-3 justify-center rounded-full text-white border-2 border-white hover:bg-myPink transition-all hover:drop-shadow-lg ${className} ${
        secondary ? "bg-myPink" : "bg-myBlue"
      }
      ${loading && "cursor-wait "}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading && <Spinner />}
      {text}
    </button>
  );
};

export default Button;
