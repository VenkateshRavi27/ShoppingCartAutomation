package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		
		features = {"C:\\Users\\venka\\eclipse-workspace\\BookCart\\src\\main\\resources\\features\\validateLoginErrorMsg.feature"},
		dryRun = !true,
		glue = {"stepdefinition" , "hook"},
		snippets = SnippetType.CAMELCASE,
		monochrome = true,
		plugin = {"pretty",
				  "json:target/cucumber-reports/Cucumber.json",   // JSON report
				  "html:target/cucumber-reports/html-report.html" // Optional HTML report
				}
		
		)


public class Runner extends AbstractTestNGCucumberTests {
	
	
	
}
