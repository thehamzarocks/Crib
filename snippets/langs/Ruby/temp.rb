#Arrays
#collection of object references

heterogenous_array = [1, "two", :three]
puts heterogenous_array[1] #displays two

arr_words = %w{what a great day!}
puts "#{arr_words.first}-#{arr_words.last}" #what-day
puts arr_words[-2] #great
p arr_words[-3, 2] #["a" "great"]
puts arr_words.join(',') #what,a,great,day!

#Modifying
stack = []
stack.push("two") #append using push or <<

queue = []
queue.push("one")
queue.push("two")
puts queue.shift #one (shifts the first element out)

a = [5,4,3,2]
a[6] = 33
p a #[5, 4, 3, 2, nil, nil, 33], auto expandable

a = [1,3,4,7,8,10]
a.each{|num| print num} #loops through the array 1347810

new_arr = a.select{|num| num<10}
				.reject{|num| num.even?} #[1, 3, 7]


new_arr = a.map { |e| e*3 } #multiplies each element by 3



