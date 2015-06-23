class Welcome


  def initialize (driver)
    @driver =  driver
  end

  def return_header_text
    # this should move to another file since it's no longer on the splash page
    # this i sthe title for the rest of th epages.
    return wait { @driver.find_element(:id, 'header').text }
  end

  def return_welcome_header
    return wait { @driver.find_element(:id, 'welcome').text }
  end
  def return_proceed_button
    return wait { @driver.find_element(:id, "proceed-to-app-btn") }
  end
end

