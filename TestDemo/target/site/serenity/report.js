$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/test/Demo2.feature");
formatter.feature({
  "name": "Test lazadarererer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@dfdf6"
    }
  ]
});
formatter.scenario({
  "name": "Login php terreerer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dfdf6"
    },
    {
      "name": "@phpTravel22"
    }
  ]
});
formatter.step({
  "name": "user open web",
  "keyword": "Given "
});
formatter.uri("src/test/resources/features/test/Demo.feature");
formatter.feature({
  "name": "Test Login Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login232"
    }
  ]
});
formatter.scenarioOutline({
  "name": "As user i want Login to Homepage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Navigate successfully ly to Login Page",
  "keyword": "And "
});
formatter.step({
  "name": "Input \"\u003cusername\u003e\" to username",
  "keyword": "When "
});
formatter.step({
  "name": "Input \"\u003cpassword\u003e\" to password",
  "keyword": "And "
});
formatter.step({
  "name": "Click to Login",
  "keyword": "And "
});
formatter.step({
  "name": "Close dialog",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify Logout is displayed in Homepage",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "demo",
        "demo"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As user i want Login to Homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login232"
    }
  ]
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Navigate successfully ly to Login Page",
  "keyword": "And "
});
formatter.step({
  "name": "user click on button bong da",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click on button o to",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDef.navigateSuccessfullyToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Input \"demo\" to username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.inputToUsername(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d124.0.6367.60)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-FJ5LOAI\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 124.0.6367.60, chrome: {chromedriverVersion: 123.0.6312.122 (31f8248cdd9..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:54634}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: afb234bd0a320aa27f37f4e48a21e97d\n*** Element info: {Using\u003did, value\u003dinput-username}\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.throwNoSuchElementExceptionWithCauseIfPresent(WebElementFacadeImpl.java:1043)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.checkPresenceOfWebElement(WebElementFacadeImpl.java:1016)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilVisible(WebElementFacadeImpl.java:1023)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy25.waitUntilVisible(Unknown Source)\r\n\tat shopping.pages.LoginPage.inputToUsername(LoginPage.java:61)\r\n\tat shopping.steps.LoginStepDef.inputToUsername(LoginStepDef.java:50)\r\n\tat ✽.Input \"demo\" to username(src/test/resources/features/test/Demo.feature:6)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d124.0.6367.60)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-FJ5LOAI\u0027, ip: \u0027192.168.0.104\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.21\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 124.0.6367.60, chrome: {chromedriverVersion: 123.0.6312.122 (31f8248cdd9..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:54634}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: afb234bd0a320aa27f37f4e48a21e97d\n*** Element info: {Using\u003did, value\u003dinput-username}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.findElement(WebDriverFacade.java:222)\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.findElementImmediately(SmartAjaxElementLocator.java:139)\r\n\tat net.thucydides.core.annotations.locators.SmartAjaxElementLocator.findElement(SmartAjaxElementLocator.java:116)\r\n\tat net.serenitybdd.core.pages.WebElementResolverByElementLocator.resolveForDriver(WebElementResolverByElementLocator.java:30)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.getElement(WebElementFacadeImpl.java:221)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.isVisible(WebElementFacadeImpl.java:450)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.isCurrentlyVisible(WebElementFacadeImpl.java:499)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$1.apply(WebElementExpectations.java:23)\r\n\tat net.serenitybdd.core.pages.WebElementExpectations$1.apply(WebElementExpectations.java:15)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.checkPresenceOfWebElement(WebElementFacadeImpl.java:1010)\r\n\tat net.serenitybdd.core.pages.WebElementFacadeImpl.waitUntilVisible(WebElementFacadeImpl.java:1023)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat net.thucydides.core.annotations.locators.AbstractSingleItemHandler.invoke(AbstractSingleItemHandler.java:45)\r\n\tat com.sun.proxy.$Proxy25.waitUntilVisible(Unknown Source)\r\n\tat shopping.pages.LoginPage.inputToUsername(LoginPage.java:61)\r\n\tat shopping.steps.LoginStepDef.inputToUsername(LoginStepDef.java:50)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Input \"demo\" to password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.inputToPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click to Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.clickToLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close dialog",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.closeDialog()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify Logout is displayed in Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.verifyLogoutIsDisplayedInHomepage()"
});
formatter.result({
  "status": "skipped"
});
});