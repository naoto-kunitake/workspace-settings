# PowerShellに既に入っているが、自作コマンドと衝突する名前のコマンドをremoveしておきます
# removeするコマンドたちはいずれも使用頻度低いと思われるので問題ないです
Remove-Item alias:gl -Force # Get-Location
Remove-Item alias:gc -Force # Get-Content
Remove-Item alias:gps -Force # Get-Process
Remove-Item alias:gm -Force # Get-Member

# gitのコマンドを短いタイプで打てるようにします
function gs { git status }
function gl { git log --oneline $args }
function ga { git add $args }
function gb { git branch $args }
function gc { git commit $args }
function gd { git diff $args }
function gm { git merge $args }
function gr { git reset $args }
function gs { git status }
function gcl { git clone $args }
function gco { git checkout $args }
function gst { git stash $args }
function gpl { git pull $args }
function gps { git push $args }

# yarn
function ya { yarn add $args }
function yb { yarn build $args }
function yd { yarn dev $args }
function yds { yarn dev:sample $args }
function yg { yarn global $args }
function yga { yarn global add $args }
function ygr { yarn global remove $args }
function ygu { yarn global upgrade $args }
function yi { yarn install $args }
function yl { yarn lint $args }
function yr { yarn remove $args }
function ys { yarn serve $args }

# utils
function py { python $args }
function ex { explorer $args }
function q { exit }
function ln-s($from, $to) {
  $index = $to.lastIndexOf('/')
  if ($index -eq -1) {
    $toDir = './'
    $toName = $to
  } else {
    $toDir = $to.remove($index)
    $toName = $to.substring($index + 1)
  }
  New-Item -Value $from -Path $toDir -Name $toName -ItemType SymbolicLink
}
