//Program Title
//https://www.mentimeter.com/blog/audience-energizers/55-free-trivia-and-fun-quiz-question-templates

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //WHATEVER THIS LET STUFF IS CALLED

  let question1 = document.getElementById("question1-in").value.toLowerCase();
  let question2 = document.getElementById("question2-in").value.toLowerCase();
  let question3 = document.getElementById("question3-in").value.toLowerCase();
  let question4 = document.getElementById("question4-in").value.toLowerCase();
  let correctAns = 0;

  //THE ACTUAL IF ELSE STATEMENT
  // AKA: STUFF TO FIGURE OUT WHAT QUESTIONS ARE CORRECT

  //TO MARK IF QUESTION ONE IS CORRECT OR NOT
  if (question1 === "smith") {
    //IF QUESTION IS CORRECT
    document.getElementById(
      "1answerIs"
    ).innerHTML = `<span class="correct">   Correct</span>
      `;
    document.getElementById("question1-in").style.border = "2px solid green";
    correctAns++;
  } else {
    //ANSWER IS WRONG
    document.getElementById(
      "1answerIs"
    ).innerHTML = `<span class="wrong">   Incorrect</span>
    `;
    document.getElementById("question1-in").style.border = "2px solid red";
  }

  //TO MARK IF QUESTION ONE IS RIGHT OR NOT
  if (
    question2 === "soviet pilot" ||
    question2 === "soviet cosmonaut" ||
    question2 === "cosmonaut" ||
    question2 === "pilot" ||
    question2 === "first man in space" ||
    question2 === "the first man in space" ||
    question2 === "dead" ||
    question2 === "awesome"
  ) {
    //IF QUESTION IS CORRECT
    document.getElementById(
      "2answerIs"
    ).innerHTML = `<span class="correct">     Correct</span>
      `;
    document.getElementById("question2-in").style.border = "2px solid green";
    correctAns++;
  } else {
    //IF ANSWER IS WRONG
    document.getElementById(
      "2answerIs"
    ).innerHTML = `<span class="wrong">   Incorrect</span>
    `;
    document.getElementById("question2-in").style.border = "2px solid red";
  }

  //TO MARK IF QUESTION THREE IS CORRECT
  if (question3 === "norway") {
    //IF QUESTION IS CORRECT
    document.getElementById(
      "3answerIs"
    ).innerHTML = `<span class="correct">   Correct</span>
      `;
    document.getElementById("question3-in").style.border = "2px solid green";
    correctAns++;
  } else {
    // IF ANSWER IS WRONG
    document.getElementById(
      "3answerIs"
    ).innerHTML = `<span class="wrong">   Incorrect</span>
    `;
    document.getElementById("question3-in").style.border = "2px solid red";
  }

  //TO MARK IF QUESTION FOUR IS CORRECT
  if (question4 === "yellow") {
    //IF QUESTION IS CORRECT
    document.getElementById(
      "4answerIs"
    ).innerHTML = `<span class="correct">     Correct</span>
      `;
    document.getElementById("question4-in").style.border = "2px solid green";
    correctAns++;
  } else {
    //IF QUESTION IS WRONG
    document.getElementById(
      "4answerIs"
    ).innerHTML = `<span class="wrong">   Incorrect</span>
      `;
    document.getElementById("question4-in").style.border = "2px solid red";
  }

  //MATHY STUFF/PROCESS?
  let score = (correctAns / 4) * 100;

  // OUTPUT
  if (score === 100) {
    document.getElementById("quizMark").innerHTML = `      <h4>
    Your Score: ${correctAns} / 4 (${score}%)
     </h4>
     <h4>Perfect!</h4>
      `;
  } else if (score === 75) {
    document.getElementById("quizMark").innerHTML = `      <h4>
      Your Score: ${correctAns} / 4 (${score}%)
      </h4>
      <h4>Amazing!</h4>
     `;
  } else if (score === 50) {
    document.getElementById("quizMark").innerHTML = `      <h4>
        Your Score: ${correctAns} / 4 (${score}%)
        </h4>
        <h4>Almost There!</h4>
       `;
  } else if (score === 25) {
    document.getElementById("quizMark").innerHTML = `      <h4>
        Your Score: ${correctAns} / 4 (${score}%)
   </h4>
   <h4>Good Try!</h4>
   `;
  } else {
    document.getElementById("quizMark").innerHTML = `      <h4>
        Your Score: ${correctAns} / 4 (${score}%)
   </h4>
   <h4>Good Try!</h4>
   `;
  }
}
