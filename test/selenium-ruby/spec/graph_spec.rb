require_relative '../../selenium-ruby/pages/Welcome'

describe 'Graph page' do
  # GSA-4: Go to Graph
  before(:all) do
    @welcome = Welcome.new (@driver)

    @welcome.return_proceed_button.click
  end

  xit 'will allow user to tap med to show connected warnings' do
    # tests here
  end

  xit 'will allow user to tap warning to show cnnected meds' do
    # tests here
  end

  xit 'will allow user to tap a med name twice to go to label page' do
    # tests here
  end



end

