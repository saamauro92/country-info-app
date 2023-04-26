
export const formatList = (list, separator = ", ") =>
Object.values(list)
  .map((item) => item.name || item)
  .join(separator);
