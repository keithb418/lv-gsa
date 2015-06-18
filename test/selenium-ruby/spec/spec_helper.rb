require 'rubygems'
# require 'json'
require 'selenium-webdriver'
require 'rspec'

version = '>= 0'

if ARGV.first =~ /^_(.*)_$/ and Gem::Version.correct? $1 then
  version = $1
  ARGV.shift
end

# don't know why these are here, but it breaks rspec
gem 'rspec-core', version
load Gem.bin_path('rspec-core', 'rspec', version)

def element_present?(how, what)
  @driver.find_element(how, what)
  true
rescue Selenium::WebDriver::Error::NoSuchElementError
  false
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
  alert_text
ensure
  @accept_next_alert = true
end


def getElements(how, what)
  elements = []
  elements = @driver.find_elements(how, what)
  return elements
end


