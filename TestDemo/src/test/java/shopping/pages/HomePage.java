package shopping.pages;


import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;
import shopping.core.BasePage;

/** This is class for Home Page. */
public class HomePage extends BasePage {
  /** AnnotationLocation. Logout button */
  @FindBy(className = "fa-sign-out")
  private WebElementFacade btnLogout;

  @FindBy(id = "menu-sale")
  private WebElementFacade menuSales;

  @FindBy(xpath = "//*[@id='collapse4']//li[1]//*[contains(text(),'Orders')]")
  private WebElementFacade menuOrder;

  /** Method for Logout button. Verify button Logout */
  public void isLogoutDisplayed() {
    waitForElemenetVisible(btnLogout);
  }

  public void clickSalesmenu() {
    clickToElement(menuSales);
  }

  public void clickOrdermenu() {
    clickToElement(menuOrder);
  }
}
