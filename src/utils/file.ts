export const downloadFile = (
  contentType: string,
  fileContent: string,
  title: string
) => {
  const file = generateFileFromString(fileContent, contentType);
  const downloadUrl = window.URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = downloadUrl;
  a.download = title;
  document.body.appendChild(a);
  a.click();
  URL.revokeObjectURL(downloadUrl);
};

export const generateFileFromString = (
  fileContent: string,
  contentType: string
) => {
  window.URL = window.webkitURL || window.URL;
  const file = new Blob([fileContent as BlobPart], { type: contentType });

  return file;
};
