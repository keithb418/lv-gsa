require 'rubygems'
require 'rspec'
require 'rspec/expectations'
require 'selenium-webdriver'
# require 'rspec_junit_formatter'
# require 'appium_lib'

RSpec.configure do |config|
  config.before(:all) do
    @driver = Selenium::WebDriver.for :firefox
    @accept_next_alert = true
    @driver.manage.timeouts.implicit_wait = 3

    @app_url = "localhost:9000"
    @driver.get(@app_url)
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

  def wait(&blk)
    wait = Selenium::WebDriver::Wait.new(:timeout => 30)
    wait.until {yield}
  end

end
