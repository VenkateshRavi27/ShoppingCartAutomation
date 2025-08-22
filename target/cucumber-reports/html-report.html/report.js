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
});