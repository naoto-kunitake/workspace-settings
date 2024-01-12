(function() {
  var CharacterMarker, CompositeDisposable;

  CompositeDisposable = require('atom').CompositeDisposable;

  CharacterMarker = require('./character-marker');

  module.exports = {
    characterMarker: null,
    name: 'show-ideographic-space',
    activate: function(state) {
      var charMap;
      charMap = {
        '　': {
          type: 'highlight',
          "class": 'ideographic-space'
        }
      };
      this.characterMarker = new CharacterMarker(charMap);
      this.subscriptions = new CompositeDisposable;
      return this.subscriptions.add(atom.workspace.observeTextEditors((function(_this) {
        return function(editor) {
          if (_this.characterMarker.checkText(editor.getText())) {
            _this.characterMarker.handleMark(editor, _this.name);
          }
          return _this.subscriptions.add(editor.onDidInsertText(function(event) {
            if (_this.characterMarker.checkText(event.text)) {
              return _this.characterMarker.handleMark(editor, _this.name);
            }
          }));
        };
      })(this)));
    },
    deactivate: function() {
      var editor, i, len, ref;
      ref = atom.workspace.getTextEditors;
      for (i = 0, len = ref.length; i < len; i++) {
        editor = ref[i];
        this.characterMarker(editor, this.name);
      }
      this.characterMarker.destroy();
      return this.subscriptions.dispose();
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL3VzaGltYXJ1Ly5hdG9tL3BhY2thZ2VzL3Nob3ctaWRlb2dyYXBoaWMtc3BhY2UvbGliL3Nob3ctaWRlb2dyYXBoaWMtc3BhY2UuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQyxzQkFBdUIsT0FBQSxDQUFRLE1BQVI7O0VBRXhCLGVBQUEsR0FBa0IsT0FBQSxDQUFRLG9CQUFSOztFQUVsQixNQUFNLENBQUMsT0FBUCxHQUNFO0lBQUEsZUFBQSxFQUFpQixJQUFqQjtJQUNBLElBQUEsRUFBTSx3QkFETjtJQUdBLFFBQUEsRUFBVSxTQUFDLEtBQUQ7QUFDUixVQUFBO01BQUEsT0FBQSxHQUFVO1FBQ1IsR0FBQSxFQUNFO1VBQUEsSUFBQSxFQUFNLFdBQU47VUFDQSxDQUFBLEtBQUEsQ0FBQSxFQUFPLG1CQURQO1NBRk07O01BS1YsSUFBQyxDQUFBLGVBQUQsR0FBbUIsSUFBSSxlQUFKLENBQW9CLE9BQXBCO01BQ25CLElBQUMsQ0FBQSxhQUFELEdBQWlCLElBQUk7YUFFckIsSUFBQyxDQUFBLGFBQWEsQ0FBQyxHQUFmLENBQW1CLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWYsQ0FBa0MsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFDLE1BQUQ7VUFDbkQsSUFBRyxLQUFDLENBQUEsZUFBZSxDQUFDLFNBQWpCLENBQTJCLE1BQU0sQ0FBQyxPQUFQLENBQUEsQ0FBM0IsQ0FBSDtZQUNFLEtBQUMsQ0FBQSxlQUFlLENBQUMsVUFBakIsQ0FBNEIsTUFBNUIsRUFBb0MsS0FBQyxDQUFBLElBQXJDLEVBREY7O2lCQUVBLEtBQUMsQ0FBQSxhQUFhLENBQUMsR0FBZixDQUFtQixNQUFNLENBQUMsZUFBUCxDQUF1QixTQUFDLEtBQUQ7WUFDeEMsSUFBRyxLQUFDLENBQUEsZUFBZSxDQUFDLFNBQWpCLENBQTJCLEtBQUssQ0FBQyxJQUFqQyxDQUFIO3FCQUNFLEtBQUMsQ0FBQSxlQUFlLENBQUMsVUFBakIsQ0FBNEIsTUFBNUIsRUFBb0MsS0FBQyxDQUFBLElBQXJDLEVBREY7O1VBRHdDLENBQXZCLENBQW5CO1FBSG1EO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFsQyxDQUFuQjtJQVRRLENBSFY7SUFtQkEsVUFBQSxFQUFZLFNBQUE7QUFDVixVQUFBO0FBQUE7QUFBQSxXQUFBLHFDQUFBOztRQUNFLElBQUMsQ0FBQSxlQUFELENBQWlCLE1BQWpCLEVBQXlCLElBQUMsQ0FBQSxJQUExQjtBQURGO01BRUEsSUFBQyxDQUFBLGVBQWUsQ0FBQyxPQUFqQixDQUFBO2FBQ0EsSUFBQyxDQUFBLGFBQWEsQ0FBQyxPQUFmLENBQUE7SUFKVSxDQW5CWjs7QUFMRiIsInNvdXJjZXNDb250ZW50IjpbIntDb21wb3NpdGVEaXNwb3NhYmxlfSA9IHJlcXVpcmUgJ2F0b20nXG5cbkNoYXJhY3Rlck1hcmtlciA9IHJlcXVpcmUgJy4vY2hhcmFjdGVyLW1hcmtlcidcblxubW9kdWxlLmV4cG9ydHMgPVxuICBjaGFyYWN0ZXJNYXJrZXI6IG51bGxcbiAgbmFtZTogJ3Nob3ctaWRlb2dyYXBoaWMtc3BhY2UnXG5cbiAgYWN0aXZhdGU6IChzdGF0ZSkgLT5cbiAgICBjaGFyTWFwID0ge1xuICAgICAgJ+OAgCc6XG4gICAgICAgIHR5cGU6ICdoaWdobGlnaHQnXG4gICAgICAgIGNsYXNzOiAnaWRlb2dyYXBoaWMtc3BhY2UnXG4gICAgfVxuICAgIEBjaGFyYWN0ZXJNYXJrZXIgPSBuZXcgQ2hhcmFjdGVyTWFya2VyIGNoYXJNYXBcbiAgICBAc3Vic2NyaXB0aW9ucyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlXG5cbiAgICBAc3Vic2NyaXB0aW9ucy5hZGQgYXRvbS53b3Jrc3BhY2Uub2JzZXJ2ZVRleHRFZGl0b3JzIChlZGl0b3IpID0+XG4gICAgICBpZiBAY2hhcmFjdGVyTWFya2VyLmNoZWNrVGV4dChlZGl0b3IuZ2V0VGV4dCgpKVxuICAgICAgICBAY2hhcmFjdGVyTWFya2VyLmhhbmRsZU1hcmsoZWRpdG9yLCBAbmFtZSlcbiAgICAgIEBzdWJzY3JpcHRpb25zLmFkZCBlZGl0b3Iub25EaWRJbnNlcnRUZXh0IChldmVudCkgPT5cbiAgICAgICAgaWYgQGNoYXJhY3Rlck1hcmtlci5jaGVja1RleHQoZXZlbnQudGV4dClcbiAgICAgICAgICBAY2hhcmFjdGVyTWFya2VyLmhhbmRsZU1hcmsoZWRpdG9yLCBAbmFtZSlcblxuICBkZWFjdGl2YXRlOiAtPlxuICAgIGZvciBlZGl0b3IgaW4gYXRvbS53b3Jrc3BhY2UuZ2V0VGV4dEVkaXRvcnNcbiAgICAgIEBjaGFyYWN0ZXJNYXJrZXIgZWRpdG9yLCBAbmFtZVxuICAgIEBjaGFyYWN0ZXJNYXJrZXIuZGVzdHJveSgpXG4gICAgQHN1YnNjcmlwdGlvbnMuZGlzcG9zZSgpXG4iXX0=
