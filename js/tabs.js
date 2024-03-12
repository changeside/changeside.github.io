document.addEventListener("DOMContentLoaded", async (event) => {
  const sidebarProjectsList = document
    .getElementById("linktabs")
    .querySelectorAll(".tablinks");

  const projectsList = document
    .getElementById("content")
    .querySelectorAll(".tab");

  let tab = getURLSearchParam("tab") || "home";
  switchTab(tab);

  sidebarProjectsList.forEach((project) => {
    project.onclick = () => switchTab(project.id);
  });

  function switchTab(tabName) {
    sidebarProjectsList.forEach((project) => {
      project.id !== tabName
        ? project.classList.remove("active")
        : project.classList.add("active");
    });

    projectsList.forEach((projectTab) => {
      projectTab.style.display =
        projectTab.getAttribute("project-id") !== tabName ? "none" : "block";
    });

    if (
      "URLSearchParams" in window &&
      "history" in window &&
      "replaceState" in window.history
    ) {
      try {
        let searchParams = new URLSearchParams(window.location.search);
        searchParams.set("tab", tabName);
        window.history.replaceState(null, "", "?" + searchParams.toString());
      } catch (error) {
        /**
         * Might be missing secure-context if not served via https.
         * In this case we just don't modify the search params
         */
      }
    }

    document
    $('.Video').each(function() {
      var el_src = $(this).attr("src");
      $(this).attr("src",el_src);
    });
  }
});

function getURLSearchParam(paramName) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (pair[0] === paramName) {
      return pair[1];
    }
  }
  return false;
}
