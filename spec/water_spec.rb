describe 'Water' do
  it 'is composed of H2O' do
    hydrogens = 2.times.collect{Atom.new(:electrons => 1)}
    oxygen = Atom.new(:electrons => 8)

    water = Compound.new
    water.atoms = [hydrogens, oxygen]
    
    expect(water.name).to eq("Water")
    expect(water.elements).to eq("HHO")
  end
end