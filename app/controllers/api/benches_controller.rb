class Api::BenchesController < ApplicationController
  def index 
    # @benches = Bench.all
    @benches = Bench.in_bounds(params[:bounds])
    # debugger  
  end 

  def create 
  end 

end
