export const removeImgTags = (markdownString: string): string => {
  // Define a regular expression to match <img> tags
  const imgTagRegex = /<img\b[^>]*>/g;

  // Replace all occurrences of <img> tags with an empty string
  const resultString = markdownString.replace(imgTagRegex, '');

  return resultString;
};
