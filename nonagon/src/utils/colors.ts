export const getVariantColor = (variant: string) => {
  switch (variant) {
    case "primary":
      return "bg-browk-primary text-white";
    case "secondary":
      return "bg-red-500";
    default:
      return "bg-purple-500";
  }
};
