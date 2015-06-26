require_relative '../../selenium-ruby/pages/Welcome'
require_relative '../../selenium-ruby/pages/Menu'
require_relative '../../selenium-ruby/pages/About'

describe 'About page' do
  #GSA-6: About page
  before(:all) do
    @welcome = Welcome.new (@driver)
    @menu = Menu.new (@driver)
    @about = About.new (@driver)

    @welcome.return_proceed_button.click
  end


  it 'will be reachable from the menu' do
    @menu.open_menu
    @menu.return_about_link.click
    expect(@menu.return_subheader_text).to match 'About'
  end

  it 'will contain the mission statement' do
    # put disclaimer check here
    expect(@about.return_h2_array[0].text).to eq "Mission Statement"
  end

  it 'will contain the disclaimer' do
    expect(@about.return_h2_array[1].text).to eq "Disclaimer"
  end

  it 'will contain copyright text' do
    expect(@about.return_h2_array[2].text).to eq "Copyright Waiver"
  end
end

