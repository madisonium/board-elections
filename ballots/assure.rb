require 'pp'
require File.expand_path('../../collect_entries.rb', __FILE__)

pp CollectEntries.grouped_by_last_name(File.expand_path('..', __FILE__))

puts
puts "Ensure that there aren't any misspellings or combined votes (e.g., same last name)"
puts
