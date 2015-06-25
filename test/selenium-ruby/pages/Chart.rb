class Chart

  def initialize (driver)
    @driver =  driver
  end

  def return_med_name
    @driver.find_element(:class, "barlabel")
  end

end

