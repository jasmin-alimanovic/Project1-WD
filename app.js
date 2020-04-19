//----------JASMIN ALIMANOVIC-------------------

//NAV OPACITY ON SCROLL
document.getElementsByTagName("body")[0].onscroll = () => {
  if (document.body.clientWidth > 1024) {
    if (window.pageYOffset > 0) {
      document.querySelector(".nav").style.opacity = 0.5;
      document.querySelector(".nav").style.animation = "nav-anim 1s ease";
    } else {
      document.querySelector(".nav").style.opacity = 1;
      document.querySelector(".nav").style.animation = "nav-anim-rev 1s ease";
    }
  } else {
    document.querySelector(".nav").style.opacity = 1;
    document.querySelector(".nav").style.animation = "none";
  }
};
//FORM REGISTRATION
let regBtn = document.querySelector(".reg-btn");
regBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const name1 = document.querySelector(".name1");
  const name2 = document.querySelector(".name2");
  const email = document.querySelector(".email");
  const pass = document.querySelector(".pass");

  if (
    name1.value === "" ||
    name2.value === "" ||
    email.value === "" ||
    pass.value === ""
  ) {
    document.querySelector(".error").innerHTML =
      "<strong>ERROR!</strong> <br>Fill entire form";
  } else {
    document.querySelector(".error").innerHTML =
      "You are successfully registered!";
    localStorage.setItem("name1", name1.value);
    localStorage.setItem("name2", name2.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("pass", pass.value);
  }
  name1.value = "";
  name2.value = "";
  email.value = "";
  pass.value = "";
});

//FORM LOG IN

const logBtn = document.querySelector(".log-btn");

logBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const emailLog = document.querySelector(".email-log");
  const passLog = document.querySelector(".pass-log");

  const memEmail = localStorage.getItem("email");
  const memPass = localStorage.getItem("pass");
  const memName1 = localStorage.getItem("name1");
  const memName2 = localStorage.getItem("name2");

  if (emailLog.value === memEmail && passLog.value === memPass) {
    document.querySelector(
      ".log-in h2"
    ).innerHTML = `Welcome ${memName1} ${memName2}. <br>You are successfully logged in`;
    emailLog.value = "";
    passLog.value = "";
  } else {
    document.querySelector(".log-in h2").innerHTML = "Incorrect email/password";
    passLog.value = "";
  }
});

//NAV SLIDE
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelectorAll(".nav-list li");
  const nav = document.querySelector(".nav-list");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animate links
    navList.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade .5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });

    burger.classList.toggle("burger-anim");
  });
};
navSlide();
