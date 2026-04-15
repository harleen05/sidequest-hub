$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
Set-Location 'C:\Users\roshn\OneDrive\Desktop\Sourcery_ACM\sidequest-hub'
Remove-Item -LiteralPath '.\node_modules\esbuild' -Recurse -Force -ErrorAction SilentlyContinue
& 'C:\Program Files\nodejs\npm.cmd' install
