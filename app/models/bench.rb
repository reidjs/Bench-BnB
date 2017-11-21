class Bench < ApplicationRecord
  def self.in_bounds(bounds)
    # ne_lat = bounds.northEast.lat 
    # ne_lng = bounds.northEast.lng 
    # sw_lat = bounds.southWest.lat 
    # sw_lng = bounds.southWest.lng 
    p bounds
    p "apply bench bounds filter"   
    # p params 
    Bench.all
  end 
end
