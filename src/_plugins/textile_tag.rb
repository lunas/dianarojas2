module Jekyll
  class TextileTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text.strip
    end

    require "RedCloth"

    def render(context)
      "#{RedCloth.new(File.read(File.join(Dir.pwd, '_includes', @text))).to_html}"
    end
  end
end
Liquid::Template.register_tag('textile', Jekyll::TextileTag)