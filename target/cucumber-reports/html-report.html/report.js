$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:\\Users\\venka\\eclipse-workspace\\BookCart\\src\\main\\resources\\features\\loginandcheckout.feature");
formatter.feature({
  "name": "User Should login with valid credentials and Purchase the product",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid credential and checkout order",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user login with valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginAndCheckout.userLoginWithValidUsernameAndPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validate the homepage title",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAndCheckout.userValidateTheHomepageTitle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the select the product",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAndCheckout.userClicksTheSelectTheProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAndCheckout.userClicksTheAddToCartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the cart boxes",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAndCheckout.userValidatesTheCartBoxes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the checkout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAndCheckout.userClicksTheCheckoutButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the username lastname and zipcode",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAndCheckout.userEntersTheUsernameLastnameAndZipcode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the total price",
  "keyword": "And "
});
formatter.match({
  "location": "LoginAndCheckout.userValidatesTheTotalPrice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the finish button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAndCheckout.userClicksTheFinishButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("C:\\Users\\venka\\eclipse-workspace\\BookCart\\src\\main\\resources\\features\\validateLoginErrorMsg.feature");
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