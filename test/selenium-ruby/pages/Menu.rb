class Menu


  def initialize (driver)
    @driver =  driver
  end

  def open_menu
    wait {@driver.find_element(:class, "trigger").click}
  end
  def return_medlist_link
    return wait { @driver.find_element(:link, "Med List") }


  end
  def return_graph_link
    return wait { @driver.find_element(:link, "Graph") }
  end

  def return_about_link
    return wait { @driver.find_element(:link, "About") }
  end

  def return_subheader_text
    return wait { @driver.find_element(:class, 'subheader').text }
  end

  def click_action_button
    @driver.find_element(:id, 'action-btn').click
  end

end

