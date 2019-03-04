module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let elements = /\((\d+)\).*$/ig.exec(document.title);

    Franz.setBadge('1' in elements ? elements[1] : 0);
  };
  Franz.loop(getMessages);
};