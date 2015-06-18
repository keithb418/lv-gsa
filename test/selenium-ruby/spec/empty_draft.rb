require_relative '../spec_helper'

include RSpec::Expectations

# feel free to use this outline if it's useful, ignore if not
# Sample empty outline with before, after and basic context, it etc for stories and acceptance criteria being tested
# rename the file as needed, make sure it ends with _spec.rb so it will be picked up by jenkins.
# this is a sample only, modify as needed for your purposes

describe 'Describe your tests - for example Patient Detail Page' do
  before(:all) do
    @driver = Selenium::WebDriver.for :firefox
    @accept_next_alert = true
    @driver.manage.timeouts.implicit_wait = 3
    @verification_errors = []
    
    @driver.get("localhost:9000")
  end
  before(:each) do
  end
  after(:each) do
  end
  after(:all) do
    @driver.quit
    expect(@verification_errors).to eq []
  end

  context 'Story being tested - ' do
    # story jira ID
    it 'what is being tested' do
      # acc ticket id
      # pending("why is it pending - remove when ready")
      expect(@driver.find_element(:id,'content').text).to include 'hi'
      # selenium code goes here including lines such as
      # expect(@driver.find_element(:id, "splashTitle").text).to eq "SafeWomenRx"
    end
  end

end
