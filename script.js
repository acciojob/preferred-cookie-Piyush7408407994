function setCookie(name, value, days = 30) {
  const date = new Date();
  date.setTime(date.getTime() + (days*24*60*60*1000));
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

window.addEventListener("DOMContentLoaded", () => {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
});

document.getElementById("fontForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const size = document.getElementById("fontsize").value;
  const color = document.getElementById("fontcolor").value;

  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  document.documentElement.style.setProperty("--fontsize", size + "px");
  document.documentElement.style.setProperty("--fontcolor", color);

  alert("Preferences saved successfully!");
});