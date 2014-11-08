class Compound
  attr_accessor :atoms
  COMMON_COMPOUNDS = {
    "Water" => "HHO"
  }

  def elements
    atoms.flatten.collect{|a| a.name}.sort.join
  end

  def name
    COMMON_COMPOUNDS.invert[elements]
  end

end