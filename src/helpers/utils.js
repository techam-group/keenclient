export const truncate = (str, length = 20, ending = "...") =>
  str.length > length ? `${str.substring(0, length - ending.length)} ${ending}` : str;
