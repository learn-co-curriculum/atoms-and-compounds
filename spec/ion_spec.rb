
describe 'Hydrogen ion' do

  it 'Should be able to be positive' do
    ion = Ion.new("+", {:electrons => 1})
    expect(ion.charge).to eq("+")
    expect(ion.name).to eq("H+")
  end

  it 'Should be able to be negative' do
    ion = Ion.new("-", {:electrons => 9})
    expect(ion.charge).to eq("-")
    expect(ion.name).to eq("F-")
  end
end
