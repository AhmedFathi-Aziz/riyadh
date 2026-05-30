/**
 * روابط الصور الأصلية من التصميم (Google CDN) — نفس صور الموقع الأولى.
 * التحميل المحلي: scripts/download-original-images.ps1
 */
export type ImageSourceEntry = {
  file: string;
  url: string;
  alt: string;
  width: number;
  height: number;
};

export const originalImageSources = {
  logo: {
    file: "logo.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6jtvHY_H7Li3uRoKKfn_gIlW84dHC6MZgicjfcA7B4ZAdEYyAiknk-cV33nXbW_xZ463Zk_EAcPBuRYQSU-nnPT2KO6CgBB2z7Yv2OctcfFsdwkApuzmKqED8oV_m_QoekZ3wztp29rwsueVLuvEoOUQ6iOGBfl8ay05CupLl2qjifzMgQ7BMs2lHRnQcdQQyOtHGIqVSGnukQO8ah3y0I5gMAjuJltu3CI7lQ5NdnPuWL-HWqYtjVstoOEwspKGNrhRlUvkEVaQ",
    alt: "شعار عزل الرياض للمحترفين",
    width: 96,
    height: 96,
  },
  hero: {
    file: "hero.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJY72ukr1uaoN-yX5-fpHu6cFB4FIIV_e59wSE7sLqK1m26IaGQWrtfimQ3iEsZTPi5A6A81J-Z4sZaPu0y8o6RAMSiZhiSjw6kyWyWhJkPezr9S1bPl4x4OqegyLGxeiCdkWJ4mYf0pTklohkDt20SBXMBDhreCJ2hOnay91e8lEBMmHX_40uPt_KuZqMFPRYgrj6zWhyFV2b6DQYeTP_0_oUm-lbYptmFXWdermW9hrEW3_J_cnU2KWi3Cwwm3RU_ydghMIim0Q",
    alt: "فني محترف يستخدم أجهزة كشف تسربات المياه الصوتية في فيلا بالرياض",
    width: 1920,
    height: 1280,
  },
  services: {
    file: "services-roof.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNfZ7b9eTYIxyro2plbQOh5DKNH1DbgoGAZxbMz7kMH8z4nB4uKoDrThpIuGxTHO3JbLWMm3u6BChKfEjJ7-L-72X8KksWWO0xAC_mJMDLZswaGt5tnn1zEeOsJbJf8JkQq4dF7lG7kXEHsEiWnTUMbnS8BWb1H4Yrh5IxTW_Ash3pocfBeJRXcpWelNsVIqs0peM3HKJTNIY_CtZQnpx65j-PsomTI6ANTopAxe80lxS9-8q2ihd-Kmrs7UR80tRxKXjP7iUfdE4",
    alt: "عزل أسطح مائي احترافي على سطح مبنى في الرياض",
    width: 1920,
    height: 1280,
  },
  leakDetection: {
    file: "service-leak-detection.png",
    url: "/images/service-leak-detection.png",
    alt: "فني يستخدم أجهزة كشف تسربات المياه والكاميرات الحرارية بدون تكسير",
    width: 1024,
    height: 601,
  },
  tank: {
    file: "service-tank.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNzIlu0VFEd9frK9ZAV4kw5C0FRGjmniCX3At-Fz9__hDqR_SEQOM7Ir73Cm-xWUlV-6jVBOtKly4dypLw72Mb3hz4a9yEiKFW1We6BY_3LxDhBNlTYqdWlHo9bHqMz4DP46Jx9xK3k73Vq_u6yUyRpUMRpQ-TEuIiWw_79iC8wJGZ0dpRd5S-WBoroOJsyThnfRlDd2DIQ2UYFPy979kLby00rZYrUzoL7ktF7ltQmiw4lwWveWmb9ctjvw6c6MaEinJvD42OUFE",
    alt: "داخل خزان مياه معزول بطلاء إيبوكسي أزرق احترافي في الرياض",
    width: 1200,
    height: 900,
  },
  roof: {
    file: "service-roof.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzXoU9pI2jJ28IAP504HEqQH4GnT-tS_TidxR59-Y9p9DsR3z6MkBtIO90eQ3brtEHEYfIx3k1NuYYhTjkPVoMesgDsYtCIGg8YO6pQM_0b1aeF0FXXvY8DJ_QY-oUTNWsASAyyytB4CW0DjuGOiIJhPh4lxcetV__JQD6KTSWuZAaBPcTxISqp12xMJuPQjocYzZHl1xnuODlCorP3Vt92jUJ_zB0T5fqGutVnlbLCAJpStDHTMblowVVeBevxnNKpewrRvFZI6Y",
    alt: "تطبيق عزل حراري أبيض عاكس على سطح فيلا في الرياض",
    width: 1200,
    height: 900,
  },
  bathroom: {
    file: "service-bathroom.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQqaXnb0fBEucTS-4HY2XKE9zAx1xyaOOCAU1p36moeOm9Gkmevl_MpuoKIVh5lAjELToZO9oXZM9LvEmFrKjHt0FKDpbJ0TQlgjDIaobxUVK5uEcJhym-jOVEWElvY3vYTxJuUkZBeVPyc2JQ_EFLTVZm16s4HJw4ZzfQCecPQPVQkkyIg2mTQbGxDxL-eJdu4c1YcTU8dmk-VXfxdO3drhkbU5XZQsC67tlTPvVUWYKA4FNh4jROoXQEAkmBClaQ9ErY2vsS4y8",
    alt: "تطبيق غشاء عزل مائي على أرضية حمام فاخر قبل التبليط",
    width: 1200,
    height: 900,
  },
  restoration: {
    file: "service-restoration.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuASM1Xc26v5q--4F0QbjEyX1flLr0bnxB1S0qYxPLm7M1Z-UGh99DmIJ1JT1tvKyGtCj3WbNkNY9rq4878KCmPbAx7rXyCnJu28RctPi2RFHdlqDfWAM1DQFNRYgqDLLJDlRyQLJxcI2kgrXoXCFFmIC35k1yslWbFrfqWVEHXFi_ehon2FJip1MlD8ONjIbnO3WRWasctkqfitj-X1QDi6KITstOI6EIELH45NNQVT66A_wKsBmIL4a9oGMu5gtJ8OQL49yAb9wa4",
    alt: "واجهة فيلا مرممة بالكامل في حي راقٍ بالرياض",
    width: 1200,
    height: 900,
  },
  insulationHero: {
    file: "insulation-hero.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG2KNnjGSr47YO2OEYDfdi_DPF42ZVcBs7uUJQHCX9Qty7mfZz03Cdh6yEIvEQDYXDjzn3-S78sPgPWcm_iWl7u1K3taxRUSnVnyPSF-K8k4FBroayVwKf-Xs8se52WSgwWnLdkAezR5x3XwTdRJdrjIcCxX5ogKab9Y8kHkPgItH08u4SKINKi_VLv4BR7B3otrPRpNvUUlzcHzo02KQfYgH7jp5V-UACdJyRphBQhJN6wvNlKR5IFhT3plO6hoa8pnOgSiigWt4",
    alt: "عامل محترف يطبق طلاء عزل سائل على سطح مبنى حديث في الرياض عند غروب الشمس",
    width: 1920,
    height: 1280,
  },
  insulationWater: {
    file: "insulation-water.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6OIZZVra55QNkHxSdBjiiwmuQKazUPLt6seJPRm6QKtOBO24aapnarQzImVH6pI0-drhl9kIHIEnq-T2ZPSvmz5z8_T6Ju6xs_DXwL89CvoHvNpN9sHpjySyQ5USmf4WSiiu4XQl3zTnHab2EvJP9-39zf9Q_A49aNHBw5y-Hq8hkTkpX4Wpj3PJqloQ2LJspKPMTtAGyAjciOtkAHueNSRFvs8zf2qeLhTwuogXkgsR9RZfu6kEaWi1Jodq4G4jo84K_OLh_SJA",
    alt: "تطبيق غشاء بيتوميني عازل للمياه على أساس مبنى سكني",
    width: 1200,
    height: 800,
  },
  insulationThermal: {
    file: "insulation-thermal.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDQNbYOxVHK6NJJE5Rte3ZxfDh87oYNsxPemWtVTeV5sSGdY-x218_tq7B-qla8LSg7vVAiTl68qJEfOfbBa-n1IAfoNkST2qOJ0ECu0ybZVUrEhh3XROj6zBGQeR8U1IsTFH-JOChwhVFgHP836JcghD2Qwo-PpHyZebzzOFHYr98FZC6dYjD5W-elWQcXUBFDnA9SUNFP_6AikhQldK-M3V_2wcYVy0Afx2oKmUfQY53ypNWxKQXPFqxqlRETUom3inyg3GJDDE",
    alt: "تركيب ألواح عزل حراري أبيض في جدار مبنى سكني حديث",
    width: 1200,
    height: 800,
  },
  portfolioFoam: {
    file: "portfolio-villa.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy0Kqnza_JwFhBYVhtLk4l_DuTMhEp8L0aic8V9EVKwqHpVYaMsobfbKDw68_hl1xf3nnsdUOowL46k3Uc_pSnkIfqaMXHsOGDFeSZJq3drR7AkHlrYtXaS8DI5Ex0jLVqCupXh_HOTrXZSGKAYQldtrMAVRcwcLVk-NEoDS1jjWhJVRDGAfAGfzfEJ4gxuooF91QTD8aQrVTY4qp7DciWT9_T39GQ0Y05Eb-OLELCH5IuQKmsgmPVeDIhZIMbr9Kf9nRB8y84djQ",
    alt: "عزل فوم عاكس على سطح فيلا في حي الملقا بالرياض",
    width: 1200,
    height: 800,
  },
  portfolioCommercial: {
    file: "portfolio-commercial.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdve_JmO5rmaaPEjqpA1Ws5-vT8a_2f3kaRVsHzbWw0J2V0hZW0och-t6JHlxXLR-zky69Eo-i3jpadf-0pEb1VHWN198F8M4dyhbLer9aUVsBh1INP8S0NV0m5jVonx4weeLA2Y0KtK19oSJHyhjc4OiSIqdwUeNnaiE_MQZUx5ldPNzzTUQthFATDYAifY81D3ei7BBNnkDIYWSxMiCH6xEHj4k5pSgdjMjmU7nNArt9byx8qyJKPcq-QZIAb4X1hDWaVB7wEic",
    alt: "عزل حراري على سطح مبنى تجاري في الرياض",
    width: 1200,
    height: 800,
  },
  portfolioTank: {
    file: "portfolio-tank.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgW2m4ScpQc86z1mzGxW_ApsJ4rGncJTs8S9vUxqhbOGxlaGrOBXAKH_2OTjmzIsqpF5GFLVSFS2BwJNJxah9iagfd7FT3kEqYGQY0RYjNDm7gckDq3V4x2WW07seHZt8MgByVqq3Re2PrZDuZDwm8mINvGzUOWIc4BV65PKD_d2VH2fmvC3iDlZphegyhOIiLnlpB--XDRajXA9NZhKQCjKdiROmgC3ODnXukYMLtzAoaIymQ2emEfHkfOeiDurWK8q71c1UFF5Y",
    alt: "عزل داخلي لخزان مياه خرساني في مجمع سكني بالرياض",
    width: 1200,
    height: 800,
  },
} as const;
