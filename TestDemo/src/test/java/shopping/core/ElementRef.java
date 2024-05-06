package shopping.core;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;

/**
 * @author my.vt
 */
public class ElementRef extends BasePage {
  public ElementRef() {
  }

  @FindBy(xpath = "//a[text() = 'Customer Name']")
  public static WebElementFacade customerName;

  @FindBy(xpath = "//a[text() = 'E-Mail']")
  public static WebElementFacade customerEmail;

  @FindBy(xpath = "//a[text() = 'Customer Groups']")
  public static WebElementFacade customerGroup;

  @FindBy(xpath = "//a[text() = 'Status']")
  public static WebElementFacade status;

  @FindBy(xpath = "//a[text() = 'IP']")
  public static WebElementFacade ip;

  @FindBy(xpath = "//a[text() = 'Date Added']")
  public static WebElementFacade dateAdded;

  @FindBy(xpath = "//*[@id=\"form-customer\"]/*//td[text() = 'Action']")
  public static WebElementFacade action;

  public static WebElementFacade getCustomerName() {
    return customerName;
  }


  public static WebElementFacade getCustomerEmail() {
    return customerEmail;
  }

  public static WebElementFacade getCustomerGroup() {
    return customerGroup;
  }

  public static WebElementFacade getStatus() {
    return status;
  }

  public static WebElementFacade getIp() {
    return ip;
  }

  public static WebElementFacade getDateAdded() {
    return dateAdded;
  }

  public static WebElementFacade getAction() {
    return action;
  }
}
