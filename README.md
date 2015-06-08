---
tags: chemistry, object orientation
language: ruby
---

# Atoms to Compounds via Object Orientation

The goal of this lab is to teach about how Atoms interact with each other to create compounds. Your goal is to build an Object Model where `Atom` has electrons and `Compound` has atoms.

There's a beautiful symmetry between chemistry and programming.

## Describing Water

![Water](http://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Water-3D-balls.png/640px-Water-3D-balls.png)

Water is made of H20, two hydrogen atoms and one oxygen atom.

Your goal is to create atoms that will make one molecule of the compound of water.

You can make an atom via `Atom.new(:electrons => 1)`.

Lookup the electron counts of Oxygen and Hydrogen in the [Periodic Table of Elements](http://en.wikipedia.org/wiki/Periodic_table) so you can create the correct Atoms.

![Periodic Table](http://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Periodic_table_%28polyatomic%29.svg/500px-Periodic_table_%28polyatomic%29.svg.png)

You can add atoms to a `Compound` via the `Compound.new` method. For example:

```ruby
describe 'Table Salt (Sodium Chloride) NaCL' do
    it 'is composed of Sodium and Chlorine in equal parts' do
        sodium = Atom.new(:electrons => 11)
        chlorine = Atom.new(:electrons => 17)

        salt = Compound.new(sodium, chlorine)
        expect(salt.name).to eq("Sodium Chloride")
    end
end
```

Have fun programming some compounds!!!
