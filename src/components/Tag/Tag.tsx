import { Close } from "styled-icons/fa-solid";
import { Button } from "../Button/Button";
import { TagProps } from "./Tag.types";

export const Tag = ({ showClose = true, onClose, ...rest }: TagProps) => {
  return (
    <Button
      variant="secondary"
      className="!px-2 !m-0 h-7 text-sm shadow-sm border-[1px] border-browk-gray-l hover:!bg-browk-gray-l"
      {...rest}
    >
      <div className="flex items-center gap-1 font-bold">
        {rest.children}
        {showClose && (
          <Close
            onClick={onClose}
            className="text-browk-gray-k hover:!text-browk-black"
            size={12}
          />
        )}
      </div>
    </Button>
  );
};
