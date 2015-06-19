require_relative '../../selenium-ruby/pages/Splash'

describe 'Menu' do
  # renaming to _draft - these tests are done in other scripts. no need for it anymore
  before(:all) do
    @splash = Splash.new (@driver)


    expect(@driver.find_element(:id, "proceed-to-app-btn").text).to eq "Proceed to App"

  end


  it 'will have the correct elements' do
    @driver.find_element(:class, "menu-toggle").click
    element_present?(:link, "Med List").should be_true
    element_present?(:link, "Graph").should be_true
    # any others
  end

  it 'clicking med list will take you to the correct page' do
    @driver.find_element(:class, "menu-toggle").click
    @driver.find_element(:link, "Med List").click
    # verify on the med list page
  end
  it 'clicking med list will take you to the correct page' do
    @driver.find_element(:class, "menu-toggle").click
    @driver.find_element(:link, "Graph").click
    # verify on the graph page
  end

end

