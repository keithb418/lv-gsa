class About


  def initialize (driver)
    @driver =  driver
  end

  def return_h2_array
    wait { @driver.find_elements(:css, '#about h2') }
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

