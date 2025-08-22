package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import utils.DriverFactory;

public class LoginPage {

	WebDriver driver = DriverFactory.getDriver();

	public void userName(String username) {

		WebElement name = driver.findElement(By.id("user-name"));

		name.sendKeys(username);

	}

	public void password(String pwd) {

		WebElement pass = driver.findElement(By.id("password"));

		pass.sendKeys(pwd);

	}

	public void submitBtn() {

		driver.findElement(By.id("login-button")).click();

	}

	/* Error Message Method */

	public String errorMsg() {

		return driver.findElement(By.tagName("h3")).getText();

	}

}
