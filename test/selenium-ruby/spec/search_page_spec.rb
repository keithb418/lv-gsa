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
    @search.return_search_field.click # click search to open the input
    @search.enter_search_term('acetaminophen')
    sleep 1
    expect(@search.return_result_text).to match "OXYCODONE HYDROCHLORIDE AND ACETAMINOPHEN"
    @search.return_search_field.click # click search again to close the input

  end

  it 'will autocomplete medicine names - brand name' do
    @search.return_search_field.click # click search to open the input
    @search.enter_search_term('aspirin')
    sleep 1
    expect(@search.return_result_text).to match "ASPIRIN"
    @search.return_search_field.click # click search again to close the input

  end

  it 'will return no results if input is zzz' do
    @search.return_search_field.click # click search to open the input
    @search.enter_search_term('zzz')
    sleep 1
    expect(@search.return_result_text).to match "No results found"
    @search.return_search_field.click # click search again to close the input
  end

end

