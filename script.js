const toolButtonLong = document.querySelector(".tool-button-long");
const toolsBody = document.querySelector(".tools-body");

alert(`
  Click once for closing Tools Menu! 
  Double click for opening Tool Menu! xD
  `)

toolButtonLong.addEventListener("click", () => {
  toolButtonLong.removeAttribute("class");
  toolButtonLong.setAttribute("class", "tool-button-short");

  toolsBody.setAttribute("style", "display: none;");
});

toolButtonLong.addEventListener("dblclick", () => {
  toolButtonLong.removeAttribute("class");
  toolButtonLong.setAttribute('class', 'tool-button-long')

  toolsBody.setAttribute("style", "display: flex;");
});
