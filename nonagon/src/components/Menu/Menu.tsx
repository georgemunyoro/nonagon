import { useEffect, useRef, useState } from "react";
import { MenuOption as IMenuOption, MenuProps } from "./Menu.types";
import clsx from "clsx";
import { useClickAway } from "react-use";

export const Menu = ({
  options,
  onClickMenuOption,
  isOpen,
  position,
  onClose,
  ...rest
}: MenuProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [actualPosition, setActualPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const [isActuallyOpen, setIsActuallyOpen] = useState(isOpen);

  useEffect(() => {
    if (!isOpen) {
      setIsActuallyOpen(false);
      return;
    }

    if (!position) return;

    const parentRect =
      elementRef.current?.parentElement?.getBoundingClientRect();
    const elementRect = elementRef.current?.getBoundingClientRect();

    if (!parentRect || !elementRect) return;

    const willOverflowRight = position.x + elementRect.width > parentRect.right;
    const willOverflowBottom =
      position.y + elementRect.height > parentRect.bottom;
    const willOverflowLeft = position.x < parentRect.left;
    const willOverflowTop = position.y < parentRect.top;

    let actualX = position.x;
    let actualY = position.y;

    if (willOverflowRight) actualX = parentRect.right - elementRect.width;
    if (willOverflowBottom) actualY = parentRect.bottom - elementRect.height;
    if (willOverflowLeft) actualX = parentRect.left;
    if (willOverflowTop) actualY = parentRect.top;

    setActualPosition({
      x: actualX,
      y: actualY,
    });

    setIsActuallyOpen(true);
  }, [position, isOpen]);

  useClickAway(elementRef, () => {
    if (onClose) onClose();
  });

  return (
    <div
      {...rest}
      ref={elementRef}
      className={clsx(
        "shadow-[0px_4px_10px_0px] shadow-gray-300 rounded-md w-[250px] duration-200 bg-white",
        {
          hidden: !isActuallyOpen && !isOpen,
          "opacity-0": isOpen && !isActuallyOpen,
          absolute: position !== undefined,
        }
      )}
      style={
        position !== undefined
          ? {
              top: actualPosition?.y,
              left: actualPosition?.x,
            }
          : {}
      }
    >
      {options?.map((option, index) => {
        const isSection = "section" in option;

        if (isSection) {
          return (
            <div className={clsx("py-2")}>
              <MenuSection
                key={index}
                label={option.section}
                options={option.options}
                onClickMenuOption={(e) => onClickMenuOption?.(e)}
              />
            </div>
          );
        }

        return (
          <MenuOption
            key={option.value}
            {...option}
            onClickMenuOption={onClickMenuOption}
          />
        );
      })}
    </div>
  );
};

const MenuOption = ({
  label,
  value,
  onClickMenuOption,
}: IMenuOption & {
  onClickMenuOption: MenuProps["onClickMenuOption"];
}) => {
  return (
    <div
      className={clsx(
        "flex gap-2 w-full justify-between items-center p-2 px-4 cursor-pointer hover:bg-browk-gray-l first:rounded-t-md last:rounded-b-md"
      )}
      onClick={() => onClickMenuOption?.(value)}
    >
      <label className="pointer-events-none">{label}</label>
    </div>
  );
};

const MenuSection = ({
  label,
  options,
  onClickMenuOption,
}: {
  label: string;
  options: IMenuOption[];
  onClickMenuOption: (value: IMenuOption["value"]) => void;
}) => {
  return (
    <>
      <div
        className={clsx(
          "flex gap-2 w-full justify-between items-center p-2 px-4 text-sm"
        )}
      >
        <label>{label}</label>
      </div>
      {options.map((option, index) => {
        return (
          <MenuOption
            onClickMenuOption={onClickMenuOption}
            key={index}
            {...option}
          />
        );
      })}
    </>
  );
};
