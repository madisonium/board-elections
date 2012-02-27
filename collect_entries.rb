class CollectEntries
  def self.collect dir = '.'
    entries = []

    Dir["#{dir}/*.txt"].each do |filename|
      open(filename, 'r') do |f|
        f.each_line do |line|
          entries << [filename, line.strip]
        end
      end
    end

    entries
  end

  def self.grouped_by_last_name dir = '.'
    collect(dir).group_by{|e| e[1].split.last}.sort
  end

end
