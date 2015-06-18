class Splash


  def initialize (driver)
    @driver =  driver
  end
  def return_splash_title
    return wait { @driver.find_element(:id, 'header').text }
  end

end

