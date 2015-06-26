require_relative '../../selenium-ruby/pages/Welcome'
require_relative '../../selenium-ruby/pages/AddMeds'
require_relative '../../selenium-ruby/pages/Search'
require_relative '../../selenium-ruby/pages/Menu'


describe 'Add Meds functionality' do
  # GSA-3: Add Meds
  before(:all) do
    @welcome = Welcome.new (@driver)
    @search = Search.new (@driver)
    @add_meds = AddMeds.new (@driver)
    @menu = Menu.new (@driver)

    @welcome.return_proceed_button.click
  end

  it 'will allow users to add a medication to the list' do
    @add_meds.add_a_med('benicar')
    expect((@add_meds.return_med_list_array[0].text).upcase).to match 'benicar'.upcase
  end

  it 'will return list in order entered (most recent listed first)' do
    @add_meds.add_a_med('crestor') #2
    @add_meds.add_a_med('relpax')
    expect((@add_meds.return_med_list_array[0].text).upcase).to match 'relpax'.upcase
  end

  it 'will have a max of 10 meds' do
    # first few are from previous it blocks
    @add_meds.add_a_med('crest')
    @add_meds.add_a_med('aspirin') # 5
    @add_meds.add_a_med('tylenol')
    @add_meds.add_a_med('advil')
    @add_meds.add_a_med('cold') # 8
    @add_meds.add_a_med('imitrex')
    @add_meds.add_a_med('accupril') #10
    # at this point the input field should be disabled
    expect(@search.search_enabled?).to be false
  end

  it 'will save to session storage' do
    @driver.get(@app_url)
    @welcome.return_proceed_button.click
    expect((@add_meds.return_med_list_array[0].text).upcase).to match 'accupril'.upcase
  end

  it 'will allow user to remove a med from list' do
    @add_meds.return_med_list_checkbox_array[0].click
    @add_meds.return_med_list_checkbox_array[1].click
    @add_meds.return_med_list_checkbox_array[2].click
    @menu.click_action_button
    expect((@add_meds.return_med_list_array[0].text).upcase).to match 'advil'.upcase
  end

end

