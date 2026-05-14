# Remove all files under public/build to force a clean rebuild
$buildDir = Join-Path $PSScriptRoot '..\public\build'
if (-Not (Test-Path $buildDir)) {
    Write-Host "Build directory not found: $buildDir"
    exit 0
}

Write-Host "Removing files in $buildDir..."
Get-ChildItem -Path $buildDir -Recurse -Force | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue

# Ensure directory exists
if (-Not (Test-Path $buildDir)) {
    New-Item -ItemType Directory -Path $buildDir | Out-Null
}

Write-Host "Done. You can now run 'npm run dev' or 'npm run build' to regenerate assets."
