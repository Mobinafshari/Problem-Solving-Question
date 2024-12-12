export const convertCardNumber = (cardNumber: string): string => {
  const cardStr = cardNumber.toString();

  if (cardStr.length < 4) {
    throw new Error("Card number must be at least 4 digits long");
  }

  const maskedSection = cardStr.slice(0, -4).replace(/./g, "*");
  const lastFourDigits = cardStr.slice(-4);

  return `${maskedSection}${lastFourDigits}`;
};
