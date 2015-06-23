require_relative '../../selenium-ruby/pages/Welcome'

describe 'Search page' do
  # renaming to _draft - these tests are done in other scripts. no need for it anymore
  before(:all) do
    @splash = Splash.new (@driver)

    @driver.find_element(:id, "proceed-to-app-btn").click

  end

  it 'will have a search bar' do
    expect(@driver.find_element(:id, "input-group").text).to be_true
  end

  xit 'will auto complete drug name' do
    expect(@driver.find_element(:id, "show-graph-btn").text).to eq "Show Graph"
  end

  xit 'will have a link to show the graph' do
    # what does this show when there are meds listed yet
    # flow:
      # add a couple meds
      # click the button
      # check that the graph is displayed
  end

end

