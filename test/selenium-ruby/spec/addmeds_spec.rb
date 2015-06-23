require_relative '../../selenium-ruby/pages/Welcome'

describe 'Add Meds functionality' do
  # GSA-3: Add Meds
  before(:all) do
    @welcome = Welcome.new (@driver)

    @welcome.return_proceed_button.click
  end

  it 'will return existing list alphanumeric order' do
    #stuff goes here
  end

  it 'will have a max of 10 meds' do
    # need to add 10 and verify can't add an 11th
  end

  it 'will save to session storage' do
    # quit the driver and bring it back up, should still have list?
  end

  it 'will allow user to remove a med from list' do

  end
  # these are really GSA-3 or 4
  it 'will include a link to show the graph' do
    expect(@driver.find_element(:id, "action-btn")).to be_truthy

  end

  it 'will take users to the graph when graph link clicked' do
    @driver.find_element(:id, "action-btn").click
    sleep 1
    expect(@driver.find_element(:class, 'subheader').text).to match 'Medication Warnings Graph'

    # QUESTION: what does this show when there are meds listed yet
    # basic outline:
    # add a couple meds
    # click the button
    # check that the graph page is displayed
    # Title of that page is:  Medication Warnings Graph
  end

end

