class Search


  def initialize (driver)
    @driver =  driver
  end

  def return_search_field
    wait { @driver.find_element(:id, 'med-search') }
  end

  def enter_search_term (query)
    input_field = self.return_search_field
    input_field.clear
    input_field.send_keys query

  end

  def return_result_text
    @driver.find_element(:id, "search-results").text

  end
end

