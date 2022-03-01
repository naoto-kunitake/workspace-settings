'use babel';

function computeWordDiff(oldText, newText) {
  var addedWords = [];
  var removedWords = [];

  if (oldText && newText) {
    // defensive fix for #60
    var JsDiff = require('diff');
    var wordDiff = JsDiff.diffWordsWithSpace(oldText, newText);

    // split into two lists: added + removed
    wordDiff.forEach(function (part) {
      if (part.added) {
        part.changed = true;
        addedWords.push(part);
      } else if (part.removed) {
        part.changed = true;
        removedWords.push(part);
      } else {
        addedWords.push(part);
        removedWords.push(part);
      }
    });
  }

  return {
    addedWords: addedWords,
    removedWords: removedWords
  };
}

module.exports = {
  computeWordDiff: computeWordDiff
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2hpbWFydS8uYXRvbS9wYWNrYWdlcy9zcGxpdC1kaWZmL2xpYi9jb21wdXRlLXdvcmQtZGlmZi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLENBQUM7O0FBRVosU0FBUyxlQUFlLENBQUMsT0FBZSxFQUFFLE9BQWUsRUFBWTtBQUNuRSxNQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDcEIsTUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDOztBQUV0QixNQUFJLE9BQU8sSUFBSSxPQUFPLEVBQUU7O0FBQ3RCLFFBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixRQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDOzs7QUFHM0QsWUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksRUFBSTtBQUN2QixVQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDZCxZQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUNwQixrQkFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN2QixNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUN2QixZQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUNwQixvQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN6QixNQUFNO0FBQ0wsa0JBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsb0JBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDekI7S0FDRixDQUFDLENBQUM7R0FDSjs7QUFFRCxTQUFPO0FBQ0wsY0FBVSxFQUFWLFVBQVU7QUFDVixnQkFBWSxFQUFaLFlBQVk7R0FDYixDQUFDO0NBQ0g7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNmLGlCQUFlLEVBQWYsZUFBZTtDQUNoQixDQUFDIiwiZmlsZSI6Ii9Vc2Vycy91c2hpbWFydS8uYXRvbS9wYWNrYWdlcy9zcGxpdC1kaWZmL2xpYi9jb21wdXRlLXdvcmQtZGlmZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5mdW5jdGlvbiBjb21wdXRlV29yZERpZmYob2xkVGV4dDogc3RyaW5nLCBuZXdUZXh0OiBzdHJpbmcpOiBXb3JkRGlmZiB7XG4gIHZhciBhZGRlZFdvcmRzID0gW107XG4gIHZhciByZW1vdmVkV29yZHMgPSBbXTtcblxuICBpZiAob2xkVGV4dCAmJiBuZXdUZXh0KSB7IC8vIGRlZmVuc2l2ZSBmaXggZm9yICM2MFxuICAgIHZhciBKc0RpZmYgPSByZXF1aXJlKCdkaWZmJyk7XG4gICAgdmFyIHdvcmREaWZmID0gSnNEaWZmLmRpZmZXb3Jkc1dpdGhTcGFjZShvbGRUZXh0LCBuZXdUZXh0KTtcblxuICAgIC8vIHNwbGl0IGludG8gdHdvIGxpc3RzOiBhZGRlZCArIHJlbW92ZWRcbiAgICB3b3JkRGlmZi5mb3JFYWNoKHBhcnQgPT4ge1xuICAgICAgaWYgKHBhcnQuYWRkZWQpIHtcbiAgICAgICAgcGFydC5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgYWRkZWRXb3Jkcy5wdXNoKHBhcnQpO1xuICAgICAgfSBlbHNlIGlmIChwYXJ0LnJlbW92ZWQpIHtcbiAgICAgICAgcGFydC5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgcmVtb3ZlZFdvcmRzLnB1c2gocGFydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRlZFdvcmRzLnB1c2gocGFydCk7XG4gICAgICAgIHJlbW92ZWRXb3Jkcy5wdXNoKHBhcnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRlZFdvcmRzLFxuICAgIHJlbW92ZWRXb3JkcyxcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXB1dGVXb3JkRGlmZlxufTtcbiJdfQ==