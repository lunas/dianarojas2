module Jekyll
  module FotoCaptionFilter
    def foto_caption(caption, photographer)
      fc = caption
      if fc
        fc += " &copy;#{photographer}" if photographer
        fc
      else
        photographer.nil? ? '' : "&copy;#{photographer}"
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::FotoCaptionFilter)