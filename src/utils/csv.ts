export const getCsvLines = (csvText: string) =>
  csvText.split(/\r\n|\n/).filter(Boolean);
