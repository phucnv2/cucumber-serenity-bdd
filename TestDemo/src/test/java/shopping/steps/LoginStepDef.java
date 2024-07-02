package shopping.steps;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import shopping.core.BasePage;
import shopping.pages.HomePage;
import shopping.pages.LoginPage;

/**
 * This is class for Category Steps.
 */
public class LoginStepDef {
  /**
   * Login Page constructor.
   */
  private LoginPage loginPage;
  /** TreeWalker
   * Home Page constructor.
   */
  private HomePage homePage;

  /**
   * AnnotationLocation. for Customer Demo Feature TestCase.
   * for Customer Demo Feature TestCase.
   */
  @Given("Navigate successfully ly to Login Page")
  public void navigateSuccessfullyToLoginPage() {
    loginPage.open();
  }

  /**
   * AnnotationLocation. for Customer Demo Feature TestCase.
   * For verify CopyrightsReservedInBottom
   */
  @Then("Verify copyrights Reserved in bottom")
  public void verifyCopyrightsReservedInBottom() {
    loginPage.verifyTextInBottom();
  }

  /**
   * AnnotationLocation. for Customer Demo Feature TestCase.
   *
   * @param username User name.
   */
  @When("Input (.*) to username")
  public void inputToUsername(final String username) {
    loginPage.inputToUsername(username);
  }

  /**
   * AnnotationLocation. for Customer Demo Feature TestCase.
   *
   * @param password Password.
   */
  @And("Input (.*) to password")
  public void inputToPassword(final String password) {
    loginPage.inputToPassword(password);
  }

  /**
   * AnnotationLocation. for Customer Demo Feature TestCase.
   * For click Login button
   */
  @And("Click to Login")
  public void clickToLogin() {
    loginPage.clickToLogin();
  }

  /**
   * AnnotationLocation. for Customer Demo Feature TestCase.
   * For Logout button is displayed
   */
  @Then("Verify error (.*) login")
  public void verifyErrorMessageFail (final String text) {
    loginPage.verifyTextErrorMessage(text);
  }
  @And("Verify Logout is displayed in Homepage")
  public void verifyLogoutIsDisplayedInHomepage() {
    homePage.isLogoutDisplayed();
  }

  /**
   * AnnotationLocation. for Customer Demo Feature TestCase.
   * For Logout button is displayed
   */

  @Given("Login successfully to cmcglobal.shopping website")
  public void loginSuccessfullyToCmcGlobalShoppingWebsite() {
    loginPage.open();
    //    loginPage.inputToUsername(EndPoint.USERNAME);
    //    loginPage.inputToPassword(EndPoint.PASSWORD);
    loginPage.inputToUsername(BasePage.getUserName());
    loginPage.inputToPassword(BasePage.getPassword());
    loginPage.clickToLogin();
  }

//  @Then("Close dialog")
//  public void closeDialog() {
//    loginPage.clickToCloseDialog();
//
//  }
}

