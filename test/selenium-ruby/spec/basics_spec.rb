require_relative '../../selenium-ruby/pages/Splash'

describe 'Splash page' do
  # renaming to _draft - these tests are done in other scripts. no need for it anymore
  before(:all) do
    @splash = Splash.new (@driver)
  end


  it 'will have hello world text' do
    expect(@driver.find_element(:id, "content").text).to match "Hello World"
  end

  it 'will have a button to proceed to app' do
    expect(@driver.find_element(:id, "proceed-to-app-btn").text).to eq "Proceed to App"
  end

end

