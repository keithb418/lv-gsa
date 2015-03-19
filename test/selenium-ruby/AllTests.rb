require "selenium-webdriver"
gem "test-unit"
require "test/unit"

# uncomment this if using osx firefox nightly
# Selenium::WebDriver::Firefox::Binary.path='/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin'


Dir["#{File.dirname(__FILE__)}/*.rb"].delete_if { |f| f =~ /#{__FILE__}/}.each { |f| require f }
