class Atom
  attr_accessor :electrons

  ELEMENTS = {
    "H" => 1,
    "O" => 8
  }

  def initialize(opts)
    @electrons = opts[:electrons]
  end

  def name
    ELEMENTS.invert[electrons]
  end

end