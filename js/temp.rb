#Strings

'Hello' #single quoted interpreted as is
"Hello" #double quoted interpret \n and \t and allow string interpolation

def multiply(one, two)
	"#{one} multiplied by #{two} equals #{one*two}" #string interpolation use #{}
end  

puts multiply(5, 3) #5 multiplied by 3 equals 15

name = "Tim"
puts name[0] #T

weather = %Q{It's a hot day outside. 
			 Grab your umbrellas} #multi-line string

weather.lines do |line|
	puts "#{line.strip}" #removes leading spaces
end

#methods ending with !change the string. Others return a new string




