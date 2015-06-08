require_relative './table'
class Atom
  attr_accessor :electrons

  ELEMENTS = Table.new.elems

  def initialize(opts)
    @electrons = opts[:electrons]
  end

  def common_name
    ELEMENTS.select{|key, value| value[:number] == electrons}.values[0][:name]
  end

  def name
    ELEMENTS.select{|key, value| value[:number] == electrons}.keys[0].to_s
  end

  def molar_mass
    ELEMENTS.select{|key, value| value[:number] == electrons}.values[0][:molar]
  end

  def number
    @electrons
  end

end
