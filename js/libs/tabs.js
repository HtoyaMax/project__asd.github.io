// tabs

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".navigation-career__title");
  const tabContents = document.querySelectorAll(".content-career__body");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab) => tab.classList.remove("tab-active"));
      tab.classList.add("tab-active");
      tabContents.forEach((content) => (content.style.display = "none"));
      tabContents[index].style.display = "block";
    });
  });
});
