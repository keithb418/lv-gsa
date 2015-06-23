require_relative '../../selenium-ruby/pages/Welcome'
require_relative '../../selenium-ruby/pages/Menu'

describe 'Menu' do
  # renaming to _draft - these tests are done in other scripts. no need for it anymore
  before(:all) do
    @welcome = Welcome.new (@driver)
    @menu = Menu.new (@driver)
    @welcome.return_proceed_button.click
  end


  it 'will have the correct elements' do
    @menu.open_menu
    # this is the list the menu will have eventually
    # expect(element_present?(:link, "Med List")).to be_truthy
    # expect(element_present?(:link, "Graph")).to be_truthy
    # expect(element_present?(:link, "About")).to be_truthy
    expect(@menu.return_twitter_link).to be_truthy
    expect(@menu.return_google_link).to be_truthy
    expect(@menu.return_github_link).to be_truthy

    @driver.find_element(:class, "trigger").click
  end

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

