(function() {
  var CompositeDisposable, HighlightColumnView, Point, Range, ref,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ref = require('atom'), CompositeDisposable = ref.CompositeDisposable, Point = ref.Point, Range = ref.Range;

  HighlightColumnView = (function(superClass) {
    extend(HighlightColumnView, superClass);

    function HighlightColumnView() {
      return HighlightColumnView.__super__.constructor.apply(this, arguments);
    }

    HighlightColumnView.prototype.initialize = function(editor, editorElement, cursor) {
      this.editor = editor;
      this.editorElement = editorElement;
      this.cursor = cursor;
      this.classList.add('highlight-column');
      this.attachToLines();
      this.handleEvents();
      this.updateHighlight();
      return this;
    };

    HighlightColumnView.prototype.attachToLines = function() {
      var lines;
      lines = this.editorElement.querySelector('.lines');
      return lines != null ? lines.appendChild(this) : void 0;
    };

    HighlightColumnView.prototype.handleEvents = function() {
      var configSubscriptions, cursorChanged, dispose, subscriptions, updateHighlightCallback;
      updateHighlightCallback = (function(_this) {
        return function() {
          return _this.updateHighlight();
        };
      })(this);
      subscriptions = new CompositeDisposable;
      configSubscriptions = this.handleConfigEvents();
      subscriptions.add(atom.config.onDidChange('editor.fontSize', function() {
        return setTimeout(updateHighlightCallback, 0);
      }));
      if (this.editorElement.hasTiledRendering) {
        subscriptions.add(this.editorElement.onDidChangeScrollLeft(updateHighlightCallback));
      }
      cursorChanged = (function(_this) {
        return function() {
          return _this.updateHighlight();
        };
      })(this);
      subscriptions.add(this.cursor.onDidChangePosition(cursorChanged));
      subscriptions.add(this.editorElement.onDidAttach((function(_this) {
        return function() {
          _this.attachToLines();
          return updateHighlightCallback();
        };
      })(this)));
      dispose = (function(_this) {
        return function() {
          subscriptions.dispose();
          configSubscriptions.dispose();
          return _this.remove();
        };
      })(this);
      subscriptions.add(this.editor.onDidDestroy(function() {
        return dispose();
      }));
      return subscriptions.add(this.cursor.onDidDestroy(function() {
        return dispose();
      }));
    };

    HighlightColumnView.prototype.handleConfigEvents = function() {
      var subscriptions, updateHighlightCallback;
      updateHighlightCallback = (function(_this) {
        return function() {
          return _this.updateHighlight();
        };
      })(this);
      subscriptions = new CompositeDisposable;
      subscriptions.add(atom.config.observe('highlight-column.opacity', updateHighlightCallback));
      subscriptions.add(atom.config.observe('highlight-column.enabled', updateHighlightCallback));
      subscriptions.add(atom.config.observe('highlight-column.lineMode', updateHighlightCallback));
      return subscriptions;
    };

    HighlightColumnView.prototype.updateHighlight = function() {
      var rect, width;
      if (this.isEnabled()) {
        rect = this.highlightRect();
        if (!rect) {
          return;
        }
        width = rect.width;
        if (this.isLineMode()) {
          width = 1;
        }
        this.style.left = rect.left + "px";
        this.style.width = width + "px";
        this.style.opacity = this.opacity();
        return this.style.display = 'block';
      } else {
        return this.style.display = 'none';
      }
    };

    HighlightColumnView.prototype.isEnabled = function() {
      var ref1;
      return (ref1 = atom.config.get('highlight-column.enabled')) != null ? ref1 : true;
    };

    HighlightColumnView.prototype.isLineMode = function() {
      return atom.config.get('highlight-column.lineMode');
    };

    HighlightColumnView.prototype.opacity = function() {
      var ref1;
      if (this.isLineMode()) {
        return 0.3;
      } else {
        return (ref1 = atom.config.get('highlight-column.opacity')) != null ? ref1 : 0.15;
      }
    };

    HighlightColumnView.prototype.highlightRect = function() {
      var rect;
      rect = this._cursorPixelRect();
      if (!rect) {
        return;
      }
      if (!rect.width || rect.width === 0) {
        rect.width = this.editor.getDefaultCharWidth();
      }
      if (this.editorElement.hasTiledRendering) {
        rect.left -= this.editorElement.getScrollLeft();
      }
      return rect;
    };

    HighlightColumnView.prototype._cursorPixelRect = function() {
      var column, error, range, rect, ref1, row, screenRange;
      ref1 = this.cursor.getScreenPosition(), row = ref1.row, column = ref1.column;
      screenRange = new Range(new Point(row, column), new Point(row, column + 1));
      if (this.editorElement.component === null) {
        return;
      }
      try {
        rect = this.editorElement.pixelRectForScreenRange(screenRange);
        range = this.editorElement.pixelRangeForScreenRange(screenRange);
      } catch (error1) {
        error = error1;
        console.error(error);
      }
      if (!rect || !range) {
        return;
      }
      rect.left = range.start.left;
      rect.right = range.end.left;
      return rect;
    };

    return HighlightColumnView;

  })(HTMLDivElement);

  module.exports = document.registerElement('highlight-column', {
    "extends": 'div',
    prototype: HighlightColumnView.prototype
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL3VzaGltYXJ1Ly5hdG9tL3BhY2thZ2VzL2hpZ2hsaWdodC1jb2x1bW4vbGliL2hpZ2hsaWdodC1jb2x1bW4tZWxlbWVudC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLDJEQUFBO0lBQUE7OztFQUFBLE1BQXNDLE9BQUEsQ0FBUSxNQUFSLENBQXRDLEVBQUMsNkNBQUQsRUFBc0IsaUJBQXRCLEVBQTZCOztFQUV2Qjs7Ozs7OztrQ0FDSixVQUFBLEdBQVksU0FBQyxNQUFELEVBQVUsYUFBVixFQUEwQixNQUExQjtNQUFDLElBQUMsQ0FBQSxTQUFEO01BQVMsSUFBQyxDQUFBLGdCQUFEO01BQWdCLElBQUMsQ0FBQSxTQUFEO01BQ3BDLElBQUMsQ0FBQSxTQUFTLENBQUMsR0FBWCxDQUFlLGtCQUFmO01BQ0EsSUFBQyxDQUFBLGFBQUQsQ0FBQTtNQUNBLElBQUMsQ0FBQSxZQUFELENBQUE7TUFDQSxJQUFDLENBQUEsZUFBRCxDQUFBO2FBQ0E7SUFMVTs7a0NBT1osYUFBQSxHQUFlLFNBQUE7QUFDYixVQUFBO01BQUEsS0FBQSxHQUFRLElBQUMsQ0FBQSxhQUFhLENBQUMsYUFBZixDQUE2QixRQUE3Qjs2QkFDUixLQUFLLENBQUUsV0FBUCxDQUFtQixJQUFuQjtJQUZhOztrQ0FJZixZQUFBLEdBQWMsU0FBQTtBQUNaLFVBQUE7TUFBQSx1QkFBQSxHQUEwQixDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7aUJBQUcsS0FBQyxDQUFBLGVBQUQsQ0FBQTtRQUFIO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQTtNQUUxQixhQUFBLEdBQWdCLElBQUk7TUFDcEIsbUJBQUEsR0FBc0IsSUFBQyxDQUFBLGtCQUFELENBQUE7TUFDdEIsYUFBYSxDQUFDLEdBQWQsQ0FBa0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFaLENBQXdCLGlCQUF4QixFQUEyQyxTQUFBO2VBRTNELFVBQUEsQ0FBVyx1QkFBWCxFQUFvQyxDQUFwQztNQUYyRCxDQUEzQyxDQUFsQjtNQUtBLElBQUcsSUFBQyxDQUFBLGFBQWEsQ0FBQyxpQkFBbEI7UUFDRSxhQUFhLENBQUMsR0FBZCxDQUFrQixJQUFDLENBQUEsYUFBYSxDQUFDLHFCQUFmLENBQXFDLHVCQUFyQyxDQUFsQixFQURGOztNQUdBLGFBQUEsR0FBZ0IsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFBO2lCQUNkLEtBQUMsQ0FBQSxlQUFELENBQUE7UUFEYztNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUE7TUFFaEIsYUFBYSxDQUFDLEdBQWQsQ0FBa0IsSUFBQyxDQUFBLE1BQU0sQ0FBQyxtQkFBUixDQUE0QixhQUE1QixDQUFsQjtNQUVBLGFBQWEsQ0FBQyxHQUFkLENBQWtCLElBQUMsQ0FBQSxhQUFhLENBQUMsV0FBZixDQUEyQixDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7VUFDM0MsS0FBQyxDQUFBLGFBQUQsQ0FBQTtpQkFDQSx1QkFBQSxDQUFBO1FBRjJDO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUEzQixDQUFsQjtNQUlBLE9BQUEsR0FBVSxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7VUFDUixhQUFhLENBQUMsT0FBZCxDQUFBO1VBQ0EsbUJBQW1CLENBQUMsT0FBcEIsQ0FBQTtpQkFDQSxLQUFDLENBQUEsTUFBRCxDQUFBO1FBSFE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBO01BS1YsYUFBYSxDQUFDLEdBQWQsQ0FBa0IsSUFBQyxDQUFBLE1BQU0sQ0FBQyxZQUFSLENBQXFCLFNBQUE7ZUFBRyxPQUFBLENBQUE7TUFBSCxDQUFyQixDQUFsQjthQUNBLGFBQWEsQ0FBQyxHQUFkLENBQWtCLElBQUMsQ0FBQSxNQUFNLENBQUMsWUFBUixDQUFxQixTQUFBO2VBQUcsT0FBQSxDQUFBO01BQUgsQ0FBckIsQ0FBbEI7SUEzQlk7O2tDQTZCZCxrQkFBQSxHQUFvQixTQUFBO0FBQ2xCLFVBQUE7TUFBQSx1QkFBQSxHQUEwQixDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7aUJBQUcsS0FBQyxDQUFBLGVBQUQsQ0FBQTtRQUFIO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQTtNQUMxQixhQUFBLEdBQWdCLElBQUk7TUFDcEIsYUFBYSxDQUFDLEdBQWQsQ0FBa0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFaLENBQW9CLDBCQUFwQixFQUFnRCx1QkFBaEQsQ0FBbEI7TUFDQSxhQUFhLENBQUMsR0FBZCxDQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQVosQ0FBb0IsMEJBQXBCLEVBQWdELHVCQUFoRCxDQUFsQjtNQUNBLGFBQWEsQ0FBQyxHQUFkLENBQWtCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBWixDQUFvQiwyQkFBcEIsRUFBaUQsdUJBQWpELENBQWxCO2FBQ0E7SUFOa0I7O2tDQVFwQixlQUFBLEdBQWlCLFNBQUE7QUFDZixVQUFBO01BQUEsSUFBRyxJQUFDLENBQUEsU0FBRCxDQUFBLENBQUg7UUFDRSxJQUFBLEdBQU8sSUFBQyxDQUFBLGFBQUQsQ0FBQTtRQUNQLElBQVUsQ0FBQyxJQUFYO0FBQUEsaUJBQUE7O1FBRUEsS0FBQSxHQUFRLElBQUksQ0FBQztRQUNiLElBQWEsSUFBQyxDQUFBLFVBQUQsQ0FBQSxDQUFiO1VBQUEsS0FBQSxHQUFRLEVBQVI7O1FBQ0EsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLEdBQWlCLElBQUksQ0FBQyxJQUFOLEdBQVc7UUFDM0IsSUFBQyxDQUFBLEtBQUssQ0FBQyxLQUFQLEdBQWtCLEtBQUQsR0FBTztRQUN4QixJQUFDLENBQUEsS0FBSyxDQUFDLE9BQVAsR0FBaUIsSUFBQyxDQUFBLE9BQUQsQ0FBQTtlQUNqQixJQUFDLENBQUEsS0FBSyxDQUFDLE9BQVAsR0FBaUIsUUFUbkI7T0FBQSxNQUFBO2VBV0UsSUFBQyxDQUFBLEtBQUssQ0FBQyxPQUFQLEdBQWlCLE9BWG5COztJQURlOztrQ0FjakIsU0FBQSxHQUFXLFNBQUE7QUFBRyxVQUFBO21GQUE4QztJQUFqRDs7a0NBRVgsVUFBQSxHQUFZLFNBQUE7YUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsMkJBQWhCO0lBQUg7O2tDQUVaLE9BQUEsR0FBUyxTQUFBO0FBQ1AsVUFBQTtNQUFBLElBQUcsSUFBQyxDQUFBLFVBQUQsQ0FBQSxDQUFIO2VBQ0UsSUFERjtPQUFBLE1BQUE7cUZBR2dELEtBSGhEOztJQURPOztrQ0FNVCxhQUFBLEdBQWUsU0FBQTtBQUNiLFVBQUE7TUFBQSxJQUFBLEdBQU8sSUFBQyxDQUFBLGdCQUFELENBQUE7TUFDUCxJQUFVLENBQUMsSUFBWDtBQUFBLGVBQUE7O01BRUEsSUFBOEMsQ0FBQyxJQUFJLENBQUMsS0FBTixJQUFlLElBQUksQ0FBQyxLQUFMLEtBQWMsQ0FBM0U7UUFBQSxJQUFJLENBQUMsS0FBTCxHQUFhLElBQUMsQ0FBQSxNQUFNLENBQUMsbUJBQVIsQ0FBQSxFQUFiOztNQUVBLElBQStDLElBQUMsQ0FBQSxhQUFhLENBQUMsaUJBQTlEO1FBQUEsSUFBSSxDQUFDLElBQUwsSUFBYSxJQUFDLENBQUEsYUFBYSxDQUFDLGFBQWYsQ0FBQSxFQUFiOzthQUNBO0lBUGE7O2tDQVNmLGdCQUFBLEdBQWtCLFNBQUE7QUFDaEIsVUFBQTtNQUFBLE9BQWdCLElBQUMsQ0FBQSxNQUFNLENBQUMsaUJBQVIsQ0FBQSxDQUFoQixFQUFDLGNBQUQsRUFBTTtNQUNOLFdBQUEsR0FBYyxJQUFJLEtBQUosQ0FBVSxJQUFJLEtBQUosQ0FBVSxHQUFWLEVBQWUsTUFBZixDQUFWLEVBQWtDLElBQUksS0FBSixDQUFVLEdBQVYsRUFBZSxNQUFBLEdBQVMsQ0FBeEIsQ0FBbEM7TUFDZCxJQUFVLElBQUMsQ0FBQSxhQUFhLENBQUMsU0FBZixLQUE0QixJQUF0QztBQUFBLGVBQUE7O0FBRUE7UUFDRSxJQUFBLEdBQU8sSUFBQyxDQUFBLGFBQWEsQ0FBQyx1QkFBZixDQUF1QyxXQUF2QztRQUNQLEtBQUEsR0FBUSxJQUFDLENBQUEsYUFBYSxDQUFDLHdCQUFmLENBQXdDLFdBQXhDLEVBRlY7T0FBQSxjQUFBO1FBR007UUFDSixPQUFPLENBQUMsS0FBUixDQUFjLEtBQWQsRUFKRjs7TUFNQSxJQUFVLENBQUMsSUFBRCxJQUFTLENBQUMsS0FBcEI7QUFBQSxlQUFBOztNQUNBLElBQUksQ0FBQyxJQUFMLEdBQVksS0FBSyxDQUFDLEtBQUssQ0FBQztNQUN4QixJQUFJLENBQUMsS0FBTCxHQUFhLEtBQUssQ0FBQyxHQUFHLENBQUM7YUFDdkI7SUFkZ0I7Ozs7S0FsRmM7O0VBa0dsQyxNQUFNLENBQUMsT0FBUCxHQUFpQixRQUFRLENBQUMsZUFBVCxDQUF5QixrQkFBekIsRUFDZjtJQUFBLENBQUEsT0FBQSxDQUFBLEVBQVMsS0FBVDtJQUNBLFNBQUEsRUFBVyxtQkFBbUIsQ0FBQyxTQUQvQjtHQURlO0FBcEdqQiIsInNvdXJjZXNDb250ZW50IjpbIntDb21wb3NpdGVEaXNwb3NhYmxlLCBQb2ludCwgUmFuZ2V9ID0gcmVxdWlyZSAnYXRvbSdcblxuY2xhc3MgSGlnaGxpZ2h0Q29sdW1uVmlldyBleHRlbmRzIEhUTUxEaXZFbGVtZW50XG4gIGluaXRpYWxpemU6IChAZWRpdG9yLCBAZWRpdG9yRWxlbWVudCwgQGN1cnNvciktPlxuICAgIEBjbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQtY29sdW1uJylcbiAgICBAYXR0YWNoVG9MaW5lcygpXG4gICAgQGhhbmRsZUV2ZW50cygpXG4gICAgQHVwZGF0ZUhpZ2hsaWdodCgpXG4gICAgdGhpc1xuXG4gIGF0dGFjaFRvTGluZXM6IC0+XG4gICAgbGluZXMgPSBAZWRpdG9yRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGluZXMnKVxuICAgIGxpbmVzPy5hcHBlbmRDaGlsZChAKVxuXG4gIGhhbmRsZUV2ZW50czogLT5cbiAgICB1cGRhdGVIaWdobGlnaHRDYWxsYmFjayA9ID0+IEB1cGRhdGVIaWdobGlnaHQoKVxuXG4gICAgc3Vic2NyaXB0aW9ucyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlXG4gICAgY29uZmlnU3Vic2NyaXB0aW9ucyA9IEBoYW5kbGVDb25maWdFdmVudHMoKVxuICAgIHN1YnNjcmlwdGlvbnMuYWRkIGF0b20uY29uZmlnLm9uRGlkQ2hhbmdlICdlZGl0b3IuZm9udFNpemUnLCAtPlxuICAgICAgIyBzZXRUaW1lb3V0IGJlY2F1c2Ugd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgZWRpdG9yIG1lYXN1cmVtZW50IHRvIGhhcHBlblxuICAgICAgc2V0VGltZW91dCh1cGRhdGVIaWdobGlnaHRDYWxsYmFjaywgMClcblxuICAgICMgRklYTUU6IHJlbW92ZSBjb25kaXRpb25hbCBhcyBzb29uIGFzIHRoZSB0aWxlZCBlZGl0b3IgaXMgcmVsZWFzZWQuXG4gICAgaWYgQGVkaXRvckVsZW1lbnQuaGFzVGlsZWRSZW5kZXJpbmdcbiAgICAgIHN1YnNjcmlwdGlvbnMuYWRkIEBlZGl0b3JFbGVtZW50Lm9uRGlkQ2hhbmdlU2Nyb2xsTGVmdCh1cGRhdGVIaWdobGlnaHRDYWxsYmFjaylcblxuICAgIGN1cnNvckNoYW5nZWQgPSA9PlxuICAgICAgQHVwZGF0ZUhpZ2hsaWdodCgpXG4gICAgc3Vic2NyaXB0aW9ucy5hZGQgQGN1cnNvci5vbkRpZENoYW5nZVBvc2l0aW9uKGN1cnNvckNoYW5nZWQpXG5cbiAgICBzdWJzY3JpcHRpb25zLmFkZCBAZWRpdG9yRWxlbWVudC5vbkRpZEF0dGFjaCA9PlxuICAgICAgQGF0dGFjaFRvTGluZXMoKVxuICAgICAgdXBkYXRlSGlnaGxpZ2h0Q2FsbGJhY2soKVxuXG4gICAgZGlzcG9zZSA9ID0+XG4gICAgICBzdWJzY3JpcHRpb25zLmRpc3Bvc2UoKVxuICAgICAgY29uZmlnU3Vic2NyaXB0aW9ucy5kaXNwb3NlKClcbiAgICAgIEByZW1vdmUoKVxuXG4gICAgc3Vic2NyaXB0aW9ucy5hZGQgQGVkaXRvci5vbkRpZERlc3Ryb3kgLT4gZGlzcG9zZSgpXG4gICAgc3Vic2NyaXB0aW9ucy5hZGQgQGN1cnNvci5vbkRpZERlc3Ryb3kgLT4gZGlzcG9zZSgpXG5cbiAgaGFuZGxlQ29uZmlnRXZlbnRzOiAtPlxuICAgIHVwZGF0ZUhpZ2hsaWdodENhbGxiYWNrID0gPT4gQHVwZGF0ZUhpZ2hsaWdodCgpXG4gICAgc3Vic2NyaXB0aW9ucyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlXG4gICAgc3Vic2NyaXB0aW9ucy5hZGQgYXRvbS5jb25maWcub2JzZXJ2ZSgnaGlnaGxpZ2h0LWNvbHVtbi5vcGFjaXR5JywgdXBkYXRlSGlnaGxpZ2h0Q2FsbGJhY2spXG4gICAgc3Vic2NyaXB0aW9ucy5hZGQgYXRvbS5jb25maWcub2JzZXJ2ZSgnaGlnaGxpZ2h0LWNvbHVtbi5lbmFibGVkJywgdXBkYXRlSGlnaGxpZ2h0Q2FsbGJhY2spXG4gICAgc3Vic2NyaXB0aW9ucy5hZGQgYXRvbS5jb25maWcub2JzZXJ2ZSgnaGlnaGxpZ2h0LWNvbHVtbi5saW5lTW9kZScsIHVwZGF0ZUhpZ2hsaWdodENhbGxiYWNrKVxuICAgIHN1YnNjcmlwdGlvbnNcblxuICB1cGRhdGVIaWdobGlnaHQ6IC0+XG4gICAgaWYgQGlzRW5hYmxlZCgpXG4gICAgICByZWN0ID0gQGhpZ2hsaWdodFJlY3QoKVxuICAgICAgcmV0dXJuIGlmICFyZWN0XG5cbiAgICAgIHdpZHRoID0gcmVjdC53aWR0aFxuICAgICAgd2lkdGggPSAxIGlmIEBpc0xpbmVNb2RlKClcbiAgICAgIEBzdHlsZS5sZWZ0ID0gXCIje3JlY3QubGVmdH1weFwiXG4gICAgICBAc3R5bGUud2lkdGggPSBcIiN7d2lkdGh9cHhcIlxuICAgICAgQHN0eWxlLm9wYWNpdHkgPSBAb3BhY2l0eSgpXG4gICAgICBAc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICBlbHNlXG4gICAgICBAc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gIGlzRW5hYmxlZDogLT4gYXRvbS5jb25maWcuZ2V0KCdoaWdobGlnaHQtY29sdW1uLmVuYWJsZWQnKSA/IHRydWVcblxuICBpc0xpbmVNb2RlOiAtPiBhdG9tLmNvbmZpZy5nZXQoJ2hpZ2hsaWdodC1jb2x1bW4ubGluZU1vZGUnKVxuXG4gIG9wYWNpdHk6IC0+XG4gICAgaWYgQGlzTGluZU1vZGUoKVxuICAgICAgMC4zXG4gICAgZWxzZVxuICAgICAgYXRvbS5jb25maWcuZ2V0KCdoaWdobGlnaHQtY29sdW1uLm9wYWNpdHknKSA/IDAuMTVcblxuICBoaWdobGlnaHRSZWN0OiAtPlxuICAgIHJlY3QgPSBAX2N1cnNvclBpeGVsUmVjdCgpXG4gICAgcmV0dXJuIGlmICFyZWN0XG5cbiAgICByZWN0LndpZHRoID0gQGVkaXRvci5nZXREZWZhdWx0Q2hhcldpZHRoKCkgaWYgIXJlY3Qud2lkdGggb3IgcmVjdC53aWR0aCBpcyAwXG4gICAgIyBGSVhNRTogcmVtb3ZlIGNvbmRpdGlvbmFsIGFzIHNvb24gYXMgdGhlIHRpbGVkIGVkaXRvciBpcyByZWxlYXNlZC5cbiAgICByZWN0LmxlZnQgLT0gQGVkaXRvckVsZW1lbnQuZ2V0U2Nyb2xsTGVmdCgpIGlmIEBlZGl0b3JFbGVtZW50Lmhhc1RpbGVkUmVuZGVyaW5nXG4gICAgcmVjdFxuXG4gIF9jdXJzb3JQaXhlbFJlY3Q6IC0+XG4gICAge3JvdywgY29sdW1ufSA9IEBjdXJzb3IuZ2V0U2NyZWVuUG9zaXRpb24oKVxuICAgIHNjcmVlblJhbmdlID0gbmV3IFJhbmdlKG5ldyBQb2ludChyb3csIGNvbHVtbiksIG5ldyBQb2ludChyb3csIGNvbHVtbiArIDEpKVxuICAgIHJldHVybiBpZiBAZWRpdG9yRWxlbWVudC5jb21wb25lbnQgPT0gbnVsbFxuXG4gICAgdHJ5XG4gICAgICByZWN0ID0gQGVkaXRvckVsZW1lbnQucGl4ZWxSZWN0Rm9yU2NyZWVuUmFuZ2Uoc2NyZWVuUmFuZ2UpXG4gICAgICByYW5nZSA9IEBlZGl0b3JFbGVtZW50LnBpeGVsUmFuZ2VGb3JTY3JlZW5SYW5nZShzY3JlZW5SYW5nZSlcbiAgICBjYXRjaCBlcnJvclxuICAgICAgY29uc29sZS5lcnJvciBlcnJvclxuXG4gICAgcmV0dXJuIGlmICFyZWN0IG9yICFyYW5nZVxuICAgIHJlY3QubGVmdCA9IHJhbmdlLnN0YXJ0LmxlZnRcbiAgICByZWN0LnJpZ2h0ID0gcmFuZ2UuZW5kLmxlZnRcbiAgICByZWN0XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQucmVnaXN0ZXJFbGVtZW50KCdoaWdobGlnaHQtY29sdW1uJyxcbiAgZXh0ZW5kczogJ2RpdidcbiAgcHJvdG90eXBlOiBIaWdobGlnaHRDb2x1bW5WaWV3LnByb3RvdHlwZVxuKVxuIl19
