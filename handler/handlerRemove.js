function removeTransition(e) {
  debugger;
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
};
