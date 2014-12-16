require_relative './atom'

class Ion < Atom
  attr_accessor :charge

  def initialize(charge, opts)
    raise Exception.new("Charge must be \'+\' or \'-\'") unless charge =~ /(\+|\-)/
    @charge = charge
    super(opts)
  end

  def name
    ELEMENTS.select{|key, value| value[:number] == electrons}.keys[0].to_s + @charge
  end
end


ion = Ion.new("+", {:electrons => 2})
puts ion.common_name
puts ion.name
