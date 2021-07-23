const captcha = document.querySelector(".image-captcha");
const checkBox = document.querySelector(".checkbox-size");
// console.log(checkBox);
captcha.addEventListener("click", function() {
    if (checkBox.checked) {}
});

const toggleBtns = document.querySelectorAll(".toggleBtn");
const toggleContent = document.querySelectorAll(".toggle");

toggleBtns.forEach((el) => {
    // console.log("mouse over");
    el.addEventListener("mouseover", function(e) {
        // console.log(e.target);
        e.target.style.cursor = "pointer";
    });
});
let dropped = false;
toggleBtns.forEach((btn, i) => {
    // console.log(el);

    btn.addEventListener("click", function() {
        console.log("dropped: ", i, dropped);
        if (dropped !== false) {
            console.log("log-1", dropped);
            toggleContent[dropped].style.display = "none";
        }
        if (dropped !== i) {
            console.log("log-2", i);
            toggleContent[i].style.display = "block";
            dropped = i;
        } else dropped = false;
    });
});

// console.log(screen.width);

const scrollTop = document.querySelector(".scroll-up");

scrollTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
});