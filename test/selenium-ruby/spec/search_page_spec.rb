require_relative '../../selenium-ruby/pages/Splash'

describe 'Search page' do
  # renaming to _draft - these tests are done in other scripts. no need for it anymore
  before(:all) do
    @splash = Splash.new (@driver)

    @driver.find_element(:id, "proceed-to-app-btn").click

  end


  it 'will have a title of MedChecker' do
    expect(@driver.find_element(:id, "header").text).to match "MedChecker"
  end

  it 'will have a link to show the graph' do
    expect(@driver.find_element(:id, "show-graph-btn").text).to eq "Show Graph"
  end

end

