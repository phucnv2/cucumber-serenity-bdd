package shopping.core;

import net.serenitybdd.core.environment.EnvironmentSpecificConfiguration;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;

import net.thucydides.core.util.EnvironmentVariables;
import net.thucydides.core.util.SystemEnvironmentVariables;
import org.openqa.selenium.support.ui.ExpectedConditions;

/**
 * BasePage to testing cmcglobal.shoping website.
 */
public class BasePage extends PageObject {
    /**
     * This method for Element.
     *
     * @param element for clickToElement
     */
    public void clickToElement(final WebElementFacade element) {
        element.click();
    }

    public void getTextElement(WebElementFacade element){element.getText();}

    /**
     * This is method to send key for Element.
     *
     * @param element for senKeyToElement
     * @param text    for Element
     */
    public void sendKeyToElement(final WebElementFacade element,
                                 final String text) {
        element.sendKeys(text);
    }

    /**
     * This is method for waitForElementVisible.
     *
     * @param element for waitForElementVisible
     */
    public void waitForElemenetVisible(final WebElementFacade element) {
        waitForCondition().until(
                ExpectedConditions.visibilityOfAllElements(element));
    }

    private static EnvironmentVariables environmentVariables =
            SystemEnvironmentVariables.createEnvironmentVariables();
    public static final String USER_NAME =
            EnvironmentSpecificConfiguration.from(environmentVariables).getProperty("username");
    public static final String PASSWORD =
            EnvironmentSpecificConfiguration.from(environmentVariables).getProperty("password");

    public static String getUserName() {
        return USER_NAME;
    }

    public static String getPassword() {
        return PASSWORD;
    }
}
