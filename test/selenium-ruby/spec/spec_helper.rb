require 'rubygems'
# require 'json'
require 'selenium-webdriver'
require 'rspec'
require 'rspec/expectations'
require 'selenium-webdriver'
require_relative "_config"
# require 'rspec_junit_formatter'
# require 'appium_lib'

RSpec.configure do |config|
  config.before(:all) do
    @driver = Selenium::WebDriver.for :firefox
    @accept_next_alert = true
    @driver.manage.timeouts.implicit_wait = 3

    
    @driver.get($app_url)
  end

  config.after(:all) do
    @driver.quit
  end

  def element_present?(how, what)
    @driver.find_element(how, what)
    true
  rescue Selenium::WebDriver::Error::NoSuchElementError
    false
  end
end

def element_visible?(how, what)
  @driver.find_element(how, what).isDisplayed()
  true
rescue Selenium::WebDriver::Error::NoSuchElementError
  false
end

def alert_present?()
  @driver.switch_to.alert
  true
rescue Selenium::WebDriver::Error::NoAlertPresentError
  false
end

def verify(&blk)
  yield
rescue ExpectationNotMetError => ex
  @verification_errors << ex
end

def wait(&blk)
  wait = Selenium::WebDriver::Wait.new(:timeout => 30)
  wait.until {yield}
end

def close_alert_and_get_its_text(how, what)
  alert = @driver.switch_to().alert()
  alert_text = alert.text
  if (@accept_next_alert) then
    alert.accept()
  else
    alert.dismiss()
  end

end
