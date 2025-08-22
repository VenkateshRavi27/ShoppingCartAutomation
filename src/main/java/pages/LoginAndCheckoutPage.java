package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import utils.DriverFactory;

public class LoginAndCheckoutPage {

	WebDriver driver = DriverFactory.getDriver();

	// Locators

	private By homepageLogo = By.xpath("//div[contains(text(), 'Swag Labs')]");
	private By clickTheProduct = By.xpath("//img[@alt=\"Sauce Labs Bolt T-Shirt\"]");
	private By clickAddToCart = By.id("add-to-cart");
	private By badgeCount = By.xpath("//span[@class=\"shopping_cart_badge\"]");
	private By clickCheckoutBtn = By.id("checkout");
	private By c_firstName = By.id("first-name");
	private By c_lastName = By.id("last-name");
	private By c_zipcode = By.id("postal-code");
	private By clickContinueBtn = By.id("continue");
	private By totalPrie = By.xpath("//div[@class=\"summary_total_label\"]");
	private By clickFinishBtn = By.id("finish");
	private By confirmMsg = By.xpath("//h2[contains(text(), \"Thank you for your order!\")]");

	// Actions

	public void validateHomePageMsg() {

		String homepageText = driver.findElement(homepageLogo).getText();

		Assert.assertEquals(homepageText, "Swag Labs");

	}

	public void clickTheProduct() {

		driver.findElement(clickTheProduct).click();

	}

	public void clickTheAddToCartBtn() {

		driver.findElement(clickAddToCart).click();

	}

	public void verifyBadgeCount() {

		WebElement e = driver.findElement(badgeCount);

		String count = e.getText();

		int totalCount = Integer.parseInt(count);

		Assert.assertEquals(totalCount, 1);

		if (totalCount > 0) {

			e.click();

		}

	}

	public void clickTheCheckOutBtn() {

		driver.findElement(clickCheckoutBtn).click();

	}

	public void enterAddress(String fname, String lname, String zip) {

		driver.findElement(c_firstName).sendKeys(fname);
		driver.findElement(c_lastName).sendKeys(lname);
		driver.findElement(c_zipcode).sendKeys(zip);
	}

	public void clickContinue() {

		driver.findElement(clickContinueBtn).click();
	}

	public void priceValidation() {

		String price = driver.findElement(totalPrie).getText();
		
		System.out.println(price = price.replaceAll("Total: \\$", ""));

		Assert.assertEquals(Double.parseDouble(price), 17.27);
	}

	public void clickFinish() {

		driver.findElement(clickFinishBtn).click();

		String successMsg = driver.findElement(confirmMsg).getText();

		Assert.assertEquals(successMsg, "Thank you for your order!");
	}
}
