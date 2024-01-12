(function() {
  var CharacterMarker, Point, Range, ref;

  ref = require('atom'), Range = ref.Range, Point = ref.Point;

  module.exports = CharacterMarker = (function() {
    function CharacterMarker(charMap) {
      this.charMap = charMap;
      this.markerList = [];
    }

    CharacterMarker.prototype.destroy = function() {};

    CharacterMarker.prototype.setCharDecoration = function(char, decoration) {
      return this.charMap[char] = decoration;
    };

    CharacterMarker.prototype.getCharDecoration = function(char) {
      if (char in this.charMap) {
        return this.charMap[char];
      } else {
        return void 0;
      }
    };

    CharacterMarker.prototype.deleteCharDecoration = function(char) {
      if (char in this.charMap) {
        return delete this.charMap[char];
      }
    };

    CharacterMarker.prototype.checkText = function(text) {
      var char;
      for (char in this.charMap) {
        if (text.includes(char)) {
          return true;
        }
      }
      return false;
    };

    CharacterMarker.prototype.handleMark = function(editor, rel) {
      var char, decoration, ref1;
      this.removeMark(editor, rel);
      ref1 = this.charMap;
      for (char in ref1) {
        decoration = ref1[char];
        this.mark(editor, rel, char, decoration);
      }
    };

    CharacterMarker.prototype.mark = function(editor, rel, char, decoration) {
      return editor.scan(this.creatRegExpEscaped(char), function(result) {
        var marker;
        marker = editor.markBufferRange(result.range, {
          invalidate: 'inside'
        });
        marker.setProperties({
          rel: rel
        });
        return editor.decorateMarker(marker, decoration);
      });
    };

    CharacterMarker.prototype.removeMark = function(editor, rel) {
      var i, len, marker, ref1, results;
      ref1 = editor.findMarkers({
        rel: rel
      });
      results = [];
      for (i = 0, len = ref1.length; i < len; i++) {
        marker = ref1[i];
        results.push(marker.destroy());
      }
      return results;
    };

    CharacterMarker.prototype.creatRegExpEscaped = function(s) {
      return new RegExp(s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
    };

    return CharacterMarker;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL3VzaGltYXJ1Ly5hdG9tL3BhY2thZ2VzL3Nob3ctaWRlb2dyYXBoaWMtc3BhY2UvbGliL2NoYXJhY3Rlci1tYXJrZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxNQUFpQixPQUFBLENBQVEsTUFBUixDQUFqQixFQUFDLGlCQUFELEVBQVE7O0VBRVIsTUFBTSxDQUFDLE9BQVAsR0FDTTtJQUNTLHlCQUFDLE9BQUQ7TUFBQyxJQUFDLENBQUEsVUFBRDtNQUNaLElBQUMsQ0FBQSxVQUFELEdBQWM7SUFESDs7OEJBR2IsT0FBQSxHQUFTLFNBQUEsR0FBQTs7OEJBRVQsaUJBQUEsR0FBbUIsU0FBQyxJQUFELEVBQU8sVUFBUDthQUNqQixJQUFDLENBQUEsT0FBUSxDQUFBLElBQUEsQ0FBVCxHQUFpQjtJQURBOzs4QkFHbkIsaUJBQUEsR0FBbUIsU0FBQyxJQUFEO01BQ2pCLElBQUcsSUFBQSxJQUFRLElBQUMsQ0FBQSxPQUFaO0FBQ0UsZUFBTyxJQUFDLENBQUEsT0FBUSxDQUFBLElBQUEsRUFEbEI7T0FBQSxNQUFBO0FBR0UsZUFBTyxPQUhUOztJQURpQjs7OEJBTW5CLG9CQUFBLEdBQXNCLFNBQUMsSUFBRDtNQUNwQixJQUFHLElBQUEsSUFBUSxJQUFDLENBQUEsT0FBWjtlQUNFLE9BQU8sSUFBQyxDQUFBLE9BQVEsQ0FBQSxJQUFBLEVBRGxCOztJQURvQjs7OEJBSXRCLFNBQUEsR0FBVyxTQUFDLElBQUQ7QUFDVCxVQUFBO0FBQUEsV0FBQSxvQkFBQTtRQUNFLElBQUcsSUFBSSxDQUFDLFFBQUwsQ0FBYyxJQUFkLENBQUg7QUFDRSxpQkFBTyxLQURUOztBQURGO0FBR0EsYUFBTztJQUpFOzs4QkFNWCxVQUFBLEdBQVksU0FBQyxNQUFELEVBQVMsR0FBVDtBQUNWLFVBQUE7TUFBQSxJQUFDLENBQUEsVUFBRCxDQUFZLE1BQVosRUFBb0IsR0FBcEI7QUFDQTtBQUFBLFdBQUEsWUFBQTs7UUFDRSxJQUFDLENBQUEsSUFBRCxDQUFNLE1BQU4sRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCLFVBQXpCO0FBREY7SUFGVTs7OEJBTVosSUFBQSxHQUFNLFNBQUMsTUFBRCxFQUFTLEdBQVQsRUFBYyxJQUFkLEVBQW9CLFVBQXBCO2FBQ0osTUFBTSxDQUFDLElBQVAsQ0FBWSxJQUFDLENBQUEsa0JBQUQsQ0FBb0IsSUFBcEIsQ0FBWixFQUF1QyxTQUFDLE1BQUQ7QUFDckMsWUFBQTtRQUFBLE1BQUEsR0FBUyxNQUFNLENBQUMsZUFBUCxDQUF1QixNQUFNLENBQUMsS0FBOUIsRUFBcUM7VUFBQSxVQUFBLEVBQVksUUFBWjtTQUFyQztRQUNULE1BQU0sQ0FBQyxhQUFQLENBQXFCO1VBQUEsR0FBQSxFQUFLLEdBQUw7U0FBckI7ZUFDQSxNQUFNLENBQUMsY0FBUCxDQUFzQixNQUF0QixFQUE4QixVQUE5QjtNQUhxQyxDQUF2QztJQURJOzs4QkFNTixVQUFBLEdBQVksU0FBQyxNQUFELEVBQVMsR0FBVDtBQUNWLFVBQUE7QUFBQTs7O0FBQUE7V0FBQSxzQ0FBQTs7cUJBQ0UsTUFBTSxDQUFDLE9BQVAsQ0FBQTtBQURGOztJQURVOzs4QkFJWixrQkFBQSxHQUFvQixTQUFDLENBQUQ7YUFDbEIsSUFBSSxNQUFKLENBQVcsQ0FBQyxDQUFDLE9BQUYsQ0FBVSx3QkFBVixFQUFvQyxNQUFwQyxDQUFYLEVBQXdELEdBQXhEO0lBRGtCOzs7OztBQTVDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJ7UmFuZ2UsIFBvaW50fSA9IHJlcXVpcmUgJ2F0b20nXG5cbm1vZHVsZS5leHBvcnRzID1cbmNsYXNzIENoYXJhY3Rlck1hcmtlclxuICBjb25zdHJ1Y3RvcjogKEBjaGFyTWFwKSAtPlxuICAgIEBtYXJrZXJMaXN0ID0gW11cblxuICBkZXN0cm95OiAtPlxuXG4gIHNldENoYXJEZWNvcmF0aW9uOiAoY2hhciwgZGVjb3JhdGlvbikgLT5cbiAgICBAY2hhck1hcFtjaGFyXSA9IGRlY29yYXRpb25cblxuICBnZXRDaGFyRGVjb3JhdGlvbjogKGNoYXIpIC0+XG4gICAgaWYgY2hhciBvZiBAY2hhck1hcFxuICAgICAgcmV0dXJuIEBjaGFyTWFwW2NoYXJdXG4gICAgZWxzZVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gIGRlbGV0ZUNoYXJEZWNvcmF0aW9uOiAoY2hhcikgLT5cbiAgICBpZiBjaGFyIG9mIEBjaGFyTWFwXG4gICAgICBkZWxldGUgQGNoYXJNYXBbY2hhcl1cblxuICBjaGVja1RleHQ6ICh0ZXh0KSAtPlxuICAgIGZvciBjaGFyIG9mIEBjaGFyTWFwXG4gICAgICBpZiB0ZXh0LmluY2x1ZGVzIGNoYXJcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICByZXR1cm4gZmFsc2VcblxuICBoYW5kbGVNYXJrOiAoZWRpdG9yLCByZWwpIC0+XG4gICAgQHJlbW92ZU1hcmsgZWRpdG9yLCByZWxcbiAgICBmb3IgY2hhciwgZGVjb3JhdGlvbiBvZiBAY2hhck1hcFxuICAgICAgQG1hcmsgZWRpdG9yLCByZWwsIGNoYXIsIGRlY29yYXRpb25cbiAgICByZXR1cm5cblxuICBtYXJrOiAoZWRpdG9yLCByZWwsIGNoYXIsIGRlY29yYXRpb24pIC0+XG4gICAgZWRpdG9yLnNjYW4gQGNyZWF0UmVnRXhwRXNjYXBlZChjaGFyKSwgKHJlc3VsdCkgLT5cbiAgICAgIG1hcmtlciA9IGVkaXRvci5tYXJrQnVmZmVyUmFuZ2UgcmVzdWx0LnJhbmdlLCBpbnZhbGlkYXRlOiAnaW5zaWRlJ1xuICAgICAgbWFya2VyLnNldFByb3BlcnRpZXMocmVsOiByZWwpXG4gICAgICBlZGl0b3IuZGVjb3JhdGVNYXJrZXIgbWFya2VyLCBkZWNvcmF0aW9uXG5cbiAgcmVtb3ZlTWFyazogKGVkaXRvciwgcmVsKSAtPlxuICAgIGZvciBtYXJrZXIgaW4gZWRpdG9yLmZpbmRNYXJrZXJzKHJlbDogcmVsKVxuICAgICAgbWFya2VyLmRlc3Ryb3koKVxuXG4gIGNyZWF0UmVnRXhwRXNjYXBlZDogKHMpIC0+XG4gICAgbmV3IFJlZ0V4cCBzLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpLCAnZydcbiJdfQ==
