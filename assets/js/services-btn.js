/* Math Service */
const btn1 = document.querySelector("#services-toggle-math");
const list1 = document.querySelector("#services-list-math");

btn1.addEventListener("click", () => {
    const isOpen1 = list1.classList.toggle("open");
    btn1.setAttribute("aria-expanded", isOpen1);
    btn1.textContent = isOpen1 ? "Hide" : "Mathematics";
});



/* Physics Service */
const btn2 = document.querySelector("#services-toggle-phys");
const list2 = document.querySelector("#services-list-phys");

btn2.addEventListener("click", () => {
    const isOpen2 = list2.classList.toggle("open");
    btn2.setAttribute("aria-expanded", isOpen2);
    btn2.textContent = isOpen2 ? "Hide" : "Physics";
});


/* Comp sci Service */
const btn3 = document.querySelector("#services-toggle-cs");
const list3 = document.querySelector("#services-list-cs");

btn3.addEventListener("click", () => {
    const isOpen3 = list3.classList.toggle("open");
    btn3.setAttribute("aria-expanded", isOpen3);
    btn3.textContent = isOpen3 ? "Hide" : "Computer Science";
});

