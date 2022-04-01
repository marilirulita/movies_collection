const getStorageData = (name, data) => {
  const storage = JSON.parse(localStorage.getItem(name));
  if (typeof storage !== 'undefined') {
    localStorage.setItem(name, JSON.stringify(data));
    dispatch(getData(data));
  }
};
