let counter = 0;
const reloadPage = () => {
  if (counter === 0) {
    return null;
  } else {
    counter++;
    setTimeout(() => {
      return window.location.reload();
    }, 1000);
  }
};
export default reloadPage;
