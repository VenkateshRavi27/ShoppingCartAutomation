package utils;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DriverFactory {

	private static WebDriver driver;

	public static WebDriver getDriver() {

		if (driver == null) {

			String browser = ConfigReader.getProperty("browser");
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\venka\\eclipse-workspace\\BookCart\\driver\\chromedriver.exe");

			switch (browser.toLowerCase()) {
			case "chrome":
				
				driver = new ChromeDriver();
				break;

			default:
				throw new RuntimeException("Browser not supported: " + browser);
			}
			
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		}

		return driver;
	}

	public static WebDriverWait getWait() {

		return new WebDriverWait(driver, 7);
	}

	public static void quitDriver() {
		
		if (driver != null) {
			driver.quit();
			driver = null;
		}
	}

}
