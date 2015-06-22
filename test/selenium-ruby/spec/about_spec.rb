require_relative '../../selenium-ruby/pages/Welcome'

describe 'About page' do
  before(:all) do
    @welcome = Welcome.new (@driver)
  end

  it 'will be linked to from the menu' do
    expect(false).to_be true # fail until link is present
  end
  it 'will show the app name' do
    expect(false).to_be true # fail until text is present
  end

  it 'will contain about text' do
    expect(false).to_be true # fail until text is present
  end
end

