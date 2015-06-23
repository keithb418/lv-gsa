class Menu


  def initialize (driver)
    @driver =  driver
  end

  def open_menu
    wait {@driver.find_element(:class, "trigger").click}
  end
  def return_github_link
    return wait { @driver.find_element(:link, "GitHub") }
  end
  def return_twitter_link
    return wait { @driver.find_element(:link, "Twitter") }
  end

  def return_google_link
    return wait { @driver.find_element(:link, "Google+") }
  end

# once the menu is done change the find element lines to:
# expect(element_present?(:link, "Med List")).to be_truthy
# expect(element_present?(:link, "Graph")).to be_truthy
# expect(element_present?(:link, "About")).to be_truthy
# and change the names to match
end

