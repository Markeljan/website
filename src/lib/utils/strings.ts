export const shortenString = (text: string, end: number = 180) => {
  return text?.length > end ? `${text.slice(0, end)}...` : text;
};
