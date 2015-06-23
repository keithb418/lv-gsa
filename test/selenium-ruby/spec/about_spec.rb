require_relative '../../selenium-ruby/pages/Welcome'

describe 'About page' do
  #GSA-6: About page
  before(:all) do
    @welcome = Welcome.new (@driver)
    @welcome.return_proceed_button.click
  end


  xit 'will contain about text about the app' do
    # placeholder test until about page exists
  end

  xit 'will contain a disclaimer' do
    # put disclaimer check here
  end

  xit 'will contain copyright text' do
    # placeholder test until about page exists
  end

  xit 'will be reachable to from the menu' do
    # placeholder test until about page exists
  end

end

