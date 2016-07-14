function Atom(protons){
  this.protons = protons
  this.data = Atom.TABLE[protons]
  this.metallic = false // Making everything non metallic for now
}

Atom.TABLE = {
  1: {
    name: "Hydrogen",
    weight: 1.01,
    symbol: "H",
    baseName: "Hydro"
  },
  2: {
    name: "Helium",
    weight: 4.002602,
    symbol: "He",
    baseName: "Heli"
  },
  6: {
    name: "Carbon",
    weight: 12.011,
    symbol: "C",
    baseName: "Carb"
  },
  8: {
    name: "Oxygen",
    weight: 15.9,
    symbol: "O",
    baseName: "Oxy"
  },
  12: {
    name: "Magnesium",
    weight: 24.305,
    symbol: "Mg",
    baseName: "Mag"
  },
  14: {
    name: "Silicon",
    weight: 28.085,
    symbol: "Si",
    baseName: "Sili"
  },
  15: {
    name: "Phosphorous",
    weight: 30.973,
    symbol: "P",
    baseName: "Phosph"
  },
  16: {
    name: "Sulfur",
    weight: 32.06,
    symbol: "S",
    baseName: "Sulf"
  },
  17: {
    weight: 35.45,
    name: "Chlorine",
    symbol: "Cl",
    baseName: "Chloro"
  }
}

Atom.electronsPerShell = {
  1: 2,
  2: 8,
  3: 8,
  4: 18,
  5: 18,
  6: 32,
  7: 32
}

Atom.prototype.name = function(){
  return this.data["name"]
}

Atom.prototype.valenceElectrons = function(){
  var electronsLeft = this.protons
  if (electronsLeft <= 2){
    return electronsLeft
  }

  var valenceCounter = Atom.electronsPerShell[1]

  for(var shellNumber = 1; valenceCounter > 0; shellNumber++){
    electronsLeft = electronsLeft - Atom.electronsPerShell[shellNumber]
    valenceCounter = electronsLeft - Atom.electronsPerShell[shellNumber+1]
  }
  return electronsLeft
}

function Compound(elements){
  this.elements = elements;
}

Compound.PREFIXES = {
  1: "Mono",
  2: "Di",
  3: "Tri",
  4: "Tetra",
  5: "Penta",
  6: "Hexa",
  7: "Hepta",
  8: "Octo",
  9: "Nono",
  10: "Deca"
}

Compound.prototype.composition = function(){
  var histogram = {};

  for(var i = 0; i < this.elements.length; i++){
    if (histogram[this.elements[i].name()]){
      histogram[this.elements[i].name()]["count"]++
    } else {
      histogram[this.elements[i].name()] = {"count": 1, "baseName": this.elements[i].data['baseName']}
    }
  }

  return histogram
}

Compound.prototype.formula = function(){
  var f = "";

  for(var i = 0; i < this.elements.length; i++){
    f = f + this.elements[i].data["symbol"]
  }

  return f;
}

Compound.prototype.name = function(){
  var allNonMetallic = true;
  var compoundName = "";

  for(var i = 0; i < this.elements.length; i++){
    e = this.elements[i]
    if (e.metallic){
      allNonMetallic = false
    }
  }

  if (allNonMetallic){
    // Count how many elements of each have // histogram
    var compoundHash = this.composition();
    var compoundName = "";
    var i = 1;

    // for each key value in the hash
    for (var elementName in compoundHash) {
      var elementHash = compoundHash[elementName];
      var elementCount = elementHash["count"];
      var baseName = elementHash["baseName"];

      if (i == 1){
        if (elementCount == 1){
          compoundName += elementName
        } else {
          compoundName += Compound.PREFIXES[elementCount] + elementName
        }
      } else {
        compoundName += Compound.PREFIXES[elementCount] + baseName
      }
      i++;
    }

    compoundName += "ide"
  }
  return compoundName;
}


Compound.prototype.weight = function(){
  var total = 0;
  for(var i = 0; i < this.elements.length; i++ ){
    var e = this.elements[i]
    total += e.data["weight"]
  }

  return total;
}

var hydrogen = new Atom(1)
var helium = new Atom(2)
var carbon = new Atom(6)
var oxygen = new Atom(8)
var magnesium = new Atom(12)
var silicon = new Atom(14)
var phosphorous = new Atom(15)
var sulfur = new Atom(16)
var chlorine = new Atom(17)

var elements = [hydrogen, helium, carbon, oxygen, magnesium, silicon, phosphorous, sulfur, chlorine]
elements.forEach(function(e){
  console.log(e.name() + " (" + e.data["symbol"] +")")
  console.log("  Weight: "+ e.data["weight"])
  console.log("  Valence Electrons: "+ e.valenceElectrons() +"\n")
})

var magChloride = new Compound([magnesium, chlorine, chlorine])
var carbonDioxide = new Compound([carbon,oxygen,oxygen])
var phosphorousSulfide = new Compound([phosphorous, sulfur])

var c = carbon;
var p = phosphorous;

var magic = new Compound([c,c,c,c,p,p,p,p,p])

var compounds = [magChloride, carbonDioxide, phosphorousSulfide, magic]
compounds.forEach(function(compound){
  console.log(compound.name() + " (" + compound.formula() +")")
  console.log("  Weight: "+ compound.weight())
});

// Output

// Hydrogen (H)
//   Weight: 1.01
//   Valence Electrons: 1

// Helium (He)
//   Weight: 4.002602
//   Valence Electrons: 2

// Carbon (C)
//   Weight: 12.011
//   Valence Electrons: 4

// Oxygen (O)
//   Weight: 15.9
//   Valence Electrons: 6

// Magnesium (Mg)
//   Weight: 24.305
//   Valence Electrons: 2

// Silicon (Si)
//   Weight: 28.085
//   Valence Electrons: 4

// Phosphorous (P)
//   Weight: 30.973
//   Valence Electrons: 5

// Sulfur (S)
//   Weight: 32.06
//   Valence Electrons: 6

// Chlorine (Cl)
//   Weight: 35.45
//   Valence Electrons: 7

// MagnesiumDiChloroide (MgClCl)
//   Weight: 95.20500000000001
// CarbonDiOxyide (COO)
//   Weight: 43.811
// PhosphorousMonoSulfide (PS)
//   Weight: 63.033
// TetraCarbonPentaPhosphide (CCCCPPPPP)
//   Weight: 202.909
