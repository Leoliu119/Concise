function toggleMenu() {
  const menu = document.querySelector(".menu");
  const companyName = document.querySelector(".company-name");
  const isMenuOpen = menu && menu.style.display === "flex";

  if (menu) {
    menu.style.display = isMenuOpen ? "none" : "flex";
  }

  if (companyName) {
    companyName.style.display = isMenuOpen ? "none" : "flex";  // 正确切换显示
  }
}

function toggleSearch() {
  const searchOverlay = document.querySelector(".search-overlay");
  const header = document.querySelector("header");

  if (searchOverlay && header) {
    const headerHeight = header.offsetHeight;

    if (searchOverlay.style.display === "flex") {
      searchOverlay.style.display = "none";
    } else {
      searchOverlay.style.top = headerHeight + "px";
      searchOverlay.style.height = `calc(100% - ${headerHeight}px)`;
      searchOverlay.style.display = "flex";
      const input = document.querySelector(".search-overlay input");
      if (input) {
        input.focus();
      }
    }
  }
}

function handleInputFocus(e) {
  if (e.target.value === "What are you looking for?") {
    e.target.value = "";
    e.target.style.color = "#333";
  }
}

function handleInputBlur(e) {
  if (e.target.value === "") {
    e.target.value = "What are you looking for?";
    e.target.style.color = "#bbb";
  }
}

function showContent(sectionId) {
  const contents = document.querySelectorAll(".content");
  contents.forEach((content) => {
    content.style.display = "none";
  });
  const selectedContent = document.getElementById(sectionId);
  if (selectedContent) {
    selectedContent.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".search-overlay input");
  if (input) {
    input.value = "What are you looking for?";
    input.style.color = "#bbb";
  }
});


function copyToClipboard() {
  var textToCopy = document.getElementById("phoneNumber").innerText;
  navigator.clipboard
    .writeText(textToCopy)
    .then(function () {
      alert("Phone number copied to clipboard: " + textToCopy);
    })
    .catch(function (error) {
      console.error("Could not copy text: ", error);
    });
}
