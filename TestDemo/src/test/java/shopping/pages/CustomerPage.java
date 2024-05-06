package shopping.pages;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.WebElementFacade;
import shopping.core.BasePage;

public class CustomerPage extends BasePage {
    @FindBy(xpath = "//a[@href='https://crm.anhtester.com/admin/clients']")
    private WebElementFacade menuCustomer;
    @FindBy(xpath = "//a[normalize-space()='New Customer']")
    private WebElementFacade btnNewCustomer;
}
