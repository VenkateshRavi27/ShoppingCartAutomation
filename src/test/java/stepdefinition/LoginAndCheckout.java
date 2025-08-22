package stepdefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginAndCheckoutPage;
import pages.LoginPage;

public class LoginAndCheckout {
	
	LoginPage lp1 = new LoginPage();
	LoginAndCheckoutPage lc = new LoginAndCheckoutPage();
	
	@When("user login with valid username and password")
	public void userLoginWithValidUsernameAndPassword() {
	   
		lp1.userName("standard_user");
		lp1.password("secret_sauce");
		lp1.submitBtn();
	   
	}

	@When("user validate the homepage title")
	public void userValidateTheHomepageTitle() {
	   
	   lc.validateHomePageMsg();
	   
	}

	@When("user clicks the select the product")
	public void userClicksTheSelectTheProduct() {
	   
		lc.clickTheProduct();
	   
	}

	@When("user clicks the add to cart button")
	public void userClicksTheAddToCartButton() {
	   
		lc.clickTheAddToCartBtn();
	   
	}

	@When("user validates the cart boxes")
	public void userValidatesTheCartBoxes() {
	   
	   lc.verifyBadgeCount();
		
	}

	@When("user clicks the checkout button")
	public void userClicksTheCheckoutButton() {
	   
		lc.clickTheCheckOutBtn();
	   
	}

	@Then("user enters the username lastname and zipcode")
	public void userEntersTheUsernameLastnameAndZipcode() {
	   
		lc.enterAddress("Joe", "Billy", "60087");
		lc.clickContinue();
	   
	}

	@Then("user validates the total price")
	public void userValidatesTheTotalPrice() {
	   
		lc.priceValidation();
	   
	}

	@Then("user clicks the finish button")
	public void userClicksTheFinishButton() {
	   
		lc.clickFinish();
	   
	}

}
