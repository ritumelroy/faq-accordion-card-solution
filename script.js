// const question = document.querySelector(".question1");
// const ans = document.querySelector(".answer1");
// question.addEventListener("click", () => {
//   //   window.alert("Hellooo clicked!");
//   if (ans.classList.contains("active")) {
//     ans.classList.remove("active");
//   } else {
//     ans.classList.add("active");
//   }
// });

let answers = document.querySelectorAll(".sections");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});
