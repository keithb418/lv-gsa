require_relative '../../selenium-ruby/pages/Welcome'

describe 'Label page' do
  # GSA-4: Go to Graph
  before(:all) do
    @welcome = Welcome.new (@driver)

    @welcome.return_proceed_button.click
  end

  it 'will show full label info' do
    # tests here
  end

  it 'will allow user to tap warning to show cnnected meds' do
    # tests here
  end

  it 'will allow user to tap a med name twice to go to label page' do
    # tests here
  end

  # back button availble
  # graph button avail
  # clean and esily read - can not be automated

  # NOTES: no ac for having graph or meds button on the med list or graph page
  # also
end

