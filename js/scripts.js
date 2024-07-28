/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function sendWa() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  var messageWA = "Name : " + name + "\nMessage : " + message;

  var whatsappLink = "https://wa.me/6283847406501?text=" + encodeURIComponent(messageWA);
  window.open(whatsappLink, "_blank");
}
function openBot(){
  const bot = document.getElementById("bot");
  bot.style.right = "-100px";
  const boardBot = document.getElementById("boardBot");
  boardBot.style.right = "10px";
}
function closeBot(){
  const boardBot = document.getElementById("boardBot");
  boardBot.style.right = "-500px";
  const bot = document.getElementById("bot");
  bot.style.right = "10px";
}
function submitBot() {
  const questionBot = document.getElementById("questionBot");
  const selectedValue = questionBot.value;

  const question = {
    "1": "Who are you?",
    "2": "Who is Adi?",
    "3": "Does Adi have experience in web development?",
    "4": "How can I contact Adi?"
  };

  const answer = {
    "1": "I'm Bot, here to assist you with any questions about Adi Saputra.",
    "2": "Adi Saputra's full name is I Putu Adi Saputra. He is a Web Developer studying at Primakara University and can help you grow your online business.",
    "3": "Yes, Adi Saputra has significant web development experience. He placed fifth in the 2023 National Student Competition in Web Technology and has completed internships at Hooki Group and Red System. You can find more details about his qualifications in the 'Resume' section.",
    "4": "You can reach Adi Saputra directly through the contact section on our website or connect with him on social media platforms like Instagram, Email, and GitHub."
  }

  makeQuestion(question[selectedValue]);
  makeAnswer(answer[selectedValue]);
}

function makeQuestion(q){
  const chat = document.getElementById("chat");

  const main = document.createElement("div");
  const node = document.createElement("div");
  const text = document.createTextNode(q);

  node.appendChild(text);
  node.classList.add("p-2", "rounded", "bg-primary", "text-white");
  node.style.width = "90%";

  main.appendChild(node);
  main.classList.add("d-flex", "justify-content-end");
  chat.appendChild(main);
}
function makeAnswer(a){
  const chat = document.getElementById("chat");

  const main = document.createElement("div");
  const node = document.createElement("div");
  const text = document.createTextNode(a);

  node.appendChild(text);
  node.classList.add("p-2", "rounded", "bg-white");
  node.style.width = "90%";

  main.appendChild(node);
  main.classList.add("d-flex", "justify-content-start");
  chat.appendChild(main);
}