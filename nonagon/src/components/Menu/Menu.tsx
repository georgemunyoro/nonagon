import { MenuOption as IMenuOption, MenuProps } from "./Menu.types";
import clsx from "clsx";

export const Menu = ({
  options,
  onClickMenuOption,
  isOpen,
  ...rest
}: MenuProps) => {
  return (
    <div
      {...rest}
      className={clsx(
        "shadow-[0px_4px_10px_0px] shadow-gray-300 rounded-md w-[250px] duration-100",
        {
          "h-[0px]": !isOpen,
        }
      )}
    >
      {options?.map((option, index) => {
        const isSection = "section" in option;

        if (isSection) {
          return (
            <div className="py-2">
              <MenuSection
                label={option.section}
                options={option.options}
                onClickMenuOption={(e) => onClickMenuOption?.(e)}
              />
            </div>
          );
        }

        return (
          <MenuOption
            key={index}
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
