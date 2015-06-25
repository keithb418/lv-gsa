require_relative '../../selenium-ruby/pages/Welcome'
require_relative '../../selenium-ruby/pages/Menu'

describe 'Menu' do
  # GSA-7: Menu Button
  before(:all) do
    @welcome = Welcome.new (@driver)
    @menu = Menu.new (@driver)
    @welcome.return_proceed_button.click
  end

  it 'will have links to graph, medlist, about' do
    @menu.open_menu
    expect(@menu.return_graph_link).to be_truthy
    expect(@menu.return_about_link).to be_truthy
    expect(@menu.return_medlist_link).to be_truthy
    @menu.open_menu # click open a 2nd time will close it
  end

  # verify each link takes you to the correct page
  it 'clicking graph link will take you to the correct page' do
    @menu.open_menu
    @menu.return_graph_link.click
    expect(@menu.return_subheader_text).to match 'Medication Warnings Chart'
  end

  it 'clicking about will take you to the correct page' do
    @menu.open_menu
    @menu.return_about_link.click
    expect(@menu.return_subheader_text).to match 'About'
  end

  it 'clicking med list link will take you to the correct page' do
    @menu.open_menu
    @menu.return_medlist_link.click
    expect(@menu.return_subheader_text).to match 'Search for a medicine'
  end

end
