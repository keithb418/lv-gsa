require_relative '../../selenium-ruby/pages/Welcome'

describe 'About page' do
  before(:all) do
    @welcome = Welcome.new (@driver)
    @welcome.return_proceed_button.click
  end

  xit 'will be linked to from the menu' do
    # placeholder test until about page exists
  end
  xit 'will show the app name' do
    # placeholder test until about page exists
  end

  xit 'will contain about text' do
    # placeholder test until about page exists
  end
end

