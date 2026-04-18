export type FontWeight = "regular" | "medium" | "semibold" | "bold" | "italic";

export const getFontFamily = (weight: FontWeight) => {
  switch (weight) {
    case "regular":
      return "Satoshi-Regular";
    case "medium":
      return "Satoshi-Medium";
    case "semibold":
      return "Satoshi-SemiBold";
    case "bold":
      return "Satoshi-Bold";
    case "italic":
      return "Satoshi-Italic";
    default:
      return "Satoshi-Regular";
  }
};
