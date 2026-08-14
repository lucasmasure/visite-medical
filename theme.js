(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");

  function render(theme) {
    if (!btn) return;
    var isDark = theme === "sombre";
    btn.querySelector(".theme-toggle__icon").textContent = isDark ? "☀️" : "🌙";
    btn.querySelector(".theme-toggle__label").textContent = isDark ? "Classique" : "Sombre";
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
  }

  render(root.getAttribute("data-theme") === "sombre" ? "sombre" : "classique");

  if (btn) {
    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "sombre" ? "sombre" : "classique";
      var next = current === "sombre" ? "classique" : "sombre";
      localStorage.setItem("rvm-theme", next);
      root.setAttribute("data-theme", next);
      render(next);
    });
  }
})();
