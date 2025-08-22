package hook;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import utils.ConfigReader;
import utils.DriverFactory;

public class Hook {

	@Before
	public void setup() {

		DriverFactory.getDriver().get(ConfigReader.getProperty("url"));

	}

	@After
	public void tearDown() {

		DriverFactory.quitDriver();
	}

}
