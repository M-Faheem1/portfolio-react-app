export const setLocalStorageItem = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = (key, defaultValue = null) => {
  try {
    return JSON.parse(localStorage.getItem(key, defaultValue));
  } catch (error) {
    return defaultValue;
  }
};

export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};

export const addOrUpdateURLParam = (url, param_key, param_value) => {
  let updatedURL = new URL(url);
  let params = updatedURL.searchParams;

  params.set(param_key, param_value);
  updatedURL.search = params.toString();

  return updatedURL.toString();
};

export const addOrUpdateURLParamForFilters = (url, param_key, param_value) => {
  let updatedURL = addOrUpdateURLParam(url, param_key, param_value);
  return addOrUpdateURLParam(updatedURL, PAGE, FIRST_PAGE);
};

export const deleteParamFromURL = (url, param) => {
  let updatedURL = new URL(url);
  updatedURL.searchParams.delete(param);
  return updatedURL.toString();
};

export const deleteURLParamForFilter = (url, param) => {
  let updatedUrl = deleteParamFromURL(url, param);
  return addOrUpdateURLParamForFilters(updatedUrl, PAGE, FIRST_PAGE);
};

export const capitalizeString = (string) => {
  let lowerCaseString = string?.toLowerCase();
  return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
};

export const truncateFileName = (file) => {
  let splitFile = file.split('.');
  if (splitFile.length > 2) {
    let fileExtension = splitFile[splitFile.length - 1];
    let fileName = splitFile
      .splice(0, splitFile.length - 1)
      .join()
      .slice(0, 22);
    return `${fileName}.${fileExtension}`;
  } else {
    return file;
  }
};
