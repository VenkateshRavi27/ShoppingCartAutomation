$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:\\Users\\venka\\eclipse-workspace\\BookCart\\src\\main\\resources\\features\\validateLoginErrorMsg.feature");
formatter.feature({
  "name": "To validate the error message in login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate the application",
  "keyword": "Given "
});
formatter.match({
  "location": "ValidateLoginErrorMsg.userShouldNavigateTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the invalid username",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateLoginErrorMsg.userEntersTheInvalidUsername()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the invalid password",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateLoginErrorMsg.userEntersTheInvalidPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the login button",
  "keyword": "When "
});
formatter.match({
  "location": "ValidateLoginErrorMsg.userClicksTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see the error message",
  "keyword": "And "
});
formatter.match({
  "location": "ValidateLoginErrorMsg.userShouldSeeTheErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should validate the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidateLoginErrorMsg.userShouldValidateTheErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});