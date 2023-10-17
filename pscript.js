const textToType = "Hi I'm Saram Jameel, a special human\n with some ability to love learning\nand working on teamwork.";
const typedTextElement = document.getElementById("typed-text");

function typeText() {
  typedTextElement.innerHTML = ""; 
  let i = 0;

  function type() {
    if (i < textToType.length) {
      if (textToType.charAt(i) === '\n') {
        typedTextElement.innerHTML += '<br>'; 
      } else {
        typedTextElement.innerHTML += textToType.charAt(i);
      }
      i++;
      setTimeout(type, 100); 
    }
  }

  type();
}

typeText();
