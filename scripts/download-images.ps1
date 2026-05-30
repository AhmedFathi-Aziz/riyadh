# صور HD من Pexels/Unsplash — بدون شعارات أو نصوص مدمجة على الصورة
# شغّل: powershell -ExecutionPolicy Bypass -File scripts/download-images.ps1
$ErrorActionPreference = "Stop"
$outDir = Join-Path $PSScriptRoot "..\public\images"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

function Get-PexelsUrl($id, $width) {
  "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=$width&dpr=1"
}

function Get-UnsplashUrl($id, $width) {
  "https://images.unsplash.com/$id?w=$width&q=85&auto=format"
}

$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

# ملف => رابط (مشاهد مرتبطة بالخدمة، بدون علامات تجارية ظاهرة على الصورة)
$downloads = @{
  "hero.jpg" = Get-UnsplashUrl "photo-1621905251189-08b45d6a269e" 1920
  "services-roof.jpg" = Get-PexelsUrl 8853502 1920
  "logo.jpg" = Get-PexelsUrl 323780 512
  "service-leak-detection.jpg" = Get-PexelsUrl 442150 1200
  "service-tank.jpg" = Get-PexelsUrl 6476125 1200
  "service-roof.jpg" = Get-PexelsUrl 8853502 1200
  "service-bathroom.jpg" = Get-PexelsUrl 1457847 1200
  "service-restoration.jpg" = Get-PexelsUrl 323780 1200
  "insulation-hero.jpg" = Get-PexelsUrl 1267338 1920
  "insulation-water.jpg" = Get-PexelsUrl 209296 1200
  "insulation-thermal.jpg" = Get-PexelsUrl 259588 1200
  "portfolio-villa.jpg" = Get-PexelsUrl 323780 1200
  "portfolio-commercial.jpg" = Get-PexelsUrl 5474292 1200
  "portfolio-tank.jpg" = Get-PexelsUrl 6476125 1200
  "blog-roof-waterproofing.jpg" = Get-PexelsUrl 8853502 1280
  "blog-leak-detection.jpg" = Get-PexelsUrl 442150 1280
  "blog-warehouse-foam.jpg" = Get-PexelsUrl 1267338 1280
  "blog-roof-maintenance.jpg" = Get-PexelsUrl 8853502 1280
  "blog-tank-leak.jpg" = Get-PexelsUrl 6476125 1280
  "blog-epoxy-coating.jpg" = Get-PexelsUrl 323780 1280
  "blog-bathroom.jpg" = Get-PexelsUrl 1457847 1280
  "blog-thermal-roof.jpg" = Get-PexelsUrl 259588 1280
  "blog-roof-inspection.jpg" = Get-PexelsUrl 8853502 1280
  "blog-ac-leak.jpg" = Get-PexelsUrl 442150 1280
  "blog-warranty.jpg" = Get-PexelsUrl 1105766 1280
}

foreach ($entry in $downloads.GetEnumerator()) {
  $dest = Join-Path $outDir $entry.Key
  Write-Host "Downloading $($entry.Key)..."
  curl.exe -fsSL -A $ua $entry.Value -o $dest
  if ($LASTEXITCODE -ne 0) { throw "Failed: $($entry.Key)" }
}

# تنظيف ملفات تجريبية قديمة
@("probe.jpg", "probe=w1920.jpg", "probe=s0.jpg", "probe=w1920-rw.jpg", "test-default.jpg", "test-s0.jpg") | ForEach-Object {
  $p = Join-Path $outDir $_
  if (Test-Path $p) { Remove-Item $p -Force }
}

Write-Host "Done. $($downloads.Count) HD images in $outDir"
