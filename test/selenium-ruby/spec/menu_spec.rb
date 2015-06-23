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
    # this is the list the menu will have eventually
    # expect(element_present?(:link, "Med List")).to be_truthy
    # expect(element_present?(:link, "Graph")).to be_truthy
    # expect(element_present?(:link, "About")).to be_truthy
    expect(@menu.return_twitter_link).to be_truthy
    expect(@menu.return_google_link).to be_truthy
    expect(@menu.return_github_link).to be_truthy
    @menu.open_menu # click open a 2nd time will close it
  end

  # verify each link takes you to the correct page
  it 'clicking graph link will take you to the correct page' do
    @driver.get(@app_url)
    @welcome.return_proceed_button.click
    @menu.open_menu
    @menu.return_twitter_link.click
    # change the graph to medlist and verify on the graph page
  end
  it 'clicking about will take you to the correct page' do
    @driver.get(@app_url)
    @welcome.return_proceed_button.click
    @menu.open_menu
    @menu.return_google_link.click
    # change the above to about and verify on the about page
  end
  it 'clicking med list link will take you to the correct page' do
    @driver.get(@app_url)
    @welcome.return_proceed_button.click
    @menu.open_menu
    @menu.return_github_link.click
    # change the above to medlist and verify on the med list page
  end

end

