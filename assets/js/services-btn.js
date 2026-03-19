/* Math Service */
const btn1 = document.querySelector("#services-toggle-subjects");
const list1 = document.querySelector("#services-list-subjects");

btn1.addEventListener("click", () => {
    const isOpen1 = list1.classList.toggle("open");
    btn1.setAttribute("aria-expanded", isOpen1);
    btn1.textContent = isOpen1 ? "Hide" : "Subjects";
});



/* Physics Service */
const btn2 = document.querySelector("#services-toggle-instr");
const list2 = document.querySelector("#services-list-instr");

btn2.addEventListener("click", () => {
    const isOpen2 = list2.classList.toggle("open");
    btn2.setAttribute("aria-expanded", isOpen2);
    btn2.textContent = isOpen2 ? "Hide" : "Instruction";
});


/* Comp sci Service */
const btn3 = document.querySelector("#services-toggle-college-prep");
const list3 = document.querySelector("#services-list-college-prep");

btn3.addEventListener("click", () => {
    const isOpen3 = list3.classList.toggle("open");
    btn3.setAttribute("aria-expanded", isOpen3);
    btn3.textContent = isOpen3 ? "Hide" : "College Prep";
});

