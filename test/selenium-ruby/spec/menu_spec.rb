require_relative '../../selenium-ruby/pages/Welcome'

describe 'Menu' do
  # renaming to _draft - these tests are done in other scripts. no need for it anymore
  before(:all) do
    @welcome = Welcome.new (@driver)
    @driver.find_element(:id, "proceed-to-app-btn").click
  end


  it 'will have the correct elements' do
    @driver.find_element(:class, "trigger").click
    # this is the list the menu will have eventually
    # expect(element_present?(:link, "Med List")).to be_truthy
    # expect(element_present?(:link, "Graph")).to be_truthy
    # expect(element_present?(:link, "About")).to be_truthy
    # for now check for the twitter, google plus, github
    expect(element_present?(:link, "Google+")).to be_truthy
    expect(element_present?(:link, "Twitter")).to be_truthy
    expect(element_present?(:link, "GitHub")).to be_truthy

    @driver.find_element(:class, "trigger").click
  end

  xit 'clicking graph link will take you to the correct page' do
    @driver.find_element(:class, "menu-toggle").click
    @driver.find_element(:link, "Graph").click
    # verify on the graph page
  end
  xit 'clicking about will take you to the correct page' do
    @driver.find_element(:class, "trigger").click
    @driver.find_element(:link, "About").click
    # verify on the about page
  end
  xit 'clicking med list link will take you to the correct page' do
    @driver.find_element(:class, "trigger").click
    @driver.find_element(:link, "Med List").click
    # verify on the med list page
  end

end

