
@benches.each do |bench|
  json.set! bench.id do 
    json.extract! bench, :id, :description, :lat, :lng
  end 
  # json.extract! b:id, bench.id
  # json.id bench.id
end 