Get-ChildItem -Path "src" -Recurse -Include "*.tsx","*.ts","*.css" | ForEach-Object {
  $content = Get-Content $_.FullName -Raw
  if ($content -match "#c1a648") {
    $fixed = $content -replace "#c1a648", "#04AA6D"
    Set-Content $_.FullName $fixed -NoNewline
    Write-Host "Fixed: $($_.Name)"
  }
}
Write-Host "Done replacing golden color with green."
