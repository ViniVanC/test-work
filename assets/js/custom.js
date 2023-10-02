// the function processes a click on the answer and collects the answers into an object
function setupSurveyEventListeners() {
  const userData = {}; //an empty object into which the answers fall
  const questions = ["q1", "q2", "q3", "q4"]; //an array of questions

  //questions are run through forEach, as an argument we get the question number (questionId) and index
  questions.forEach((questionId, index) => {
    const buttons = document.querySelectorAll(`#${questionId} .survey_button`); //get all the answer options for a particular question

    //answers are run through forEach and the one that was clicked is searched for
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const answer = button.textContent.trim();
        userData[`q${index + 1}`] = answer;
      });
    });
  });

  //return an object with the user's answers
  return () => {
    console.log("UserData:", userData);
  };
}

//a function that is called when the "OK" button is clicked in the last modal windo
const saveAndDisplayData = setupSurveyEventListeners();

// comments

// Функція для отримання поточної дати та часу у визначеному форматі
function getCurrentDateTime() {
  const now = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return now.toLocaleDateString("en-US", options);
}

document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Зупиняємо стандартну відправку форми

  const commentText = document.getElementById("commentText").value;

  if (commentText.trim() !== "") {
    const commentsList = document.getElementById("commentsList");

    const newCommentDiv = document.createElement("div");
    newCommentDiv.classList.add("comments");

    newCommentDiv.innerHTML = `
      <div class="profile">
        <img src="assets/images/guest.jpg" alt="Guest Profile Image">
      </div>
      <div class="comment-content">
        <p class="name">
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit">Гість</font>
          </font>
        </p>
        <p>
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit">${commentText}</font>
          </font>
        </p>
      </div>
      <div class="clr"></div>
      <div class="comment-status">
        <span>
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit">Curte·comente</font>
          </font>
          <img src="assets/images/like.png" width="15px" height="15px" />
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit">0</font>
          </font>
        </span>
        <small>
          <font style="vertical-align: inherit">
            <font style="vertical-align: inherit">·</font>
          </font>
          <u>
            <font style="vertical-align: inherit">${getCurrentDateTime()}</font>
          </u>
        </small>
      </div>
    `;

    commentsList.prepend(newCommentDiv); // Додаємо новий коментар до початку списку

    // Очищаємо текстове поле
    document.getElementById("commentText").value = "";
  }
});
