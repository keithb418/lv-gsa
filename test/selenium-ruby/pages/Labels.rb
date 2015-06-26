

class Labels


  def initialize (driver)
    @driver =  driver
    @search = Search.new @driver
  end

  def get_subheader_text
    wait {@driver.find_element(:class, 'subheader').text}
  end

  def get_med_label_text
    sleep 1
    return wait {@driver.find_element(:id, 'med-label').text}
  end

end

