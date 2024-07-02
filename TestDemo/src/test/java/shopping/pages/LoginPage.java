package shopping.pages;


import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;
import org.junit.Assert;
import shopping.core.BasePage;
import shopping.core.EndPoint;

/**
 * This is class for Home Page.
 */
public class LoginPage extends BasePage {
  /**
   * AnnotationLocation.
   * Input Username filed
   */
  @FindBy(id = "email")
  private WebElementFacade tbUserName;
  /**
   * AnnotationLocation.
   * Input Password filed
   */
  @FindBy(id = "password")
  private WebElementFacade tbPassWord;
  /**
   * SuppressionXpathFilter.
   * verify key word in this page
   */
  @FindBy(xpath = "//a[normalize-space(text())=' © 2009-2022 All Rights ']")
  private WebElementFacade textInBottom;
  /**
   * AnnotationLocation.
   * Button Login
   */
  @FindBy(xpath = "//button[normalize-space()='Login']")
  private WebElementFacade btnLogin;

  /**
   * AnnotationLocation.
   * Button Login
   */
  @FindBy(className = "btn-close")
  private WebElementFacade btnCloseDialog;

  /**
   * Method for verify text in bottom.
   * Verify "@2022"
   */

//  @FindBy(xpath = "//div[@class='alert alert-danger text-center']")
//  private WebElementFacade textErrorNulll;
  @FindBy(xpath = "//div[@class='text-center alert alert-danger']")
  private WebElementFacade textErrorNull;
  public void verifyTextInBottom() {
    waitForElemenetVisible(textInBottom);
    Assert.assertTrue("@2022", textInBottom.isDisplayed());
  }
  public void verifyTextErrorMessage( String text) {
    waitForElemenetVisible(textErrorNull);
    textErrorNull.getText();
    Assert.assertEquals("Sai chỗ rồi",textErrorNull.getText(),text);
  }

  /**
   * Method for input Username.
   *
   * @param text Username.
   */
  public void inputToUsername(final String text) {
    tbUserName.waitUntilVisible();
    sendKeyToElement(tbUserName, text);
  }

  /**
   * Method for input Password.
   *
   * @param text Password.
   */
  public void inputToPassword(final String text) {
    sendKeyToElement(tbPassWord, text);
  }

  /**
   * Method for Login bottom.
   * Login button
   */
  public void clickToLogin() {
    clickToElement(btnLogin);
    closePopup();
  }

  @FindBy (xpath = "//*[@id=\"modal-security\"]/div/div/div[1]/button")
  private WebElementFacade modalOpen;

  public void closePopup() {
    if (modalOpen.isVisible()) {
      modalOpen.click();
    }
  }

//  public void isMessageError(String text){
//    getTextElement();
//  }
  public void login() {
    this.open();
    this.inputToUsername(EndPoint.USERNAME);
    this.inputToPassword(EndPoint.PASSWORD);
    this.clickToLogin();
  }

  public void inputToUassword(String password) {
  }

  public void inputToPassword() {
  }

  public void clickToCloseDialog() {
    clickToElement(btnCloseDialog);
  }
}
