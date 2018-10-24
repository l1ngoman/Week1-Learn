arr = ["y",5,7,"ten",2,15,"z"]

def get_nums(array)
  new_arr = []
  array.each do |el|
    if el.is_a?(Integer)
      new_arr << el
    end
  end
  p new_arr
end

get_nums(arr)

# Using select built in method
def get_nums_built_in(array2)
  array2.select { |el| el.is_a? Numeric }
end

p get_nums_built_in(arr)
