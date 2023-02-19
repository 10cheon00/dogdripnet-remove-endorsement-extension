const removeEndorsement = () => {
  const endorsementElements = document.querySelectorAll(".comment-content .action");
  endorsementElements.forEach(element => {
    element.remove();
  });
  console.log("Endorsements are removed!");
};

let observer = new MutationObserver((mutations, observer) => {
  removeEndorsement();
});

observer.observe(document, {
  childList: true,
  subtree: true
});

window.onload = removeEndorsement;