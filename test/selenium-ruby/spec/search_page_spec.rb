require_relative '../../selenium-ruby/pages/Welcome'

describe 'Search page' do
  # renaming to _draft - these tests are done in other scripts. no need for it anymore
  before(:all) do
    @welcome = Welcome.new (@driver)

    @welcome.return_proceed_button.click
  end

  it 'will have a search bar' do
    expect(@driver.find_element(:class, 'select2-selection')).to be_truthy
  end

  it 'will autocomplete medicine names' do
    @driver.find_element(:class, 'select2-selection').click
    @driver.find_element(:css, "input.select2-search__field").clear
    @driver.find_element(:css, "input.select2-search__field").send_keys "acetaminophen"
    sleep 1
    expect(@driver.find_element(:css, "li.select2-results__option").text).to match "OXYCODONE HYDROCHLORIDE AND ACETAMINOPHEN"
    @driver.find_element(:class, 'select2-selection').click

  end
  it 'will return no results if input is zzz' do
    # basic outline
      # enter first 3 chars of a med: adv
      # let it autocomplete
      # verify advil is returned
    sleep 1
    @driver.find_element(:class, 'select2-selection').click
    @driver.find_element(:css, "input.select2-search__field").clear
    @driver.find_element(:css, "input.select2-search__field").send_keys "zzz"
    sleep 1
    expect(@driver.find_element(:css, "li.select2-results__option").text).to match "No results found"
    @driver.find_element(:class, 'select2-selection').click

    # sleep 10

  end

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

