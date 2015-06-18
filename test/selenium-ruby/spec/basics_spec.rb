require_relative '../../selenium-ruby/pages/Splash'

describe 'Splash page' do
  # renaming to _draft - these tests are done in other scripts. no need for it anymore
  before(:all) do
    @splash = Splash.new (@driver)
  end

  it 'will have the title Med' do
    expect(@splash.return_splash_title).to match 'Med'
  end

  it 'will have hihihihi' do
    expect(@driver.find_element(:id, "content").text).to match "hihihihihi"

  end


end

