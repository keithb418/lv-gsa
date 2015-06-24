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

end

