describe 'Water' do
  it 'is composed of H2O' do
    hydrogen = Atom.new(:electrons => 1)
    oxygen = Atom.new(:electrons => 8)

    water = Compound.new(hydrogen, hydrogen, oxygen)

    expect(water.common_name).to eq("Water")
    expect(water.elements).to eq("HHO")
  end
end
