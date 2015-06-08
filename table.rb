require 'http'
require 'json'

class Table
  attr_accessor :data, :elems

  # Element layout: {:elem_name => {:property => value}}
  def initialize
    @elems = {}
    @data = JSON.parse(HTTP.get('https://raw.githubusercontent.com/diniska/chemistry/master/PeriodicalTable/periodicTable.json'))
    generate
  end

  def generate
    @data['table'].each do |group|
      group['elements'].each do |element|
        @elems[:"#{element['small']}"] = {:name => element['name'], :number => element['number'], :molar => element['molar'], :electrons => element['electrons']}
      end
    end
  end
end
