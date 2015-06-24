require_relative '../../selenium-ruby/pages/Search'


class AddMeds


  def initialize (driver)
    @driver =  driver
    @search = Search.new @driver
  end

  def add_a_med (medname)
    @search.enter_search_term(medname)
    med_list = @driver.find_elements(:css, '#search-results span.brand-name')
    med_list[0].click
  end

  def return_med_list
    @driver.find_element(:class, 'med-list').text
  end

  def return_med_list_array
    @driver.find_elements(:css, '.med-list .med-list-item button')
  end
  def return_med_list_checkbox_array
    @driver.find_elements(:css, '.med-list .med-list-item label')
  end

end

