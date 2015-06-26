require_relative '../../selenium-ruby/pages/Welcome'
require_relative '../../selenium-ruby/pages/Chart'
require_relative '../../selenium-ruby/pages/AddMeds'
require_relative '../../selenium-ruby/pages/Labels'
require_relative '../../selenium-ruby/pages/Menu'


describe 'Graph page' do
  # GSA-4: Go to Graph
  before(:all) do
    @welcome = Welcome.new (@driver)
    @add_meds = AddMeds.new (@driver)
    @labels = Labels.new (@driver)
    @menu = Menu.new (@driver)

    @chart = Chart.new (@driver)
    @welcome.return_proceed_button.click
    @add_meds.add_a_med('benicar')
    @add_meds.add_a_med('tylenol')
    @add_meds.add_a_med('advil')
    @menu.click_action_button # should take you to chart
  end


  it 'shows the first med with connected warnings by default' do
    expect(@chart.return_first_med_class).to match 'active' #grab the first med and verify the class includes active
  end

  it 'will allow user to tap med to show connected warnings' do
    @chart.return_second_med_label.click
    expect(@chart.return_first_med_class).to_not match 'active'
    expect(@chart.return_second_med_class).to match 'active'
  end

  it 'will allow user to tap warning to show connected meds' do
    @chart.return_first_warning_label.click
    expect(@chart.return_first_warning_class).to match 'active'
  end

  it 'will allow user to tap a med name twice to go to label page' do
    @chart.double_click_element(@chart.return_first_med_label)
    expect(@labels.get_med_label_text).to match "Brand Name"
  end

end

