class Compound
  attr_accessor :atoms

  def initialize(*atoms)
    @atoms = []
    atoms.map{|atom| @atoms.push(atom)}
  end

  COMMON_COMPOUNDS = {
    "Water" => "HHO"
  }

  def elements
    atoms.flatten.collect{|a| a.name}.sort.join.to_s
  end

  def common_name
    COMMON_COMPOUNDS.invert[elements]
  end

end
