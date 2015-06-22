require_relative '../../selenium-ruby/pages/Splash'

describe 'Splash page' do
  before(:all) do
    @splash = Splash.new (@driver)
  end

  it 'will have hello world text' do
    expect(@splash.return_splash_header).to match "Hello World"
  end

  it 'will have a button to proceed to app' do
    expect(@splash.return_proceed_button.text).to eq "Proceed to App"
  end

  it 'will take you to the main app when you click proceed to app' do
    @splash.return_proceed_button.click
    expect(@splash.return_header_text).to match "MedChecker"


  end

end

