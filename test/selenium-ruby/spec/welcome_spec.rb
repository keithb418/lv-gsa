require_relative '../../selenium-ruby/pages/Welcome'

describe 'Welcome page' do
  before(:all) do
    @welcome = Welcome.new (@driver)
  end

  it 'will show the app name' do
  # place holder for now
    expect(@splash.return_splash_header).to match "Hello World"
  end

  it 'will contain a disclaimer' do
   # put disclaimer check here
    expect(false).to_be true # fail until text is present
  end
  it 'will have a link to proceed to app' do
    expect(@splash.return_proceed_button.text).to eq "Proceed to App"
  end

  it 'will take you to the main app when you click proceed to app' do
    @splash.return_proceed_button.click
    expect(@splash.return_header_text).to match "MedChecker"
  end

end

