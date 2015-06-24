require_relative '../../selenium-ruby/pages/Welcome'

describe 'Welcome page' do
  # GSA-1: Welcome Page
  before(:all) do
    @welcome = Welcome.new (@driver)
  end

  it 'will show the app name' do
  # place holder for now
    expect(@welcome.return_welcome_header).to match "MedChecker"
  end

  it 'will have a link to proceed to app' do
    expect(@welcome.return_proceed_button.text).to eq "Get Started!"
  end
  # and verify clicking link takes to you to the main page of the app
  it 'will take you to the main app when you click proceed to app' do
    @welcome.return_proceed_button.click
    expect(@welcome.return_header_text).to match "MedChecker"
  end

end

