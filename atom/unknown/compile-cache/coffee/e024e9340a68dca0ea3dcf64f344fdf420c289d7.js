(function() {
  module.exports = {
    Context: {
      "atom-workspace": {
        "application:inspect": "要素の検証"
      },
      "atom-text-editor": {
        "color-picker:open": "カラーピッカー",
        "minimap:toggle": "ミニマップ切替"
      },
      "atom-text-editor, .overlayer": {
        "core:undo": "取り消す",
        "core:redo": "やり直す",
        "core:cut": "カット",
        "core:copy": "コピー",
        "core:paste": "ペースト",
        "core:delete": "削除",
        "core:select-all": "すべて選択",
        "pane:split-up-and-copy-active-item": "ペイン分割･複製 ↑",
        "pane:split-down-and-copy-active-item": "ペイン分割･複製 ↓",
        "pane:split-left-and-copy-active-item": "ペイン分割･複製 ←",
        "pane:split-right-and-copy-active-item": "ペイン分割･複製 →",
        "pane:close": "ペインを閉じる"
      },
      "atom-pane": {
        "pane:split-up-and-copy-active-item": "ペイン分割 ↑",
        "pane:split-down-and-copy-active-item": "ペイン分割 ↓",
        "pane:split-left-and-copy-active-item": "ペイン分割 ←",
        "pane:split-right-and-copy-active-item": "ペイン分割 →",
        "pane:close": "ペインを閉じる"
      },
      "atom-text-editor:not([mini])": {
        "encoding-selector:show": "エンコーディング選択",
        "spell-check:correct-misspelling": "スペル修正",
        "symbols-view:go-to-declaration": "宣言に移動"
      },
      ".item-views > atom-text-editor": {
        "github:view-unstaged-changes-for-current-file": "Unstaged Changes の表示",
        "github:view-staged-changes-for-current-file": "Staged Changes の表示"
      },
      ".tree-view li.directory": {
        "project-find:show-in-current-directory": "ディレクトリ内を検索"
      },
      ".path-details.list-item": {
        "find-and-replace:copy-path": "Copy Path"
      },
      ".overlayer": {
        "autocomplete:toggle": "オートコンプリート",
        "grammar-selector:show": "文法を選択"
      },
      ".image-view": {
        "image-view:reload": "画像をリロード"
      },
      ".markdown-preview": {
        "core:copy": "HTMLをコピー",
        "core:save-as": "HTMLを保存..."
      },
      ".tree-view .file .name[data-name$=\\.markdown]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tree-view .file .name[data-name$=\\.md]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tree-view .file .name[data-name$=\\.mdown]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tree-view .file .name[data-name$=\\.mkd]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tree-view .file .name[data-name$=\\.mkdown]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tree-view .file .name[data-name$=\\.ron]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tree-view .file .name[data-name$=\\.txt]": {
        "markdown-preview:preview-file": "Markdownプレビュー"
      },
      ".tab": {
        "tabs:close-tab": "タブを閉じる",
        "tabs:close-other-tabs": "他のタブをすべて閉じる",
        "tabs:close-tabs-to-right": "右側のタブを閉じる",
        "tabs:close-tabs-to-left": "左側のタブを閉じる",
        "tabs:close-saved-tabs": "保存したタブを閉じる",
        "tabs:close-all-tabs": "タブをすべて閉じる",
        "tabs:split-up": "ペイン分割 ↑",
        "tabs:split-down": "ペイン分割 ↓",
        "tabs:split-left": "ペイン分割 ←",
        "tabs:split-right": "ペイン分割 →"
      },
      ".tab.texteditor": {
        "tabs:open-in-new-window": "新規ウインドウで開く"
      },
      ".tab.pending-tab": {
        "tabs:keep-pending-tab": "プレビュー状態を解除"
      },
      ".tab-bar": {
        "pane:reopen-closed-item": "閉じたタブを開く"
      },
      ".tree-view .full-menu": {
        "tree-view:add-file": "新規ファイル",
        "tree-view:add-folder": "新規フォルダ",
        "tree-view:move": "移動・名前を変更...",
        "tree-view:duplicate": "複製",
        "tree-view:remove": "削除",
        "tree-view:copy": "コピー",
        "tree-view:cut": "カット",
        "tree-view:paste": "ペースト",
        "application:add-project-folder": "プロジェクトフォルダを追加...",
        "tree-view:copy-full-path": "フルパスをコピー",
        "tree-view:copy-project-path": "プロジェクトパスをコピー",
        "tree-view:open-in-new-window": "新規ウインドウで開く"
      },
      '.tree-view .full-menu [is="tree-view-file"]': {
        "tree-view:open-selected-entry-up": "ペイン分割 ↑",
        "tree-view:open-selected-entry-down": "ペイン分割 ↓",
        "tree-view:open-selected-entry-left": "ペイン分割 ←",
        "tree-view:open-selected-entry-right": "ペイン分割 →"
      },
      ".tree-view .full-menu .project-root > .header": {
        "tree-view:add-file": "新規ファイル",
        "tree-view:add-folder": "新規フォルダ",
        "tree-view:move": "移動・名前を変更...",
        "tree-view:duplicate": "複製",
        "tree-view:remove": "削除",
        "tree-view:copy": "コピー",
        "tree-view:cut": "カット",
        "tree-view:paste": "ペースト",
        "application:add-project-folder": "プロジェクトフォルダを追加...",
        "tree-view:remove-project-folder": "プロジェクトフォルダを除去",
        "tree-view:copy-full-path": "フルパスをコピー",
        "tree-view:copy-project-path": "プロジェクトパスをコピー",
        "tree-view:open-in-new-window": "新規ウインドウで開く"
      },
      ".platform-darwin .tree-view .full-menu": {
        "tree-view:show-in-file-manager": "Finder で表示"
      },
      ".platform-win32 .tree-view .full-menu": {
        "tree-view:show-in-file-manager": "エクスプローラで表示"
      },
      ".platform-linux .tree-view .full-menu": {
        "tree-view:show-in-file-manager": "ファイルマネージャで表示"
      },
      ".tree-view.multi-select": {
        "tree-view:remove": "削除",
        "tree-view:copy": "コピー",
        "tree-view:cut": "カット",
        "tree-view:paste": "ペースト"
      },
      "atom-pane[data-active-item-path] .item-views": {
        "tree-view:reveal-active-file": "ツリービューに表示"
      },
      "atom-pane[data-active-item-path] .tab.active": {
        "tree-view:rename": "移動・名前を変更...",
        "tree-view:reveal-active-file": "ツリービューに表示"
      },
      ".platform-darwin atom-pane[data-active-item-path] .tab.active": {
        "tree-view:show-current-file-in-file-manager": "Finder で表示"
      },
      ".platform-win32 atom-pane[data-active-item-path] .tab.active": {
        "tree-view:show-current-file-in-file-manager": "エクスプローラで表示"
      },
      ".platform-linux atom-pane[data-active-item-path] .tab.active": {
        "tree-view:show-current-file-in-file-manager": "ファイルマネージャで表示"
      },
      ".platform-darwin atom-text-editor:not([mini])": {
        "tree-view:show-current-file-in-file-manager": "Finder で表示"
      },
      ".platform-win32 atom-text-editor:not([mini])": {
        "tree-view:show-current-file-in-file-manager": "エクスプローラで表示"
      },
      ".platform-linux atom-text-editor:not([mini])": {
        "tree-view:show-current-file-in-file-manager": "ファイルマネージャで表示"
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL3VzaGltYXJ1Ly5hdG9tL3BhY2thZ2VzL2phcGFuZXNlLW1lbnUvZGVmL2NvbnRleHQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUI7SUFDakIsT0FBQSxFQUNFO01BQUEsZ0JBQUEsRUFDRTtRQUFBLHFCQUFBLEVBQXVCLE9BQXZCO09BREY7TUFFQSxrQkFBQSxFQUNFO1FBQUEsbUJBQUEsRUFBcUIsU0FBckI7UUFDQSxnQkFBQSxFQUFrQixTQURsQjtPQUhGO01BS0EsOEJBQUEsRUFDRTtRQUFBLFdBQUEsRUFBYSxNQUFiO1FBQ0EsV0FBQSxFQUFhLE1BRGI7UUFFQSxVQUFBLEVBQVksS0FGWjtRQUdBLFdBQUEsRUFBYSxLQUhiO1FBSUEsWUFBQSxFQUFjLE1BSmQ7UUFLQSxhQUFBLEVBQWUsSUFMZjtRQU1BLGlCQUFBLEVBQW1CLE9BTm5CO1FBT0Esb0NBQUEsRUFBc0MsWUFQdEM7UUFRQSxzQ0FBQSxFQUF3QyxZQVJ4QztRQVNBLHNDQUFBLEVBQXdDLFlBVHhDO1FBVUEsdUNBQUEsRUFBeUMsWUFWekM7UUFXQSxZQUFBLEVBQWMsU0FYZDtPQU5GO01Ba0JBLFdBQUEsRUFDRTtRQUFBLG9DQUFBLEVBQXNDLFNBQXRDO1FBQ0Esc0NBQUEsRUFBd0MsU0FEeEM7UUFFQSxzQ0FBQSxFQUF3QyxTQUZ4QztRQUdBLHVDQUFBLEVBQXlDLFNBSHpDO1FBSUEsWUFBQSxFQUFjLFNBSmQ7T0FuQkY7TUF3QkEsOEJBQUEsRUFDRTtRQUFBLHdCQUFBLEVBQTBCLFlBQTFCO1FBQ0EsaUNBQUEsRUFBbUMsT0FEbkM7UUFFQSxnQ0FBQSxFQUFrQyxPQUZsQztPQXpCRjtNQTRCQSxnQ0FBQSxFQUNFO1FBQUEsK0NBQUEsRUFBaUQsc0JBQWpEO1FBQ0EsNkNBQUEsRUFBK0Msb0JBRC9DO09BN0JGO01BK0JBLHlCQUFBLEVBQ0U7UUFBQSx3Q0FBQSxF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LGdDQUFBLEVBQWtDLGNBQWxDO09BL0dGO01BZ0hBLHlCQUFBLEVBQ0U7UUFBQSxrQkFBQSxFQUFvQixJQUFwQjtRQUNBLGdCQUFBLEVBQWtCLEtBRGxCO1FBRUEsZUFBQSxFQUFpQixLQUZqQjtRQUdBLGlCQUFBLEVBQW1CLE1BSG5CO09BakhGO01BcUhBLDhDQUFBLEVBQ0U7UUFBQSw4QkFBQSxFQUFnQyxXQUFoQztPQXRIRjtNQXVIQSw4Q0FBQSxFQUNFO1FBQUEsa0JBQUEsRUFBb0IsYUFBcEI7UUFDQSw4QkFBQSxFQUFnQyxXQURoQztPQXhIRjtNQTBIQSwrREFBQSxFQUNFO1FBQUEsNkNBQUEsRUFBK0MsWUFBL0M7T0EzSEY7TUE0SEEsOERBQUEsRUFDRTtRQUFBLDZDQUFBLEVBQStDLFlBQS9DO09BN0hGO01BOEhBLDhEQUFBLEVBQ0U7UUFBQSw2Q0FBQSxFQUErQyxjQUEvQztPQS9IRjtNQWdJQSwrQ0FBQSxFQUNFO1FBQUEsNkNBQUEsRUFBK0MsWUFBL0M7T0FqSUY7TUFrSUEsOENBQUEsRUFDRTtRQUFBLDZDQUFBLEVBQStDLFlBQS9DO09BbklGO01Bb0lBLDhDQUFBLEVBQ0U7UUFBQSw2Q0FBQSxFQUErQyxjQUEvQztPQXJJRjtLQUZlOztBQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuQ29udGV4dDpcbiAgXCJhdG9tLXdvcmtzcGFjZVwiOlxuICAgIFwiYXBwbGljYXRpb246aW5zcGVjdFwiOiBcIuimgee0oOOBruaknOiovFwiXG4gIFwiYXRvbS10ZXh0LWVkaXRvclwiOlxuICAgIFwiY29sb3ItcGlja2VyOm9wZW5cIjogXCLjgqvjg6njg7zjg5Tjg4Pjgqvjg7xcIlxuICAgIFwibWluaW1hcDp0b2dnbGVcIjogXCLjg5/jg4vjg57jg4Pjg5fliIfmm79cIlxuICBcImF0b20tdGV4dC1lZGl0b3IsIC5vdmVybGF5ZXJcIjpcbiAgICBcImNvcmU6dW5kb1wiOiBcIuWPluOCiua2iOOBmVwiXG4gICAgXCJjb3JlOnJlZG9cIjogXCLjgoTjgornm7TjgZlcIlxuICAgIFwiY29yZTpjdXRcIjogXCLjgqvjg4Pjg4hcIlxuICAgIFwiY29yZTpjb3B5XCI6IFwi44Kz44OU44O8XCJcbiAgICBcImNvcmU6cGFzdGVcIjogXCLjg5rjg7zjgrnjg4hcIlxuICAgIFwiY29yZTpkZWxldGVcIjogXCLliYrpmaRcIlxuICAgIFwiY29yZTpzZWxlY3QtYWxsXCI6IFwi44GZ44G544Gm6YG45oqeXCJcbiAgICBcInBhbmU6c3BsaXQtdXAtYW5kLWNvcHktYWN0aXZlLWl0ZW1cIjogXCLjg5rjgqTjg7PliIblibLvvaXopIfoo70g4oaRXCJcbiAgICBcInBhbmU6c3BsaXQtZG93bi1hbmQtY29weS1hY3RpdmUtaXRlbVwiOiBcIuODmuOCpOODs+WIhuWJsu+9peikh+ijvSDihpNcIlxuICAgIFwicGFuZTpzcGxpdC1sZWZ0LWFuZC1jb3B5LWFjdGl2ZS1pdGVtXCI6IFwi44Oa44Kk44Oz5YiG5Ymy772l6KSH6KO9IOKGkFwiXG4gICAgXCJwYW5lOnNwbGl0LXJpZ2h0LWFuZC1jb3B5LWFjdGl2ZS1pdGVtXCI6IFwi44Oa44Kk44Oz5YiG5Ymy772l6KSH6KO9IOKGklwiXG4gICAgXCJwYW5lOmNsb3NlXCI6IFwi44Oa44Kk44Oz44KS6ZaJ44GY44KLXCJcbiAgXCJhdG9tLXBhbmVcIjpcbiAgICBcInBhbmU6c3BsaXQtdXAtYW5kLWNvcHktYWN0aXZlLWl0ZW1cIjogXCLjg5rjgqTjg7PliIblibIg4oaRXCJcbiAgICBcInBhbmU6c3BsaXQtZG93bi1hbmQtY29weS1hY3RpdmUtaXRlbVwiOiBcIuODmuOCpOODs+WIhuWJsiDihpNcIlxuICAgIFwicGFuZTpzcGxpdC1sZWZ0LWFuZC1jb3B5LWFjdGl2ZS1pdGVtXCI6IFwi44Oa44Kk44Oz5YiG5YmyIOKGkFwiXG4gICAgXCJwYW5lOnNwbGl0LXJpZ2h0LWFuZC1jb3B5LWFjdGl2ZS1pdGVtXCI6IFwi44Oa44Kk44Oz5YiG5YmyIOKGklwiXG4gICAgXCJwYW5lOmNsb3NlXCI6IFwi44Oa44Kk44Oz44KS6ZaJ44GY44KLXCJcbiAgXCJhdG9tLXRleHQtZWRpdG9yOm5vdChbbWluaV0pXCI6XG4gICAgXCJlbmNvZGluZy1zZWxlY3RvcjpzaG93XCI6IFwi44Ko44Oz44Kz44O844OH44Kj44Oz44Kw6YG45oqeXCJcbiAgICBcInNwZWxsLWNoZWNrOmNvcnJlY3QtbWlzc3BlbGxpbmdcIjogXCLjgrnjg5rjg6vkv67mraNcIlxuICAgIFwic3ltYm9scy12aWV3OmdvLXRvLWRlY2xhcmF0aW9uXCI6IFwi5a6j6KiA44Gr56e75YuVXCJcbiAgXCIuaXRlbS12aWV3cyA+IGF0b20tdGV4dC1lZGl0b3JcIiA6XG4gICAgXCJnaXRodWI6dmlldy11bnN0YWdlZC1jaGFuZ2VzLWZvci1jdXJyZW50LWZpbGVcIjogXCJVbnN0YWdlZCBDaGFuZ2VzIOOBruihqOekulwiXG4gICAgXCJnaXRodWI6dmlldy1zdGFnZWQtY2hhbmdlcy1mb3ItY3VycmVudC1maWxlXCI6IFwiU3RhZ2VkIENoYW5nZXMg44Gu6KGo56S6XCJcbiAgXCIudHJlZS12aWV3IGxpLmRpcmVjdG9yeVwiOlxuICAgIFwicHJvamVjdC1maW5kOnNob3ctaW4tY3VycmVudC1kaXJlY3RvcnlcIjogXCLjg4fjgqPjg6zjgq/jg4jjg6rlhoXjgpLmpJzntKJcIlxuICBcIi5wYXRoLWRldGFpbHMubGlzdC1pdGVtXCI6XG4gICAgXCJmaW5kLWFuZC1yZXBsYWNlOmNvcHktcGF0aFwiOiBcIkNvcHkgUGF0aFwiXG4gIFwiLm92ZXJsYXllclwiOlxuICAgIFwiYXV0b2NvbXBsZXRlOnRvZ2dsZVwiOiBcIuOCquODvOODiOOCs+ODs+ODl+ODquODvOODiFwiXG4gICAgXCJncmFtbWFyLXNlbGVjdG9yOnNob3dcIjogXCLmlofms5XjgpLpgbjmip5cIlxuICBcIi5pbWFnZS12aWV3XCI6XG4gICAgXCJpbWFnZS12aWV3OnJlbG9hZFwiOiBcIueUu+WDj+OCkuODquODreODvOODiVwiXG4gIFwiLm1hcmtkb3duLXByZXZpZXdcIjpcbiAgICBcImNvcmU6Y29weVwiOiBcIkhUTUzjgpLjgrPjg5Tjg7xcIlxuICAgIFwiY29yZTpzYXZlLWFzXCI6IFwiSFRNTOOCkuS/neWtmC4uLlwiXG4gIFwiLnRyZWUtdmlldyAuZmlsZSAubmFtZVtkYXRhLW5hbWUkPVxcXFwubWFya2Rvd25dXCI6XG4gICAgXCJtYXJrZG93bi1wcmV2aWV3OnByZXZpZXctZmlsZVwiOiBcIk1hcmtkb3du44OX44Os44OT44Ol44O8XCJcbiAgXCIudHJlZS12aWV3IC5maWxlIC5uYW1lW2RhdGEtbmFtZSQ9XFxcXC5tZF1cIjpcbiAgICBcIm1hcmtkb3duLXByZXZpZXc6cHJldmlldy1maWxlXCI6IFwiTWFya2Rvd27jg5fjg6zjg5Pjg6Xjg7xcIlxuICBcIi50cmVlLXZpZXcgLmZpbGUgLm5hbWVbZGF0YS1uYW1lJD1cXFxcLm1kb3duXVwiOlxuICAgIFwibWFya2Rvd24tcHJldmlldzpwcmV2aWV3LWZpbGVcIjogXCJNYXJrZG93buODl+ODrOODk+ODpeODvFwiXG4gIFwiLnRyZWUtdmlldyAuZmlsZSAubmFtZVtkYXRhLW5hbWUkPVxcXFwubWtkXVwiOlxuICAgIFwibWFya2Rvd24tcHJldmlldzpwcmV2aWV3LWZpbGVcIjogXCJNYXJrZG93buODl+ODrOODk+ODpeODvFwiXG4gIFwiLnRyZWUtdmlldyAuZmlsZSAubmFtZVtkYXRhLW5hbWUkPVxcXFwubWtkb3duXVwiOlxuICAgIFwibWFya2Rvd24tcHJldmlldzpwcmV2aWV3LWZpbGVcIjogXCJNYXJrZG93buODl+ODrOODk+ODpeODvFwiXG4gIFwiLnRyZWUtdmlldyAuZmlsZSAubmFtZVtkYXRhLW5hbWUkPVxcXFwucm9uXVwiOlxuICAgIFwibWFya2Rvd24tcHJldmlldzpwcmV2aWV3LWZpbGVcIjogXCJNYXJrZG93buODl+ODrOODk+ODpeODvFwiXG4gIFwiLnRyZWUtdmlldyAuZmlsZSAubmFtZVtkYXRhLW5hbWUkPVxcXFwudHh0XVwiOlxuICAgIFwibWFya2Rvd24tcHJldmlldzpwcmV2aWV3LWZpbGVcIjogXCJNYXJrZG93buODl+ODrOODk+ODpeODvFwiXG4gIFwiLnRhYlwiOlxuICAgIFwidGFiczpjbG9zZS10YWJcIjogXCLjgr/jg5bjgpLplonjgZjjgotcIlxuICAgIFwidGFiczpjbG9zZS1vdGhlci10YWJzXCI6IFwi5LuW44Gu44K/44OW44KS44GZ44G544Gm6ZaJ44GY44KLXCJcbiAgICBcInRhYnM6Y2xvc2UtdGFicy10by1yaWdodFwiOiBcIuWPs+WBtOOBruOCv+ODluOCkumWieOBmOOCi1wiXG4gICAgXCJ0YWJzOmNsb3NlLXRhYnMtdG8tbGVmdFwiOiBcIuW3puWBtOOBruOCv+ODluOCkumWieOBmOOCi1wiXG4gICAgXCJ0YWJzOmNsb3NlLXNhdmVkLXRhYnNcIjogXCLkv53lrZjjgZfjgZ/jgr/jg5bjgpLplonjgZjjgotcIlxuICAgIFwidGFiczpjbG9zZS1hbGwtdGFic1wiOiBcIuOCv+ODluOCkuOBmeOBueOBpumWieOBmOOCi1wiXG4gICAgXCJ0YWJzOnNwbGl0LXVwXCI6IFwi44Oa44Kk44Oz5YiG5YmyIOKGkVwiXG4gICAgXCJ0YWJzOnNwbGl0LWRvd25cIjogXCLjg5rjgqTjg7PliIblibIg4oaTXCJcbiAgICBcInRhYnM6c3BsaXQtbGVmdFwiOiBcIuODmuOCpOODs+WIhuWJsiDihpBcIlxuICAgIFwidGFiczpzcGxpdC1yaWdodFwiOiBcIuODmuOCpOODs+WIhuWJsiDihpJcIlxuICBcIi50YWIudGV4dGVkaXRvclwiOlxuICAgIFwidGFiczpvcGVuLWluLW5ldy13aW5kb3dcIjogXCLmlrDopo/jgqbjgqTjg7Pjg4njgqbjgafplovjgY9cIlxuICBcIi50YWIucGVuZGluZy10YWJcIjpcbiAgICBcInRhYnM6a2VlcC1wZW5kaW5nLXRhYlwiOiBcIuODl+ODrOODk+ODpeODvOeKtuaFi+OCkuino+mZpFwiXG4gIFwiLnRhYi1iYXJcIjpcbiAgICBcInBhbmU6cmVvcGVuLWNsb3NlZC1pdGVtXCI6IFwi6ZaJ44GY44Gf44K/44OW44KS6ZaL44GPXCJcbiAgXCIudHJlZS12aWV3IC5mdWxsLW1lbnVcIjpcbiAgICBcInRyZWUtdmlldzphZGQtZmlsZVwiOiBcIuaWsOimj+ODleOCoeOCpOODq1wiXG4gICAgXCJ0cmVlLXZpZXc6YWRkLWZvbGRlclwiOiBcIuaWsOimj+ODleOCqeODq+ODgFwiXG4gICAgXCJ0cmVlLXZpZXc6bW92ZVwiOiBcIuenu+WLleODu+WQjeWJjeOCkuWkieabtC4uLlwiXG4gICAgXCJ0cmVlLXZpZXc6ZHVwbGljYXRlXCI6IFwi6KSH6KO9XCJcbiAgICBcInRyZWUtdmlldzpyZW1vdmVcIjogXCLliYrpmaRcIlxuICAgIFwidHJlZS12aWV3OmNvcHlcIjogXCLjgrPjg5Tjg7xcIlxuICAgIFwidHJlZS12aWV3OmN1dFwiOiBcIuOCq+ODg+ODiFwiXG4gICAgXCJ0cmVlLXZpZXc6cGFzdGVcIjogXCLjg5rjg7zjgrnjg4hcIlxuICAgIFwiYXBwbGljYXRpb246YWRkLXByb2plY3QtZm9sZGVyXCI6IFwi44OX44Ot44K444Kn44Kv44OI44OV44Kp44Or44OA44KS6L+95YqgLi4uXCJcbiAgICBcInRyZWUtdmlldzpjb3B5LWZ1bGwtcGF0aFwiOiBcIuODleODq+ODkeOCueOCkuOCs+ODlOODvFwiXG4gICAgXCJ0cmVlLXZpZXc6Y29weS1wcm9qZWN0LXBhdGhcIjogXCLjg5fjg63jgrjjgqfjgq/jg4jjg5HjgrnjgpLjgrPjg5Tjg7xcIlxuICAgIFwidHJlZS12aWV3Om9wZW4taW4tbmV3LXdpbmRvd1wiOiBcIuaWsOimj+OCpuOCpOODs+ODieOCpuOBp+mWi+OBj1wiXG4gICcudHJlZS12aWV3IC5mdWxsLW1lbnUgW2lzPVwidHJlZS12aWV3LWZpbGVcIl0nOlxuICAgIFwidHJlZS12aWV3Om9wZW4tc2VsZWN0ZWQtZW50cnktdXBcIjogXCLjg5rjgqTjg7PliIblibIg4oaRXCJcbiAgICBcInRyZWUtdmlldzpvcGVuLXNlbGVjdGVkLWVudHJ5LWRvd25cIjogXCLjg5rjgqTjg7PliIblibIg4oaTXCJcbiAgICBcInRyZWUtdmlldzpvcGVuLXNlbGVjdGVkLWVudHJ5LWxlZnRcIjogXCLjg5rjgqTjg7PliIblibIg4oaQXCJcbiAgICBcInRyZWUtdmlldzpvcGVuLXNlbGVjdGVkLWVudHJ5LXJpZ2h0XCI6IFwi44Oa44Kk44Oz5YiG5YmyIOKGklwiXG4gIFwiLnRyZWUtdmlldyAuZnVsbC1tZW51IC5wcm9qZWN0LXJvb3QgPiAuaGVhZGVyXCI6XG4gICAgXCJ0cmVlLXZpZXc6YWRkLWZpbGVcIjogXCLmlrDopo/jg5XjgqHjgqTjg6tcIlxuICAgIFwidHJlZS12aWV3OmFkZC1mb2xkZXJcIjogXCLmlrDopo/jg5Xjgqnjg6vjg4BcIlxuICAgIFwidHJlZS12aWV3Om1vdmVcIjogXCLnp7vli5Xjg7vlkI3liY3jgpLlpInmm7QuLi5cIlxuICAgIFwidHJlZS12aWV3OmR1cGxpY2F0ZVwiOiBcIuikh+ijvVwiXG4gICAgXCJ0cmVlLXZpZXc6cmVtb3ZlXCI6IFwi5YmK6ZmkXCJcbiAgICBcInRyZWUtdmlldzpjb3B5XCI6IFwi44Kz44OU44O8XCJcbiAgICBcInRyZWUtdmlldzpjdXRcIjogXCLjgqvjg4Pjg4hcIlxuICAgIFwidHJlZS12aWV3OnBhc3RlXCI6IFwi44Oa44O844K544OIXCJcbiAgICBcImFwcGxpY2F0aW9uOmFkZC1wcm9qZWN0LWZvbGRlclwiOiBcIuODl+ODreOCuOOCp+OCr+ODiOODleOCqeODq+ODgOOCkui/veWKoC4uLlwiXG4gICAgXCJ0cmVlLXZpZXc6cmVtb3ZlLXByb2plY3QtZm9sZGVyXCI6IFwi44OX44Ot44K444Kn44Kv44OI44OV44Kp44Or44OA44KS6Zmk5Y67XCJcbiAgICBcInRyZWUtdmlldzpjb3B5LWZ1bGwtcGF0aFwiOiBcIuODleODq+ODkeOCueOCkuOCs+ODlOODvFwiXG4gICAgXCJ0cmVlLXZpZXc6Y29weS1wcm9qZWN0LXBhdGhcIjogXCLjg5fjg63jgrjjgqfjgq/jg4jjg5HjgrnjgpLjgrPjg5Tjg7xcIlxuICAgIFwidHJlZS12aWV3Om9wZW4taW4tbmV3LXdpbmRvd1wiOiBcIuaWsOimj+OCpuOCpOODs+ODieOCpuOBp+mWi+OBj1wiXG4gIFwiLnBsYXRmb3JtLWRhcndpbiAudHJlZS12aWV3IC5mdWxsLW1lbnVcIjpcbiAgICBcInRyZWUtdmlldzpzaG93LWluLWZpbGUtbWFuYWdlclwiOiBcIkZpbmRlciDjgafooajnpLpcIlxuICBcIi5wbGF0Zm9ybS13aW4zMiAudHJlZS12aWV3IC5mdWxsLW1lbnVcIjpcbiAgICBcInRyZWUtdmlldzpzaG93LWluLWZpbGUtbWFuYWdlclwiOiBcIuOCqOOCr+OCueODl+ODreODvOODqeOBp+ihqOekulwiXG4gIFwiLnBsYXRmb3JtLWxpbnV4IC50cmVlLXZpZXcgLmZ1bGwtbWVudVwiOlxuICAgIFwidHJlZS12aWV3OnNob3ctaW4tZmlsZS1tYW5hZ2VyXCI6IFwi44OV44Kh44Kk44Or44Oe44ON44O844K444Oj44Gn6KGo56S6XCJcbiAgXCIudHJlZS12aWV3Lm11bHRpLXNlbGVjdFwiOlxuICAgIFwidHJlZS12aWV3OnJlbW92ZVwiOiBcIuWJiumZpFwiXG4gICAgXCJ0cmVlLXZpZXc6Y29weVwiOiBcIuOCs+ODlOODvFwiXG4gICAgXCJ0cmVlLXZpZXc6Y3V0XCI6IFwi44Kr44OD44OIXCJcbiAgICBcInRyZWUtdmlldzpwYXN0ZVwiOiBcIuODmuODvOOCueODiFwiXG4gIFwiYXRvbS1wYW5lW2RhdGEtYWN0aXZlLWl0ZW0tcGF0aF0gLml0ZW0tdmlld3NcIjpcbiAgICBcInRyZWUtdmlldzpyZXZlYWwtYWN0aXZlLWZpbGVcIjogXCLjg4Tjg6rjg7zjg5Pjg6Xjg7zjgavooajnpLpcIlxuICBcImF0b20tcGFuZVtkYXRhLWFjdGl2ZS1pdGVtLXBhdGhdIC50YWIuYWN0aXZlXCI6XG4gICAgXCJ0cmVlLXZpZXc6cmVuYW1lXCI6IFwi56e75YuV44O75ZCN5YmN44KS5aSJ5pu0Li4uXCJcbiAgICBcInRyZWUtdmlldzpyZXZlYWwtYWN0aXZlLWZpbGVcIjogXCLjg4Tjg6rjg7zjg5Pjg6Xjg7zjgavooajnpLpcIlxuICBcIi5wbGF0Zm9ybS1kYXJ3aW4gYXRvbS1wYW5lW2RhdGEtYWN0aXZlLWl0ZW0tcGF0aF0gLnRhYi5hY3RpdmVcIjpcbiAgICBcInRyZWUtdmlldzpzaG93LWN1cnJlbnQtZmlsZS1pbi1maWxlLW1hbmFnZXJcIjogXCJGaW5kZXIg44Gn6KGo56S6XCJcbiAgXCIucGxhdGZvcm0td2luMzIgYXRvbS1wYW5lW2RhdGEtYWN0aXZlLWl0ZW0tcGF0aF0gLnRhYi5hY3RpdmVcIjpcbiAgICBcInRyZWUtdmlldzpzaG93LWN1cnJlbnQtZmlsZS1pbi1maWxlLW1hbmFnZXJcIjogXCLjgqjjgq/jgrnjg5fjg63jg7zjg6njgafooajnpLpcIlxuICBcIi5wbGF0Zm9ybS1saW51eCBhdG9tLXBhbmVbZGF0YS1hY3RpdmUtaXRlbS1wYXRoXSAudGFiLmFjdGl2ZVwiOlxuICAgIFwidHJlZS12aWV3OnNob3ctY3VycmVudC1maWxlLWluLWZpbGUtbWFuYWdlclwiOiBcIuODleOCoeOCpOODq+ODnuODjeODvOOCuOODo+OBp+ihqOekulwiXG4gIFwiLnBsYXRmb3JtLWRhcndpbiBhdG9tLXRleHQtZWRpdG9yOm5vdChbbWluaV0pXCI6XG4gICAgXCJ0cmVlLXZpZXc6c2hvdy1jdXJyZW50LWZpbGUtaW4tZmlsZS1tYW5hZ2VyXCI6IFwiRmluZGVyIOOBp+ihqOekulwiXG4gIFwiLnBsYXRmb3JtLXdpbjMyIGF0b20tdGV4dC1lZGl0b3I6bm90KFttaW5pXSlcIjpcbiAgICBcInRyZWUtdmlldzpzaG93LWN1cnJlbnQtZmlsZS1pbi1maWxlLW1hbmFnZXJcIjogXCLjgqjjgq/jgrnjg5fjg63jg7zjg6njgafooajnpLpcIlxuICBcIi5wbGF0Zm9ybS1saW51eCBhdG9tLXRleHQtZWRpdG9yOm5vdChbbWluaV0pXCI6XG4gICAgXCJ0cmVlLXZpZXc6c2hvdy1jdXJyZW50LWZpbGUtaW4tZmlsZS1tYW5hZ2VyXCI6IFwi44OV44Kh44Kk44Or44Oe44ON44O844K444Oj44Gn6KGo56S6XCJcblxufVxuIl19
