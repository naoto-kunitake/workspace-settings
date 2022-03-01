(function() {
  module.exports = {
    Menu: {
      Atom: {
        value: "Atom",
        submenu: {
          "About Atom": {
            value: "Atom について"
          },
          "View License": {
            value: "ライセンスを表示"
          },
          "Preferences…": {
            value: "環境設定..."
          },
          "Config…": {
            value: "個人設定..."
          },
          "Init Script…": {
            value: "起動スクリプト..."
          },
          "Keymap…": {
            value: "キーマップ..."
          },
          "Snippets…": {
            value: "スニペット..."
          },
          "Stylesheet…": {
            value: "スタイルシート..."
          },
          "Install Shell Commands": {
            value: "シェルコマンドをインストール"
          },
          "Hide Atom": {
            value: "Atom を隠す"
          },
          "Hide Others": {
            value: "他を隠す"
          },
          "Show All": {
            value: "すべてを表示"
          },
          Quit: {
            value: "Atom を終了"
          }
        }
      },
      File: {
        value: "ファイル",
        submenu: {
          "New Window": {
            value: "新規ウインドウ"
          },
          "New File": {
            value: "新規ファイル"
          },
          "Open…": {
            value: "開く..."
          },
          "Add Project Folder…": {
            value: "プロジェクトフォルダを追加..."
          },
          "Reopen Project": {
            value: "プロジェクト履歴から開く",
            submenu: {
              "Clear Project History": {
                value: "プロジェクト履歴をクリア"
              }
            }
          },
          "Reopen Last Item": {
            value: "最後に使用したファイルを開く"
          },
          Save: {
            value: "保存"
          },
          "Save As…": {
            value: "別名で保存..."
          },
          "Save All": {
            value: "すべて保存"
          },
          "Close Tab": {
            value: "タブを閉じる"
          },
          "Close Pane": {
            value: "ペインを閉じる"
          },
          "Close Window": {
            value: "ウインドウを閉じる"
          },
          "Close All Tabs": {
            value: "タブをすべて閉じる"
          }
        }
      },
      Edit: {
        value: "編集",
        submenu: {
          Undo: {
            value: "取り消す"
          },
          Redo: {
            value: "やり直す"
          },
          Cut: {
            value: "カット"
          },
          Copy: {
            value: "コピー"
          },
          "Copy Path": {
            value: "パスをコピー"
          },
          Paste: {
            value: "ペースト"
          },
          "Select All": {
            value: "すべて選択"
          },
          "Toggle Comments": {
            value: "コメントの切替"
          },
          Lines: {
            value: "行",
            submenu: {
              Indent: {
                value: "インデントを追加"
              },
              Outdent: {
                value: "インデントを戻す"
              },
              "Auto Indent": {
                value: "自動インデント"
              },
              "Move Line Up": {
                value: "選択中の行を上に移動"
              },
              "Move Line Down": {
                value: "選択中の行を下に移動"
              },
              "Duplicate Lines": {
                value: "行を複製"
              },
              "Delete Line": {
                value: "行を削除"
              },
              "Join Lines": {
                value: "行を結合"
              }
            }
          },
          Columns: {
            value: "列",
            submenu: {
              "Move Selection Left": {
                value: "選択範囲を左に移動"
              },
              "Move Selection Right": {
                value: "選択範囲を右に移動"
              }
            }
          },
          Text: {
            value: "テキスト",
            submenu: {
              "Upper Case": {
                value: "大文字に変換"
              },
              "Lower Case": {
                value: "小文字に変換"
              },
              "Delete to End of Word": {
                value: "単語の末尾まで削除"
              },
              "Delete to Previous Word Boundary": {
                value: "前の単語の境界まで削除"
              },
              "Delete to Next Word Boundary": {
                value: "次の単語の境界まで削除"
              },
              "Delete Line": {
                value: "行を削除"
              },
              Transpose: {
                value: "前後を入れ替え"
              }
            }
          },
          Folding: {
            value: "折りたたみ",
            submenu: {
              Fold: {
                value: "折りたたむ"
              },
              Unfold: {
                value: "折りたたみを戻す"
              },
              "Unfold All": {
                value: "すべての折りたたみを戻す"
              },
              "Fold All": {
                value: "すべて折りたたむ"
              },
              "Fold Level 1": {
                value: "1段階折りたたむ"
              },
              "Fold Level 2": {
                value: "2段階折りたたむ"
              },
              "Fold Level 3": {
                value: "3段階折りたたむ"
              },
              "Fold Level 4": {
                value: "4段階折りたたむ"
              },
              "Fold Level 5": {
                value: "5段階折りたたむ"
              },
              "Fold Level 6": {
                value: "6段階折りたたむ"
              },
              "Fold Level 7": {
                value: "7段階折りたたむ"
              },
              "Fold Level 8": {
                value: "8段階折りたたむ"
              },
              "Fold Level 9": {
                value: "9段階折りたたむ"
              }
            }
          },
          "Reflow Selection": {
            value: "選択範囲をリフロー"
          },
          Bookmark: {
            value: "ブックマーク",
            submenu: {
              "View All": {
                value: "すべて表示"
              },
              "Toggle Bookmark": {
                value: "ブックマークの切替"
              },
              "Jump to Next Bookmark": {
                value: "次のブックマークへ"
              },
              "Jump to Previous Bookmark": {
                value: "前のブックマークへ"
              }
            }
          },
          "Select Encoding": {
            value: "エンコーディング選択"
          },
          "Go to Line": {
            value: "指定行に移動"
          },
          "Select Grammar": {
            value: "文法を選択"
          }
        }
      },
      View: {
        value: "表示",
        submenu: {
          "Toggle Full Screen": {
            value: "フルスクリーン切替"
          },
          Panes: {
            value: "ペイン",
            submenu: {
              "Split Up": {
                value: "ペイン分割 ↑"
              },
              "Split Down": {
                value: "ペイン分割 ↓"
              },
              "Split Left": {
                value: "ペイン分割 ←"
              },
              "Split Right": {
                value: "ペイン分割 →"
              },
              "Focus Next Pane": {
                value: "次のペインにフォーカス"
              },
              "Focus Previous Pane": {
                value: "前のペインにフォーカス"
              },
              "Focus Pane Above": {
                value: "ペインにフォーカス ↑"
              },
              "Focus Pane Below": {
                value: "ペインにフォーカス ↓"
              },
              "Focus Pane On Left": {
                value: "ペインにフォーカス ←"
              },
              "Focus Pane On Right": {
                value: "ペインにフォーカス →"
              },
              "Close Pane": {
                value: "ペインを閉じる"
              }
            }
          },
          Developer: {
            value: "開発",
            submenu: {
              "Open In Dev Mode…": {
                value: "開発モードで開く..."
              },
              "Reload Window": {
                value: "ウィンドウの再読み込み"
              },
              "Run Package Specs": {
                value: "パッケージスペックを実行"
              },
              "Run Benchmarks": {
                value: "ベンチマークを実行"
              },
              "Toggle Developer Tools": {
                value: "デベロッパー ツール"
              }
            }
          },
          "Increase Font Size": {
            value: "フォントサイズの拡大"
          },
          "Decrease Font Size": {
            value: "フォントサイズの縮小"
          },
          "Reset Font Size": {
            value: "フォントサイズのリセット"
          },
          "Toggle Soft Wrap": {
            value: "自動折り返しの切替"
          },
          "Toggle Command Palette": {
            value: "コマンドパレット"
          },
          "Toggle Tree View": {
            value: "ツリービュー"
          }
        }
      },
      Selection: {
        value: "選択",
        submenu: {
          "Add Selection Above": {
            value: "選択範囲を広げる ↑"
          },
          "Add Selection Below": {
            value: "選択範囲を広げる ↓"
          },
          "Single Selection": {
            value: "同時操作状態を解除"
          },
          "Split into Lines": {
            value: "選択範囲を各行に分割して同時操作"
          },
          "Select to Top": {
            value: "ファイル先頭まで選択"
          },
          "Select to Bottom": {
            value: "ファイル末尾まで選択"
          },
          "Select Line": {
            value: "行を選択"
          },
          "Select Word": {
            value: "単語を選択"
          },
          "Select to Beginning of Word": {
            value: "単語の先頭まで選択"
          },
          "Select to Beginning of Line": {
            value: "行頭まで選択"
          },
          "Select to First Character of Line": {
            value: "行の最初の文字まで選択"
          },
          "Select to End of Word": {
            value: "単語の末尾まで選択"
          },
          "Select to End of Line": {
            value: "行末まで選択"
          },
          "Select Inside Brackets": {
            value: "カッコ内を選択"
          }
        }
      },
      Find: {
        value: "検索",
        submenu: {
          "Find in Buffer": {
            value: "検索..."
          },
          "Replace in Buffer": {
            value: "置換..."
          },
          "Select Next": {
            value: "次の一致も選択"
          },
          "Select All": {
            value: "一致をすべて選択"
          },
          "Toggle Find in Buffer": {
            value: "検索パネル切替"
          },
          "Find in Project": {
            value: "プロジェクト内検索..."
          },
          "Toggle Find in Project": {
            value: "プロジェクト内検索パネル切替"
          },
          "Find All": {
            value: "すべて検索"
          },
          "Find Next": {
            value: "次を検索"
          },
          "Find Previous": {
            value: "前を検索"
          },
          "Replace Next": {
            value: "次を置換"
          },
          "Replace All": {
            value: "すべて置換"
          },
          "Clear History": {
            value: "履歴をクリア"
          },
          "Find Buffer": {
            value: "バッファを検索"
          },
          "Find File": {
            value: "ファイルを検索"
          },
          "Find Modified File": {
            value: "修正されたファイルを検索"
          }
        }
      },
      Packages: {
        value: "パッケージ"
      },
      Window: {
        value: "ウインドウ",
        submenu: {
          Minimize: {
            value: "最小化"
          },
          Zoom: {
            value: "拡大／縮小"
          },
          "Bring All to Front": {
            value: "すべてを手前に移動"
          }
        }
      },
      Help: {
        value: "ヘルプ",
        submenu: {
          "Terms of Use": {
            value: "利用条件"
          },
          Documentation: {
            value: "ドキュメント"
          },
          Roadmap: {
            value: "ロードマップ"
          },
          "Frequently Asked Questions": {
            value: "よくあるご質問"
          },
          "Community Discussions": {
            value: "コミュニティ ディスカッション"
          },
          "Report Issue": {
            value: "問題の報告"
          },
          "Search Issues": {
            value: "報告されている問題"
          },
          "Welcome Guide": {
            value: "ウェルカムガイド"
          }
        }
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL3VzaGltYXJ1Ly5hdG9tL3BhY2thZ2VzL2phcGFuZXNlLW1lbnUvZGVmL21lbnVfZGFyd2luLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0lBQ2pCLElBQUEsRUFDRTtNQUFBLElBQUEsRUFDRTtRQUFBLEtBQUEsRUFBTyxNQUFQO1FBQ0EsT0FBQSxFQUNFO1VBQUEsWUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFdBQVA7V0FERjtVQUVBLGNBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxVQUFQO1dBSEY7VUFJQSxjQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sU0FBUDtXQUxGO1VBTUEsU0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFNBQVA7V0FQRjtVQVFBLGNBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxZQUFQO1dBVEY7VUFVQSxTQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sVUFBUDtXQVhGO1VBWUEsV0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFVBQVA7V0FiRjtVQWNBLGFBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxZQUFQO1dBZkY7VUFnQkEsd0JBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxnQkFBUDtXQWpCRjtVQWtCQSxXQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sVUFBUDtXQW5CRjtVQW9CQSxhQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sTUFBUDtXQXJCRjtVQXNCQSxVQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sUUFBUDtXQXZCRjtVQXdCQSxJQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sVUFBUDtXQXpCRjtTQUZGO09BREY7TUE2QkEsSUFBQSxFQUNFO1FBQUEsS0FBQSxFQUFPLE1BQVA7UUFDQSxPQUFBLEVBQ0U7VUFBQSxZQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sU0FBUDtXQURGO1VBRUEsVUFBQSxFQUNFO1lBQUEsS0FBQSxF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QUEsRUFDRTtRQUFBLEtBQUEsRUFBTyxPQUFQO1FBQ0EsT0FBQSxFQUNFO1VBQUEsUUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLEtBQVA7V0FERjtVQUVBLElBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxPQUFQO1dBSEY7VUFJQSxvQkFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFdBQVA7V0FMRjtTQUZGO09BdlNGO01BK1NBLElBQUEsRUFDRTtRQUFBLEtBQUEsRUFBTyxLQUFQO1FBQ0EsT0FBQSxFQUNFO1VBQUEsY0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLE1BQVA7V0FERjtVQUVBLGFBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxRQUFQO1dBSEY7VUFJQSxPQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sUUFBUDtXQUxGO1VBTUEsNEJBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxTQUFQO1dBUEY7VUFRQSx1QkFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLGlCQUFQO1dBVEY7VUFVQSxjQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sT0FBUDtXQVhGO1VBWUEsZUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLFdBQVA7V0FiRjtVQWNBLGVBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxVQUFQO1dBZkY7U0FGRjtPQWhURjtLQUZlOztBQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuTWVudTpcbiAgQXRvbTpcbiAgICB2YWx1ZTogXCJBdG9tXCJcbiAgICBzdWJtZW51OlxuICAgICAgXCJBYm91dCBBdG9tXCI6XG4gICAgICAgIHZhbHVlOiBcIkF0b20g44Gr44Gk44GE44GmXCJcbiAgICAgIFwiVmlldyBMaWNlbnNlXCI6XG4gICAgICAgIHZhbHVlOiBcIuODqeOCpOOCu+ODs+OCueOCkuihqOekulwiXG4gICAgICBcIlByZWZlcmVuY2Vz4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIueSsOWig+ioreWumi4uLlwiXG4gICAgICBcIkNvbmZpZ+KAplwiOlxuICAgICAgICB2YWx1ZTogXCLlgIvkurroqK3lrpouLi5cIlxuICAgICAgXCJJbml0IFNjcmlwdOKAplwiOlxuICAgICAgICB2YWx1ZTogXCLotbfli5Xjgrnjgq/jg6rjg5fjg4guLi5cIlxuICAgICAgXCJLZXltYXDigKZcIjpcbiAgICAgICAgdmFsdWU6IFwi44Kt44O844Oe44OD44OXLi4uXCJcbiAgICAgIFwiU25pcHBldHPigKZcIjpcbiAgICAgICAgdmFsdWU6IFwi44K544OL44Oa44OD44OILi4uXCJcbiAgICAgIFwiU3R5bGVzaGVldOKAplwiOlxuICAgICAgICB2YWx1ZTogXCLjgrnjgr/jgqTjg6vjgrfjg7zjg4guLi5cIlxuICAgICAgXCJJbnN0YWxsIFNoZWxsIENvbW1hbmRzXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCt+OCp+ODq+OCs+ODnuODs+ODieOCkuOCpOODs+OCueODiOODvOODq1wiXG4gICAgICBcIkhpZGUgQXRvbVwiOlxuICAgICAgICB2YWx1ZTogXCJBdG9tIOOCkumaoOOBmVwiXG4gICAgICBcIkhpZGUgT3RoZXJzXCI6XG4gICAgICAgIHZhbHVlOiBcIuS7luOCkumaoOOBmVwiXG4gICAgICBcIlNob3cgQWxsXCI6XG4gICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpuOCkuihqOekulwiXG4gICAgICBRdWl0OlxuICAgICAgICB2YWx1ZTogXCJBdG9tIOOCkue1guS6hlwiXG4gIEZpbGU6XG4gICAgdmFsdWU6IFwi44OV44Kh44Kk44OrXCJcbiAgICBzdWJtZW51OlxuICAgICAgXCJOZXcgV2luZG93XCI6XG4gICAgICAgIHZhbHVlOiBcIuaWsOimj+OCpuOCpOODs+ODieOCplwiXG4gICAgICBcIk5ldyBGaWxlXCI6XG4gICAgICAgIHZhbHVlOiBcIuaWsOimj+ODleOCoeOCpOODq1wiXG4gICAgICBcIk9wZW7igKZcIjpcbiAgICAgICAgdmFsdWU6IFwi6ZaL44GPLi4uXCJcbiAgICAgIFwiQWRkIFByb2plY3QgRm9sZGVy4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIuODl+ODreOCuOOCp+OCr+ODiOODleOCqeODq+ODgOOCkui/veWKoC4uLlwiXG4gICAgICBcIlJlb3BlbiBQcm9qZWN0XCI6XG4gICAgICAgIHZhbHVlOiBcIuODl+ODreOCuOOCp+OCr+ODiOWxpeattOOBi+OCiemWi+OBj1wiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgXCJDbGVhciBQcm9qZWN0IEhpc3RvcnlcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODl+ODreOCuOOCp+OCr+ODiOWxpeattOOCkuOCr+ODquOColwiXG4gICAgICBcIlJlb3BlbiBMYXN0IEl0ZW1cIjpcbiAgICAgICAgdmFsdWU6IFwi5pyA5b6M44Gr5L2/55So44GX44Gf44OV44Kh44Kk44Or44KS6ZaL44GPXCJcbiAgICAgIFNhdmU6XG4gICAgICAgIHZhbHVlOiBcIuS/neWtmFwiXG4gICAgICBcIlNhdmUgQXPigKZcIjpcbiAgICAgICAgdmFsdWU6IFwi5Yil5ZCN44Gn5L+d5a2YLi4uXCJcbiAgICAgIFwiU2F2ZSBBbGxcIjpcbiAgICAgICAgdmFsdWU6IFwi44GZ44G544Gm5L+d5a2YXCJcbiAgICAgIFwiQ2xvc2UgVGFiXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCv+ODluOCkumWieOBmOOCi1wiXG4gICAgICBcIkNsb3NlIFBhbmVcIjpcbiAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz44KS6ZaJ44GY44KLXCJcbiAgICAgIFwiQ2xvc2UgV2luZG93XCI6XG4gICAgICAgIHZhbHVlOiBcIuOCpuOCpOODs+ODieOCpuOCkumWieOBmOOCi1wiXG4gICAgICBcIkNsb3NlIEFsbCBUYWJzXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCv+ODluOCkuOBmeOBueOBpumWieOBmOOCi1wiXG4gIEVkaXQ6XG4gICAgdmFsdWU6IFwi57eo6ZuGXCJcbiAgICBzdWJtZW51OlxuICAgICAgVW5kbzpcbiAgICAgICAgdmFsdWU6IFwi5Y+W44KK5raI44GZXCJcbiAgICAgIFJlZG86XG4gICAgICAgIHZhbHVlOiBcIuOChOOCiuebtOOBmVwiXG4gICAgICBDdXQ6XG4gICAgICAgIHZhbHVlOiBcIuOCq+ODg+ODiFwiXG4gICAgICBDb3B5OlxuICAgICAgICB2YWx1ZTogXCLjgrPjg5Tjg7xcIlxuICAgICAgXCJDb3B5IFBhdGhcIjpcbiAgICAgICAgdmFsdWU6IFwi44OR44K544KS44Kz44OU44O8XCJcbiAgICAgIFBhc3RlOlxuICAgICAgICB2YWx1ZTogXCLjg5rjg7zjgrnjg4hcIlxuICAgICAgXCJTZWxlY3QgQWxsXCI6XG4gICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpumBuOaKnlwiXG4gICAgICBcIlRvZ2dsZSBDb21tZW50c1wiOlxuICAgICAgICB2YWx1ZTogXCLjgrPjg6Hjg7Pjg4jjga7liIfmm79cIlxuICAgICAgTGluZXM6XG4gICAgICAgIHZhbHVlOiBcIuihjFwiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgSW5kZW50OlxuICAgICAgICAgICAgdmFsdWU6IFwi44Kk44Oz44OH44Oz44OI44KS6L+95YqgXCJcbiAgICAgICAgICBPdXRkZW50OlxuICAgICAgICAgICAgdmFsdWU6IFwi44Kk44Oz44OH44Oz44OI44KS5oi744GZXCJcbiAgICAgICAgICBcIkF1dG8gSW5kZW50XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLoh6rli5XjgqTjg7Pjg4fjg7Pjg4hcIlxuICAgICAgICAgIFwiTW92ZSBMaW5lIFVwXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLpgbjmip7kuK3jga7ooYzjgpLkuIrjgavnp7vli5VcIlxuICAgICAgICAgIFwiTW92ZSBMaW5lIERvd25cIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIumBuOaKnuS4reOBruihjOOCkuS4i+OBq+enu+WLlVwiXG4gICAgICAgICAgXCJEdXBsaWNhdGUgTGluZXNcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuihjOOCkuikh+ijvVwiXG4gICAgICAgICAgXCJEZWxldGUgTGluZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi6KGM44KS5YmK6ZmkXCJcbiAgICAgICAgICBcIkpvaW4gTGluZXNcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuihjOOCkue1kOWQiFwiXG4gICAgICBDb2x1bW5zOlxuICAgICAgICB2YWx1ZTogXCLliJdcIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIFwiTW92ZSBTZWxlY3Rpb24gTGVmdFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi6YG45oqe56+E5Zuy44KS5bem44Gr56e75YuVXCJcbiAgICAgICAgICBcIk1vdmUgU2VsZWN0aW9uIFJpZ2h0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLpgbjmip7nr4Tlm7LjgpLlj7Pjgavnp7vli5VcIlxuICAgICAgVGV4dDpcbiAgICAgICAgdmFsdWU6IFwi44OG44Kt44K544OIXCJcbiAgICAgICAgc3VibWVudTpcbiAgICAgICAgICBcIlVwcGVyIENhc2VcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuWkp+aWh+Wtl+OBq+WkieaPm1wiXG4gICAgICAgICAgXCJMb3dlciBDYXNlXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLlsI/mloflrZfjgavlpInmj5tcIlxuICAgICAgICAgIFwiRGVsZXRlIHRvIEVuZCBvZiBXb3JkXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLljZjoqp7jga7mnKvlsL7jgb7jgafliYrpmaRcIlxuICAgICAgICAgIFwiRGVsZXRlIHRvIFByZXZpb3VzIFdvcmQgQm91bmRhcnlcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuWJjeOBruWNmOiqnuOBruWig+eVjOOBvuOBp+WJiumZpFwiXG4gICAgICAgICAgXCJEZWxldGUgdG8gTmV4dCBXb3JkIEJvdW5kYXJ5XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLmrKHjga7ljZjoqp7jga7looPnlYzjgb7jgafliYrpmaRcIlxuICAgICAgICAgIFwiRGVsZXRlIExpbmVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuihjOOCkuWJiumZpFwiXG4gICAgICAgICAgVHJhbnNwb3NlOlxuICAgICAgICAgICAgdmFsdWU6IFwi5YmN5b6M44KS5YWl44KM5pu/44GIXCJcbiAgICAgIEZvbGRpbmc6XG4gICAgICAgIHZhbHVlOiBcIuaKmOOCiuOBn+OBn+OBv1wiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgRm9sZDpcbiAgICAgICAgICAgIHZhbHVlOiBcIuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICAgICAgVW5mb2xkOlxuICAgICAgICAgICAgdmFsdWU6IFwi5oqY44KK44Gf44Gf44G/44KS5oi744GZXCJcbiAgICAgICAgICBcIlVuZm9sZCBBbGxcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpuOBruaKmOOCiuOBn+OBn+OBv+OCkuaIu+OBmVwiXG4gICAgICAgICAgXCJGb2xkIEFsbFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44GZ44G544Gm5oqY44KK44Gf44Gf44KAXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgMVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiMeautemajuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDJcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIjLmrrXpmo7mipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCAzXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCIz5q616ZqO5oqY44KK44Gf44Gf44KAXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgNFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiNOautemajuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIjXmrrXpmo7mipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCA2XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCI25q616ZqO5oqY44KK44Gf44Gf44KAXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgN1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwiN+autemajuaKmOOCiuOBn+OBn+OCgFwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDhcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIjjmrrXpmo7mipjjgorjgZ/jgZ/jgoBcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCA5XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCI55q616ZqO5oqY44KK44Gf44Gf44KAXCJcbiAgICAgIFwiUmVmbG93IFNlbGVjdGlvblwiOlxuICAgICAgICB2YWx1ZTogXCLpgbjmip7nr4Tlm7LjgpLjg6rjg5Xjg63jg7xcIlxuICAgICAgQm9va21hcms6XG4gICAgICAgIHZhbHVlOiBcIuODluODg+OCr+ODnuODvOOCr1wiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgXCJWaWV3IEFsbFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44GZ44G544Gm6KGo56S6XCJcbiAgICAgICAgICBcIlRvZ2dsZSBCb29rbWFya1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44OW44OD44Kv44Oe44O844Kv44Gu5YiH5pu/XCJcbiAgICAgICAgICBcIkp1bXAgdG8gTmV4dCBCb29rbWFya1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwi5qyh44Gu44OW44OD44Kv44Oe44O844Kv44G4XCJcbiAgICAgICAgICBcIkp1bXAgdG8gUHJldmlvdXMgQm9va21hcmtcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuWJjeOBruODluODg+OCr+ODnuODvOOCr+OBuFwiXG4gICAgICBcIlNlbGVjdCBFbmNvZGluZ1wiOlxuICAgICAgICB2YWx1ZTogXCLjgqjjg7PjgrPjg7zjg4fjgqPjg7PjgrDpgbjmip5cIlxuICAgICAgXCJHbyB0byBMaW5lXCI6XG4gICAgICAgIHZhbHVlOiBcIuaMh+WumuihjOOBq+enu+WLlVwiXG4gICAgICBcIlNlbGVjdCBHcmFtbWFyXCI6XG4gICAgICAgIHZhbHVlOiBcIuaWh+azleOCkumBuOaKnlwiXG4gIFZpZXc6XG4gICAgdmFsdWU6IFwi6KGo56S6XCJcbiAgICBzdWJtZW51OlxuICAgICAgXCJUb2dnbGUgRnVsbCBTY3JlZW5cIjpcbiAgICAgICAgdmFsdWU6IFwi44OV44Or44K544Kv44Oq44O844Oz5YiH5pu/XCJcbiAgICAgIFBhbmVzOlxuICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7NcIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIFwiU3BsaXQgVXBcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+WIhuWJsiDihpFcIlxuICAgICAgICAgIFwiU3BsaXQgRG93blwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz5YiG5YmyIOKGk1wiXG4gICAgICAgICAgXCJTcGxpdCBMZWZ0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7PliIblibIg4oaQXCJcbiAgICAgICAgICBcIlNwbGl0IFJpZ2h0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7PliIblibIg4oaSXCJcbiAgICAgICAgICBcIkZvY3VzIE5leHQgUGFuZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi5qyh44Gu44Oa44Kk44Oz44Gr44OV44Kp44O844Kr44K5XCJcbiAgICAgICAgICBcIkZvY3VzIFByZXZpb3VzIFBhbmVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuWJjeOBruODmuOCpOODs+OBq+ODleOCqeODvOOCq+OCuVwiXG4gICAgICAgICAgXCJGb2N1cyBQYW5lIEFib3ZlXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7Pjgavjg5Xjgqnjg7zjgqvjgrkg4oaRXCJcbiAgICAgICAgICBcIkZvY3VzIFBhbmUgQmVsb3dcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+OBq+ODleOCqeODvOOCq+OCuSDihpNcIlxuICAgICAgICAgIFwiRm9jdXMgUGFuZSBPbiBMZWZ0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjg5rjgqTjg7Pjgavjg5Xjgqnjg7zjgqvjgrkg4oaQXCJcbiAgICAgICAgICBcIkZvY3VzIFBhbmUgT24gUmlnaHRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODmuOCpOODs+OBq+ODleOCqeODvOOCq+OCuSDihpJcIlxuICAgICAgICAgIFwiQ2xvc2UgUGFuZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44Oa44Kk44Oz44KS6ZaJ44GY44KLXCJcbiAgICAgIERldmVsb3BlcjpcbiAgICAgICAgdmFsdWU6IFwi6ZaL55m6XCJcbiAgICAgICAgc3VibWVudTpcbiAgICAgICAgICBcIk9wZW4gSW4gRGV2IE1vZGXigKZcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIumWi+eZuuODouODvOODieOBp+mWi+OBjy4uLlwiXG4gICAgICAgICAgXCJSZWxvYWQgV2luZG93XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCLjgqbjgqPjg7Pjg4njgqbjga7lho3oqq3jgb/ovrzjgb9cIlxuICAgICAgICAgIFwiUnVuIFBhY2thZ2UgU3BlY3NcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODkeODg+OCseODvOOCuOOCueODmuODg+OCr+OCkuWun+ihjFwiXG4gICAgICAgICAgXCJSdW4gQmVuY2htYXJrc1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwi44OZ44Oz44OB44Oe44O844Kv44KS5a6f6KGMXCJcbiAgICAgICAgICBcIlRvZ2dsZSBEZXZlbG9wZXIgVG9vbHNcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIuODh+ODmeODreODg+ODkeODvCDjg4Tjg7zjg6tcIlxuICAgICAgXCJJbmNyZWFzZSBGb250IFNpemVcIjpcbiAgICAgICAgdmFsdWU6IFwi44OV44Kp44Oz44OI44K144Kk44K644Gu5ouh5aSnXCJcbiAgICAgIFwiRGVjcmVhc2UgRm9udCBTaXplXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleOCqeODs+ODiOOCteOCpOOCuuOBrue4ruWwj1wiXG4gICAgICBcIlJlc2V0IEZvbnQgU2l6ZVwiOlxuICAgICAgICB2YWx1ZTogXCLjg5Xjgqnjg7Pjg4jjgrXjgqTjgrrjga7jg6rjgrvjg4Pjg4hcIlxuICAgICAgXCJUb2dnbGUgU29mdCBXcmFwXCI6XG4gICAgICAgIHZhbHVlOiBcIuiHquWLleaKmOOCiui/lOOBl+OBruWIh+abv1wiXG4gICAgICBcIlRvZ2dsZSBDb21tYW5kIFBhbGV0dGVcIjpcbiAgICAgICAgdmFsdWU6IFwi44Kz44Oe44Oz44OJ44OR44Os44OD44OIXCJcbiAgICAgIFwiVG9nZ2xlIFRyZWUgVmlld1wiOlxuICAgICAgICB2YWx1ZTogXCLjg4Tjg6rjg7zjg5Pjg6Xjg7xcIlxuICBTZWxlY3Rpb246XG4gICAgdmFsdWU6IFwi6YG45oqeXCJcbiAgICBzdWJtZW51OlxuICAgICAgXCJBZGQgU2VsZWN0aW9uIEFib3ZlXCI6XG4gICAgICAgIHZhbHVlOiBcIumBuOaKnuevhOWbsuOCkuW6g+OBkuOCiyDihpFcIlxuICAgICAgXCJBZGQgU2VsZWN0aW9uIEJlbG93XCI6XG4gICAgICAgIHZhbHVlOiBcIumBuOaKnuevhOWbsuOCkuW6g+OBkuOCiyDihpNcIlxuICAgICAgXCJTaW5nbGUgU2VsZWN0aW9uXCI6XG4gICAgICAgIHZhbHVlOiBcIuWQjOaZguaTjeS9nOeKtuaFi+OCkuino+mZpFwiXG4gICAgICBcIlNwbGl0IGludG8gTGluZXNcIjpcbiAgICAgICAgdmFsdWU6IFwi6YG45oqe56+E5Zuy44KS5ZCE6KGM44Gr5YiG5Ymy44GX44Gm5ZCM5pmC5pON5L2cXCJcbiAgICAgIFwiU2VsZWN0IHRvIFRvcFwiOlxuICAgICAgICB2YWx1ZTogXCLjg5XjgqHjgqTjg6vlhYjpoK3jgb7jgafpgbjmip5cIlxuICAgICAgXCJTZWxlY3QgdG8gQm90dG9tXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleOCoeOCpOODq+acq+WwvuOBvuOBp+mBuOaKnlwiXG4gICAgICBcIlNlbGVjdCBMaW5lXCI6XG4gICAgICAgIHZhbHVlOiBcIuihjOOCkumBuOaKnlwiXG4gICAgICBcIlNlbGVjdCBXb3JkXCI6XG4gICAgICAgIHZhbHVlOiBcIuWNmOiqnuOCkumBuOaKnlwiXG4gICAgICBcIlNlbGVjdCB0byBCZWdpbm5pbmcgb2YgV29yZFwiOlxuICAgICAgICB2YWx1ZTogXCLljZjoqp7jga7lhYjpoK3jgb7jgafpgbjmip5cIlxuICAgICAgXCJTZWxlY3QgdG8gQmVnaW5uaW5nIG9mIExpbmVcIjpcbiAgICAgICAgdmFsdWU6IFwi6KGM6aCt44G+44Gn6YG45oqeXCJcbiAgICAgIFwiU2VsZWN0IHRvIEZpcnN0IENoYXJhY3RlciBvZiBMaW5lXCI6XG4gICAgICAgIHZhbHVlOiBcIuihjOOBruacgOWIneOBruaWh+Wtl+OBvuOBp+mBuOaKnlwiXG4gICAgICBcIlNlbGVjdCB0byBFbmQgb2YgV29yZFwiOlxuICAgICAgICB2YWx1ZTogXCLljZjoqp7jga7mnKvlsL7jgb7jgafpgbjmip5cIlxuICAgICAgXCJTZWxlY3QgdG8gRW5kIG9mIExpbmVcIjpcbiAgICAgICAgdmFsdWU6IFwi6KGM5pyr44G+44Gn6YG45oqeXCJcbiAgICAgIFwiU2VsZWN0IEluc2lkZSBCcmFja2V0c1wiOlxuICAgICAgICB2YWx1ZTogXCLjgqvjg4PjgrPlhoXjgpLpgbjmip5cIlxuICBGaW5kOlxuICAgIHZhbHVlOiBcIuaknOe0olwiXG4gICAgc3VibWVudTpcbiAgICAgIFwiRmluZCBpbiBCdWZmZXJcIjpcbiAgICAgICAgdmFsdWU6IFwi5qSc57SiLi4uXCJcbiAgICAgIFwiUmVwbGFjZSBpbiBCdWZmZXJcIjpcbiAgICAgICAgdmFsdWU6IFwi572u5o+bLi4uXCJcbiAgICAgIFwiU2VsZWN0IE5leHRcIjpcbiAgICAgICAgdmFsdWU6IFwi5qyh44Gu5LiA6Ie044KC6YG45oqeXCJcbiAgICAgIFwiU2VsZWN0IEFsbFwiOlxuICAgICAgICB2YWx1ZTogXCLkuIDoh7TjgpLjgZnjgbnjgabpgbjmip5cIlxuICAgICAgXCJUb2dnbGUgRmluZCBpbiBCdWZmZXJcIjpcbiAgICAgICAgdmFsdWU6IFwi5qSc57Si44OR44ON44Or5YiH5pu/XCJcbiAgICAgIFwiRmluZCBpbiBQcm9qZWN0XCI6XG4gICAgICAgIHZhbHVlOiBcIuODl+ODreOCuOOCp+OCr+ODiOWGheaknOe0oi4uLlwiXG4gICAgICBcIlRvZ2dsZSBGaW5kIGluIFByb2plY3RcIjpcbiAgICAgICAgdmFsdWU6IFwi44OX44Ot44K444Kn44Kv44OI5YaF5qSc57Si44OR44ON44Or5YiH5pu/XCJcbiAgICAgIFwiRmluZCBBbGxcIjpcbiAgICAgICAgdmFsdWU6IFwi44GZ44G544Gm5qSc57SiXCJcbiAgICAgIFwiRmluZCBOZXh0XCI6XG4gICAgICAgIHZhbHVlOiBcIuasoeOCkuaknOe0olwiXG4gICAgICBcIkZpbmQgUHJldmlvdXNcIjpcbiAgICAgICAgdmFsdWU6IFwi5YmN44KS5qSc57SiXCJcbiAgICAgIFwiUmVwbGFjZSBOZXh0XCI6XG4gICAgICAgIHZhbHVlOiBcIuasoeOCkue9ruaPm1wiXG4gICAgICBcIlJlcGxhY2UgQWxsXCI6XG4gICAgICAgIHZhbHVlOiBcIuOBmeOBueOBpue9ruaPm1wiXG4gICAgICBcIkNsZWFyIEhpc3RvcnlcIjpcbiAgICAgICAgdmFsdWU6IFwi5bGl5q2044KS44Kv44Oq44KiXCJcbiAgICAgIFwiRmluZCBCdWZmZXJcIjpcbiAgICAgICAgdmFsdWU6IFwi44OQ44OD44OV44Kh44KS5qSc57SiXCJcbiAgICAgIFwiRmluZCBGaWxlXCI6XG4gICAgICAgIHZhbHVlOiBcIuODleOCoeOCpOODq+OCkuaknOe0olwiXG4gICAgICBcIkZpbmQgTW9kaWZpZWQgRmlsZVwiOlxuICAgICAgICB2YWx1ZTogXCLkv67mraPjgZXjgozjgZ/jg5XjgqHjgqTjg6vjgpLmpJzntKJcIlxuICBQYWNrYWdlczpcbiAgICB2YWx1ZTogXCLjg5Hjg4PjgrHjg7zjgrhcIlxuICBXaW5kb3c6XG4gICAgdmFsdWU6IFwi44Km44Kk44Oz44OJ44KmXCJcbiAgICBzdWJtZW51OlxuICAgICAgTWluaW1pemU6XG4gICAgICAgIHZhbHVlOiBcIuacgOWwj+WMllwiXG4gICAgICBab29tOlxuICAgICAgICB2YWx1ZTogXCLmi6HlpKfvvI/nuK7lsI9cIlxuICAgICAgXCJCcmluZyBBbGwgdG8gRnJvbnRcIjpcbiAgICAgICAgdmFsdWU6IFwi44GZ44G544Gm44KS5omL5YmN44Gr56e75YuVXCJcbiAgSGVscDpcbiAgICB2YWx1ZTogXCLjg5jjg6vjg5dcIlxuICAgIHN1Ym1lbnU6XG4gICAgICBcIlRlcm1zIG9mIFVzZVwiOlxuICAgICAgICB2YWx1ZTogXCLliKnnlKjmnaHku7ZcIlxuICAgICAgRG9jdW1lbnRhdGlvbjpcbiAgICAgICAgdmFsdWU6IFwi44OJ44Kt44Ol44Oh44Oz44OIXCJcbiAgICAgIFJvYWRtYXA6XG4gICAgICAgIHZhbHVlOiBcIuODreODvOODieODnuODg+ODl1wiXG4gICAgICBcIkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zXCI6XG4gICAgICAgIHZhbHVlOiBcIuOCiOOBj+OBguOCi+OBlOizquWVj1wiXG4gICAgICBcIkNvbW11bml0eSBEaXNjdXNzaW9uc1wiOlxuICAgICAgICB2YWx1ZTogXCLjgrPjg5/jg6Xjg4vjg4bjgqMg44OH44Kj44K544Kr44OD44K344On44OzXCJcbiAgICAgIFwiUmVwb3J0IElzc3VlXCI6XG4gICAgICAgIHZhbHVlOiBcIuWVj+mhjOOBruWgseWRilwiXG4gICAgICBcIlNlYXJjaCBJc3N1ZXNcIjpcbiAgICAgICAgdmFsdWU6IFwi5aCx5ZGK44GV44KM44Gm44GE44KL5ZWP6aGMXCJcbiAgICAgIFwiV2VsY29tZSBHdWlkZVwiOlxuICAgICAgICB2YWx1ZTogXCLjgqbjgqfjg6vjgqvjg6DjgqzjgqTjg4lcIlxufVxuIl19
