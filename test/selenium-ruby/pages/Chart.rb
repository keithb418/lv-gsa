class Chart

  def initialize (driver)
    @driver =  driver
  end

  def return_first_med_label
    @driver.find_elements(:css, ".part0 .barlabel")[0]
  end
  def return_second_med_label
    @driver.find_elements(:css, ".part0 .barlabel")[1]
  end

  def return_first_med_class
    @driver.find_elements(:css, '.part0 .mainbar')[0].attribute('class')
  end
  def return_second_med_class
    @driver.find_elements(:css, '.part0 .mainbar')[1].attribute('class')
  end

  def return_first_warning_label
    @driver.find_elements(:css, ".part1 .barlabel")[0]
  end
  def return_first_warning_class
    @driver.find_elements(:css, '.part1 .mainbar')[0].attribute('class')
  end

end

