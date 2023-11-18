function toggleReadMore(btn) {
  var moreText = btn.previousElementSibling;
  var btnText = btn;

  if (moreText.style.display === "inline") {
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
