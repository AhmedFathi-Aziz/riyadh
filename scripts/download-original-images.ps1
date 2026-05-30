# تحميل الصور الأصلية من التصميم (Google CDN) → public/images
$ErrorActionPreference = "Stop"
$outDir = Join-Path $PSScriptRoot "..\public\images"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$sourcesTs = Get-Content (Join-Path $PSScriptRoot "..\src\lib\media\original-sources.ts") -Raw
$urls = [ordered]@{}

function Add-Url($file, $url) {
  if ($urls.Contains($file)) { return }
  $urls[$file] = $url
}

# استخراج أزواج file + url من الملف
[regex]::Matches($sourcesTs, 'file:\s*"([^"]+)"[\s\S]*?url:\s*"([^"]+)"') | ForEach-Object {
  Add-Url $_.Groups[1].Value $_.Groups[2].Value
}
[regex]::Matches($sourcesTs, 'url:\s*(originalImageSources\.\w+)\.url') | ForEach-Object {
  # تُعالج عبر المطابقة اليدوية أدناه إن لزم
}

# روابط مباشرة (مصدر الحقيقة)
$entries = @{
  "logo.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuA6jtvHY_H7Li3uRoKKfn_gIlW84dHC6MZgicjfcA7B4ZAdEYyAiknk-cV33nXbW_xZ463Zk_EAcPBuRYQSU-nnPT2KO6CgBB2z7Yv2OctcfFsdwkApuzmKqED8oV_m_QoekZ3wztp29rwsueVLuvEoOUQ6iOGBfl8ay05CupLl2qjifzMgQ7BMs2lHRnQcdQQyOtHGIqVSGnukQO8ah3y0I5gMAjuJltu3CI7lQ5NdnPuWL-HWqYtjVstoOEwspKGNrhRlUvkEVaQ"
  "hero.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJY72ukr1uaoN-yX5-fpHu6cFB4FIIV_e59wSE7sLqK1m26IaGQWrtfimQ3iEsZTPi5A6A81J-Z4sZaPu0y8o6RAMSiZhiSjw6kyWyWhJkPezr9S1bPl4x4OqegyLGxeiCdkWJ4mYf0pTklohkDt20SBXMBDhreCJ2hOnay91e8lEBMmHX_40uPt_KuZqMFPRYgrj6zWhyFV2b6DQYeTP_0_oUm-lbYptmFXWdermW9hrEW3_J_cnU2KWi3Cwwm3RU_ydghMIim0Q"
  "services-roof.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuCNfZ7b9eTYIxyro2plbQOh5DKNH1DbgoGAZxbMz7kMH8z4nB4uKoDrThpIuGxTHO3JbLWMm3u6BChKfEjJ7-L-72X8KksWWO0xAC_mJMDLZswaGt5tnn1zEeOsJbJf8JkQq4dF7lG7kXEHsEiWnTUMbnS8BWb1H4Yrh5IxTW_Ash3pocfBeJRXcpWelNsVIqs0peM3HKJTNIY_CtZQnpx65j-PsomTI6ANTopAxe80lxS9-8q2ihd-Kmrs7UR80tRxKXjP7iUfdE4"
  "service-leak-detection.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuD1_WxtqzBGqKgFNO_21kKKjDv27hbdpR-PtpUP1k6Xq07bJZiQfpJxNgI3ATRcYNTPBCAsAhPZoMAgruUWfb9Q1wGtZ7OKjRuaSdPHbqI0U-n_vAxP3GBgaNJXVcGgGn79kIU2bbc73NkhbW1UL0OilN5bKLEIu91TJCfob-NEgMKCfx3qeyW-HWt--hloY-eB1ykEjo87VB0hLd4lknRClxksN8jQL47Tap1HAjdmDXWp-9V-evJ9L7pRcTj9EGQfWZ3DkuaAmGs"
  "service-tank.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuDNzIlu0VFEd9frK9ZAV4kw5C0FRGjmniCX3At-Fz9__hDqR_SEQOM7Ir73Cm-xWUlV-6jVBOtKly4dypLw72Mb3hz4a9yEiKFW1We6BY_3LxDhBNlTYqdWlHo9bHqMz4DP46Jx9xK3k73Vq_u6yUyRpUMRpQ-TEuIiWw_79iC8wJGZ0dpRd5S-WBoroOJsyThnfRlDd2DIQ2UYFPy979kLby00rZYrUzoL7ktF7ltQmiw4lwWveWmb9ctjvw6c6MaEinJvD42OUFE"
  "service-roof.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuAzXoU9pI2jJ28IAP504HEqQH4GnT-tS_TidxR59-Y9p9DsR3z6MkBtIO90eQ3brtEHEYfIx3k1NuYYhTjkPVoMesgDsYtCIGg8YO6pQM_0b1aeF0FXXvY8DJ_QY-oUTNWsASAyyytB4CW0DjuGOiIJhPh4lxcetV__JQD6KTSWuZAaBPcTxISqp12xMJuPQjocYzZHl1xnuODlCorP3Vt92jUJ_zB0T5fqGutVnlbLCAJpStDHTMblowVVeBevxnNKpewrRvFZI6Y"
  "service-bathroom.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuDQqaXnb0fBEucTS-4HY2XKE9zAx1xyaOOCAU1p36moeOm9Gkmevl_MpuoKIVh5lAjELToZO9oXZM9LvEmFrKjHt0FKDpbJ0TQlgjDIaobxUVK5uEcJhym-jOVEWElvY3vYTxJuUkZBeVPyc2JQ_EFLTVZm16s4HJw4ZzfQCecPQPVQkkyIg2mTQbGxDxL-eJdu4c1YcTU8dmk-VXfxdO3drhkbU5XZQsC67tlTPvVUWYKA4FNh4jROoXQEAkmBClaQ9ErY2vsS4y8"
  "service-restoration.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuASM1Xc26v5q--4F0QbjEyX1flLr0bnxB1S0qYxPLm7M1Z-UGh99DmIJ1JT1tvKyGtCj3WbNkNY9rq4878KCmPbAx7rXyCnJu28RctPi2RFHdlqDfWAM1DQFNRYgqDLLJDlRyQLJxcI2kgrXoXCFFmIC35k1yslWbFrfqWVEHXFi_ehon2FJip1MlD8ONjIbnO3WRWasctkqfitj-X1QDi6KITstOI6EIELH45NNQVT66A_wKsBmIL4a9oGMu5gtJ8OQL49yAb9wa4"
  "insulation-hero.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuAG2KNnjGSr47YO2OEYDfdi_DPF42ZVcBs7uUJQHCX9Qty7mfZz03Cdh6yEIvEQDYXDjzn3-S78sPgPWcm_iWl7u1K3taxRUSnVnyPSF-K8k4FBroayVwKf-Xs8se52WSgwWnLdkAezR5x3XwTdRJdrjIcCxX5ogKab9Y8kHkPgItH08u4SKINKi_VLv4BR7B3otrPRpNvUUlzcHzo02KQfYgH7jp5V-UACdJyRphBQhJN6wvNlKR5IFhT3plO6hoa8pnOgSiigWt4"
  "insulation-water.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuC6OIZZVra55QNkHxSdBjiiwmuQKazUPLt6seJPRm6QKtOBO24aapnarQzImVH6pI0-drhl9kIHIEnq-T2ZPSvmz5z8_T6Ju6xs_DXwL89CvoHvNpN9sHpjySyQ5USmf4WSiiu4XQl3zTnHab2EvJP9-39zf9Q_A49aNHBw5y-Hq8hkTkpX4Wpj3PJqloQ2LJspKPMTtAGyAjciOtkAHueNSRFvs8zf2qeLhTwuogXkgsR9RZfu6kEaWi1Jodq4G4jo84K_OLh_SJA"
  "insulation-thermal.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuBDQNbYOxVHK6NJJE5Rte3ZxfDh87oYNsxPemWtVTeV5sSGdY-x218_tq7B-qla8LSg7vVAiTl68qJEfOfbBa-n1IAfoNkST2qOJ0ECu0ybZVUrEhh3XROj6zBGQeR8U1IsTFH-JOChwhVFgHP836JcghD2Qwo-PpHyZebzzOFHYr98FZC6dYjD5W-elWQcXUBFDnA9SUNFP_6AikhQldK-M3V_2wcYVy0Afx2oKmUfQY53ypNWxKQXPFqxqlRETUom3inyg3GJDDE"
  "portfolio-villa.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuCy0Kqnza_JwFhBYVhtLk4l_DuTMhEp8L0aic8V9EVKwqHpVYaMsobfbKDw68_hl1xf3nnsdUOowL46k3Uc_pSnkIfqaMXHsOGDFeSZJq3drR7AkHlrYtXaS8DI5Ex0jLVqCupXh_HOTrXZSGKAYQldtrMAVRcwcLVk-NEoDS1jjWhJVRDGAfAGfzfEJ4gxuooF91QTD8aQrVTY4qp7DciWT9_T39GQ0Y05Eb-OLELCH5IuQKmsgmPVeDIhZIMbr9Kf9nRB8y84djQ"
  "portfolio-commercial.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuDdve_JmO5rmaaPEjqpA1Ws5-vT8a_2f3kaRVsHzbWw0J2V0hZW0och-t6JHlxXLR-zky69Eo-i3jpadf-0pEb1VHWN198F8M4dyhbLer9aUVsBh1INP8S0NV0m5jVonx4weeLA2Y0KtK19oSJHyhjc4OiSIqdwUeNnaiE_MQZUx5ldPNzzTUQthFATDYAifY81D3ei7BBNnkDIYWSxMiCH6xEHj4k5pSgdjMjmU7nNArt9byx8qyJKPcq-QZIAb4X1hDWaVB7wEic"
  "portfolio-tank.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuBgW2m4ScpQc86z1mzGxW_ApsJ4rGncJTs8S9vUxqhbOGxlaGrOBXAKH_2OTjmzIsqpF5GFLVSFS2BwJNJxah9iagfd7FT3kEqYGQY0RYjNDm7gckDq3V4x2WW07seHZt8MgByVqq3Re2PrZDuZDwm8mINvGzUOWIc4BV65PKD_d2VH2fmvC3iDlZphegyhOIiLnlpB--XDRajXA9NZhKQCjKdiROmgC3ODnXukYMLtzAoaIymQ2emEfHkfOeiDurWK8q71c1UFF5Y"
  "blog-roof-waterproofing.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuCAn22hS28pAG1U2hmqpTMI12HTjqqpmhgEbiSlk-2Rpqa4gRDUNgj-sME0H4iG4OV-DlBnKV2M624gkSAruCGGB114MA2vXgXnVrDnMTnJvZVI8UevJLPLSuYUf1wsrd3xN3e0JrO03mOrAbUghSLe8nz38z8fb0ioHPYACXGOnunwmohiTpKB2RGYsMIN2n6hcCaurIYbf2b9aZA7ceQKw97wuuWF4KuXrGgs-gEvaxnsyCTpXwK5WqSjdkaGicnDi0FyYIYVGhg"
  "blog-roof-maintenance.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuDUzdngGw3bLaGqP6TPhAlUoOFNz4QYqwC1m73uURUnn1Cd2LMFFKXzr2xzd8CN05DCvgon5XfxyRdKXd11kmGd-kENb-dhSXkn7fILRNr_v3Dqr9FpD2na4LLV5haf2FE2d4DEGlmtAQAhWLtQAS9173ju-yIS3KofmTBBt3MetVY-dQF7-iee3krVH_GwAF_1aHkr1X3FBp27Njhe5iit1k2olYgG3eWLx8NcvIfVYaTn-uw5UaswcgibQ251bCRDXZLUGlF_8N8"
  "blog-tank-leak.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuAKTY5AmrQ6wHtZwKNpAvEeBNDVDGzpptC-gpXZaKLflFnhqNp6cfaL7wSiJxocELMEbmZmO-_Fm5ZdZwOFjjwxvl51A3NASiYOBvREmBEyCfCkSWRsAMRWunDYlRxdS3MzYrVWplviJuKlY_4KtmObWEKAX8jCUJLo3pqm1R1pOrazsGUGKPJXNp4KsE1EtTkmJsWcq575ccW5jMJW6aZZf1BVZRh0craCAiA-Mw1o7jcUX5blXMQTLdYyZc7BFmQWgSOJ16XfIYY"
  "blog-epoxy-coating.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuCi65AgHBVvvF-BYst9XOzV3tPHyqmmQgIfzXz-nwmHF2gLF0865KEl2F7_Ds_n35FASs1AucJNXXEXrYX_p6Agsv3vBh_nP99s85nrNXXCQMxnx9J7xpT1ZOhP6NM-qGMn4PCmvL42AV3D34_TrXPvZAf4CiRf20Sd9EybkaxDbSAe7Ew0BuRIJDjudBlLcMXjQs6-FVkKNx-k4f9cOgj73zWDdkGRbZpctbETUD8sKsye7xYWNyeOQe6_R3CSTrJHG7mr3xBBvkg"
  "blog-bathroom.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuDQqaXnb0fBEucTS-4HY2XKE9zAx1xyaOOCAU1p36moeOm9Gkmevl_MpuoKIVh5lAjELToZO9oXZM9LvEmFrKjHt0FKDpbJ0TQlgjDIaobxUVK5uEcJhym-jOVEWElvY3vYTxJuUkZBeVPyc2JQ_EFLTVZm16s4HJw4ZzfQCecPQPVQkkyIg2mTQbGxDxL-eJdu4c1YcTU8dmk-VXfxdO3drhkbU5XZQsC67tlTPvVUWYKA4FNh4jROoXQEAkmBClaQ9ErY2vsS4y8"
  "blog-thermal-roof.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuCNfZ7b9eTYIxyro2plbQOh5DKNH1DbgoGAZxbMz7kMH8z4nB4uKoDrThpIuGxTHO3JbLWMm3u6BChKfEjJ7-L-72X8KksWWO0xAC_mJMDLZswaGt5tnn1zEeOsJbJf8JkQq4dF7lG7kXEHsEiWnTUMbnS8BWb1H4Yrh5IxTW_Ash3pocfBeJRXcpWelNsVIqs0peM3HKJTNIY_CtZQnpx65j-PsomTI6ANTopAxe80lxS9-8q2ihd-Kmrs7UR80tRxKXjP7iUfdE4"
  "blog-roof-inspection.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuDUzdngGw3bLaGqP6TPhAlUoOFNz4QYqwC1m73uURUnn1Cd2LMFFKXzr2xzd8CN05DCvgon5XfxyRdKXd11kmGd-kENb-dhSXkn7fILRNr_v3Dqr9FpD2na4LLV5haf2FE2d4DEGlmtAQAhWLtQAS9173ju-yIS3KofmTBBt3MetVY-dQF7-iee3krVH_GwAF_1aHkr1X3FBp27Njhe5iit1k2olYgG3eWLx8NcvIfVYaTn-uw5UaswcgibQ251bCRDXZLUGlF_8N8"
  "blog-leak-detection.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuD1_WxtqzBGqKgFNO_21kKKjDv27hbdpR-PtpUP1k6Xq07bJZiQfpJxNgI3ATRcYNTPBCAsAhPZoMAgruUWfb9Q1wGtZ7OKjRuaSdPHbqI0U-n_vAxP3GBgaNJXVcGgGn79kIU2bbc73NkhbW1UL0OilN5bKLEIu91TJCfob-NEgMKCfx3qeyW-HWt--hloY-eB1ykEjo87VB0hLd4lknRClxksN8jQL47Tap1HAjdmDXWp-9V-evJ9L7pRcTj9EGQfWZ3DkuaAmGs"
  "blog-warehouse-foam.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuAzXoU9pI2jJ28IAP504HEqQH4GnT-tS_TidxR59-Y9p9DsR3z6MkBtIO90eQ3brtEHEYfIx3k1NuYYhTjkPVoMesgDsYtCIGg8YO6pQM_0b1aeF0FXXvY8DJ_QY-oUTNWsASAyyytB4CW0DjuGOiIJhPh4lxcetV__JQD6KTSWuZAaBPcTxISqp12xMJuPQjocYzZHl1xnuODlCorP3Vt92jUJ_zB0T5fqGutVnlbLCAJpStDHTMblowVVeBevxnNKpewrRvFZI6Y"
  "blog-ac-leak.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuD1_WxtqzBGqKgFNO_21kKKjDv27hbdpR-PtpUP1k6Xq07bJZiQfpJxNgI3ATRcYNTPBCAsAhPZoMAgruUWfb9Q1wGtZ7OKjRuaSdPHbqI0U-n_vAxP3GBgaNJXVcGgGn79kIU2bbc73NkhbW1UL0OilN5bKLEIu91TJCfob-NEgMKCfx3qeyW-HWt--hloY-eB1ykEjo87VB0hLd4lknRClxksN8jQL47Tap1HAjdmDXWp-9V-evJ9L7pRcTj9EGQfWZ3DkuaAmGs"
  "blog-warranty.jpg" = "https://lh3.googleusercontent.com/aida-public/AB6AXuCi65AgHBVvvF-BYst9XOzV3tPHyqmmQgIfzXz-nwmHF2gLF0865KEl2F7_Ds_n35FASs1AucJNXXEXrYX_p6Agsv3vBh_nP99s85nrNXXCQMxnx9J7xpT1ZOhP6NM-qGMn4PCmvL42AV3D34_TrXPvZAf4CiRf20Sd9EybkaxDbSAe7Ew0BuRIJDjudBlLcMXjQs6-FVkKNx-k4f9cOgj73zWDdkGRbZpctbETUD8sKsye7xYWNyeOQe6_R3CSTrJHG7mr3xBBvkg"
}

$ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

foreach ($entry in $entries.GetEnumerator()) {
  $dest = Join-Path $outDir $entry.Key
  Write-Host "Downloading $($entry.Key)..."
  curl.exe -fsSL -A $ua $entry.Value -o $dest
  if ($LASTEXITCODE -ne 0) { throw "Failed: $($entry.Key)" }
}

Write-Host "Done. $($entries.Count) original service images saved to $outDir"
