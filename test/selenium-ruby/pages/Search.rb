class Search


  def initialize (driver)
    @driver =  driver
  end

  def return_search_field
    wait { @driver.find_element(:class, 'select2-selection') }
  end

  def return_search_input_field
    wait { @driver.find_element(:css, "input.select2-search__field") }
  end

  def enter_search_term (query)
    input_field = self.return_search_input_field
    input_field.clear
    input_field.send_keys query
  end

  def return_result_text
    wait { @driver.find_element(:css, "li.select2-results__option").text }

  end
end

