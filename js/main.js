const info = document.getElementById('info');
const taxt = document.getElementById('taxt');
const podrob1 = document.getElementById('podrob1');
const podrob2 = document.getElementById('podrob2');
const podrob3 = document.getElementById('podrob3');
const podrob4 = document.getElementById('podrob4');
const podrob5 = document.getElementById('podrob5');
const descript1 = document.getElementById('descript1');
const descript2 = document.getElementById('descript2');
const descript3 = document.getElementById('descript3');
const descript4 = document.getElementById('descript4');
const descript5 = document.getElementById('descript5');
const close1 = document.getElementById('close1');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');
const close4 = document.getElementById('close4');
const close5 = document.getElementById('close5');
const overlay = document.getElementById("overlay");
const arrow_left = document.getElementById("arrow_left");
const arrow_right = document.getElementById("arrow_right");
const teach1 = document.getElementById("teach1");
const teach2 = document.getElementById("teach2");
const number = document.getElementById("number");
const phone = document.getElementById("phone");

function toggleElement() {
    if (taxt.style.display === "none") {
      taxt.style.display = "block";
    } else {
      taxt.style.display = "none";
    }
}
function togglePhone() {
  if (phone.style.display === "none") {
    phone.style.display = "block";
  } else {
    phone.style.display = "none";
  }
}

function ArrowRight() {
  teach1.style.display = "none";
  teach2.style.marginLeft = "0px";
  
}
function ArrowLeft() {
  teach1.style.display = "block";
  teach2.style.marginLeft = "40px";
}

document.addEventListener("DOMContentLoaded", function() {
  podrob1.addEventListener("click", function() {
    descript1.style.display = "block";
    overlay.style.display = "block";
  });
});
function closePopup() {
  descript1.style.display = "none";
  overlay.style.display = "none";
}





document.addEventListener("DOMContentLoaded", function() {
  podrob2.addEventListener("click", function() {
    descript2.style.display = "block";
    overlay.style.display = "block";
  });
});
function closePopup2() {
  descript2.style.display = "none";
  overlay.style.display = "none";
}



document.addEventListener("DOMContentLoaded", function() {
  podrob3.addEventListener("click", function() {
    descript3.style.display = "block";
    overlay.style.display = "block";
  });
});
function closePopup3() {
  descript3.style.display = "none";
  overlay.style.display = "none";
}



document.addEventListener("DOMContentLoaded", function() {
  podrob4.addEventListener("click", function() {
    descript4.style.display = "block";
    overlay.style.display = "block";
  });
});
function closePopup4() {
  descript4.style.display = "none";
  overlay.style.display = "none";
}



document.addEventListener("DOMContentLoaded", function() {
  podrob5.addEventListener("click", function() {
    descript5.style.display = "block";
    overlay.style.display = "block";
  });
});
function closePopup5() {
  descript5.style.display = "none";
  overlay.style.display = "none";
}