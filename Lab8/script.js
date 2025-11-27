const popup = document.getElementById('popup');
const openBtn = document.getElementById('openFormBtn');
const closeBtn = document.getElementById('closePopup');
const form = document.getElementById('feedbackForm');
const msgBox = document.getElementById('msgBox');

function openPopup () {
    popup.classList.remove("hidden");
    history.pushState({popup : true}, "", "?feedback");
}

function closePopup () {
    popup.classList.add("hidden");
}

openBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", () => history.back());

window.onpopstate = () => {
    closePopup();
};


form.addEventListener("input", () => {
    const data = Object.fromEntries(new FormData(form));
    localStorage.setItem("feedbackData", JSON.stringify(data));
});

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("feedbackData");
    if (saved) {
        const data = JSON.parse(saved);
        Object.keys(data).forEach(key => {
            if (form.elements[key]) {
                form.elements[key].value = data[key];
            }
        });
    }
});

function showMsg(text, type = "success") {
    msgBox.textContent = text;

    msgBox.classList.remove("hidden", "success", "error");
    msgBox.classList.add(type);

    setTimeout(() => {
        msgBox.classList.add("hidden");
    }, 3000);
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const res = await fetch("https://formcarry.com/s/jn7DKGLiZ0d", {
            method: "POST",
            body: formData
        });

        if (res.ok) {
            showMsg("Успешно отправлено!", "success");
            form.reset();
            localStorage.removeItem("feedbackData");
        } else {
            showMsg("Ошибка отправки", "error");
        }
    } catch (e) {
        showMsg("Проблема с соединением", "error")
    }
});


