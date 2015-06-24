require_relative '../../selenium-ruby/pages/Welcome'
require_relative '../../selenium-ruby/pages/Search'

describe 'Search page' do
  # GSA-2: Search Meds
  before(:all) do
    @welcome = Welcome.new (@driver)
    @search = Search.new (@driver)

    @welcome.return_proceed_button.click
  end

  it 'will have a search bar' do
    expect(@search.return_search_field).to be_truthy
  end

  it 'will autocomplete medicine names - generic name' do
    @search.enter_search_term('acetaminophen')
    expect(@search.return_result_text).to match "OXYCODONE HYDROCHLORIDE AND ACETAMINOPHEN"
  end

  it 'will autocomplete medicine names - brand name' do
    @search.enter_search_term('aspirin')
    expect(@search.return_result_text).to match "ASPIRIN"

  end

  it 'will return no results if input is nomedname' do
    @search.enter_search_term('nomedname')
    expect(@search.return_result_text).to match "No results to display"
  end

end

