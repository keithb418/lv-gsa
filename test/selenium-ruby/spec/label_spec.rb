require_relative '../../selenium-ruby/pages/Welcome'
require_relative '../../selenium-ruby/pages/AddMeds'
require_relative '../../selenium-ruby/pages/Labels'
require_relative '../../selenium-ruby/pages/Menu'
require_relative '../../selenium-ruby/pages/Chart'



describe 'Label page' do
  # GSA-5: Label
  before(:all) do
    @welcome = Welcome.new (@driver)
    @search = Search.new (@driver)
    @add_meds = AddMeds.new (@driver)
    @labels = Labels.new (@driver)
    @menu = Menu.new (@driver)
    @chart = Chart.new (@driver)

    @welcome.return_proceed_button.click
  end

  it 'will be access from med list' do
    @add_meds.add_a_med('benicar')
    @add_meds.return_med_list_array[0].click
    sleep 1
    expect(@labels.get_subheader_text).to match 'benicar'.upcase
  end

  it 'will show full label info' do
    # using crestor for this test since it returns all sections
    med_label_text = @labels.get_med_label_text
    expect(med_label_text).to match "Brand Name"
    expect(med_label_text).to match "Adverse Reactions"
    expect(med_label_text).to match "Description"
    expect(med_label_text).to match "Warnings"
    expect(med_label_text).to match "Generic Name"
    expect(med_label_text).to match "Manufacturer Name"
  end


  it 'includes a button to return to the list (when accessed from list)' do
    @menu.click_action_button
    expect(@search.return_search_field).to be_truthy
  end

  it 'includes a button to return to the chart (when accessed from chart)' do
    @menu.click_action_button
    @chart.double_click_element(@chart.return_first_med_label)
    sleep 1
    @menu.click_action_button
    expect(@menu.return_subheader_text).to match 'Medication Warnings Chart' # to return to label
  end


end

