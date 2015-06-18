require_relative '../../selenium-ruby/pages/Splash'

describe 'Splash page' do
  # renaming to _draft - these tests are done in other scripts. no need for it anymore
  before(:all) do
    @splash = Splash.new (@driver)

    @driver.find_element(:id, "proceed-to-app-btn").click

  end


  it 'will have a title of Med Checker' do
    expect(@driver.find_element(:id, "header").text).to match "Med Checker"
  end

  it 'will have a section for medication lists' do
    expect(@driver.find_element(:css, ".med-list h3").text).to eq "Med List"
  end

end

