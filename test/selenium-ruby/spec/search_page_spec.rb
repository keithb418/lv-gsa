require_relative '../../selenium-ruby/pages/Welcome'

describe 'Search page' do
  # renaming to _draft - these tests are done in other scripts. no need for it anymore
  before(:all) do
    @welcome = Welcome.new (@driver)

    @welcome.return_proceed_button.click
  end

  it 'will have a search bar' do
    expect(@driver.find_element(:class, "med-search")).to be_truthy
  end

  xit 'will auto complete drug name' do
    # basic outline
      # enter first 3 chars of a med: adv
      # let it autocomplete
      # verify advil is returned
  end

  it 'will include a link to show the graph' do
    expect(@driver.find_element(:id, "action-btn")).to be_truthy
  end

  xit 'will have a link to show the graph' do
    # QUESTION: what does this show when there are meds listed yet
    # basic outline:
      # add a couple meds
      # click the button
      # check that the graph page is displayed
    # Title of that page is:  Medication Warnings Graph
  end

end

