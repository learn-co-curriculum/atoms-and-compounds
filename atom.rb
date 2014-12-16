require_relative './table'
class Atom
  attr_accessor :electrons

  ELEMENTS = Table.new.elems

  def initialize(opts)
    @electrons = opts[:electrons]
  end

  def name
    ELEMENTS.select{|key, value| value[:number] == electrons}.values[0][:name]
  end

end
