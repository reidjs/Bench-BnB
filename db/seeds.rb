# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bench1 = Bench.new(description: 'asdf', lat: 37.763046, lng: 122.430742)
bench1.save!
bench2 = Bench.new(description: 'fdsafdsa', lat: 37.743131, lng: 122.461181)
bench2.save!