//Random Questions Quiz

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
    //This man was wicked cool.
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
    // Lets be honest, how could you not know who he is?
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
    //How on Earth did you get the flag wrong
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
    //Don't blame you.
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
     <h4>Perfect! Are we sure you didn't look these questions on Google, because you are most definitely not meant to get a perfect score on this test...</h4>
      `;
  } else if (score === 75) {
    document.getElementById("quizMark").innerHTML = `      <h4>
      Your Score: ${correctAns} / 4 (${score}%)
      </h4>
      <h4>Amazing! You must be very smart (or a very lucky guesser!)</h4>
     `;
  } else if (score === 50) {
    document.getElementById("quizMark").innerHTML = `      <h4>
        Your Score: ${correctAns} / 4 (${score}%)
        </h4>
        <h4>Almost There! Thank you for giving this your honest effort!</h4>
       `;
  } else if (score === 25) {
    document.getElementById("quizMark").innerHTML = `      <h4>
        Your Score: ${correctAns} / 4 (${score}%)
   </h4>
   <h4>Good Try! Mistakes are how we learn!</h4>
   `;
  } else {
    document.getElementById("quizMark").innerHTML = `      <h4>
        Your Score: ${correctAns} / 4 (${score}%)
   </h4>
   <h4>Good Try! I give you premission to look the answers up on Google. Now I know that you didn't cheat!</h4>
   `;
  }
}
