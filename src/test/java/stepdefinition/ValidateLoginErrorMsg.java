package stepdefinition;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;

public class ValidateLoginErrorMsg {
	
	LoginPage lp = new LoginPage();

	@Given("user should navigate the application")
	public void userShouldNavigateTheApplication() {
	
		System.out.println("Application opens successfully....");

	}

	@Given("user enters the invalid username")
	public void userEntersTheInvalidUsername() {

		lp.userName("");

	}

	@Given("user enters the invalid password")
	public void userEntersTheInvalidPassword() {

		lp.password("");
	}

	@When("user clicks the login button")
	public void userClicksTheLoginButton() {

		lp.submitBtn();

	}

	@When("user should see the error message")
	public void userShouldSeeTheErrorMessage() {

		System.out.println("Error Message is : " + lp.errorMsg());
	}

	@Then("user should validate the error message")
	public void userShouldValidateTheErrorMessage() {

		Assert.assertEquals(lp.errorMsg(), "Epic sadface: Username is required");

	}

}
