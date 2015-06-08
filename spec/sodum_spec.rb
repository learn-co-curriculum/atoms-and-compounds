describe 'Sodium' do
  it 'Should have a molar mass of 22.9898 g/mol' do
    sodium = Atom.new(:electrons => 11)

    expect(sodium.molar_mass).to eq(22.989769)
  end

  it 'Should have a common name of \'sodium\'' do
    sodium = Atom.new(:electrons => 11)

    expect(sodium.common_name).to eq('Sodium')
  end

  it 'Should have a chemical name of \'Na\'' do
    sodium = Atom.new(:electrons => 11)

    expect(sodium.name).to eq('Na')
  end
end
