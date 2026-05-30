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
    file: "manzilcare-logo.png",
    url: "/images/manzilcare-logo.png",
    alt: "شعار ManzilCare — متخصصون في العزل وكشف تسربات المياه",
    width: 537,
    height: 581,
  },
  hero: {
    file: "hero-roof-team-riyadh.png",
    url: "/images/hero-roof-team-riyadh.png",
    alt: "فريق عمل يطبق عزل أسطح في الرياض مع أفق برج المملكة والفيصلية",
    width: 1024,
    height: 686,
  },
  services: {
    file: "services-roof-insulation-riyadh.png",
    url: "/images/services-roof-insulation-riyadh.png",
    alt: "فريق عمل محترف يقوم بعزل أسطح في الرياض مع ظهور برج المملكة والفيصلية في الخلفية",
    width: 1024,
    height: 686,
  },
  leakDetection: {
    file: "service-leak-detection.png",
    url: "/images/service-leak-detection.png",
    alt: "فني يكشف تسرب مياه على سطح مبنى بأجهزة كشف صوتية متخصصة في الرياض",
    width: 1024,
    height: 768,
  },
  tank: {
    file: "service-tank.jpg",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNzIlu0VFEd9frK9ZAV4kw5C0FRGjmniCX3At-Fz9__hDqR_SEQOM7Ir73Cm-xWUlV-6jVBOtKly4dypLw72Mb3hz4a9yEiKFW1We6BY_3LxDhBNlTYqdWlHo9bHqMz4DP46Jx9xK3k73Vq_u6yUyRpUMRpQ-TEuIiWw_79iC8wJGZ0dpRd5S-WBoroOJsyThnfRlDd2DIQ2UYFPy979kLby00rZYrUzoL7ktF7ltQmiw4lwWveWmb9ctjvw6c6MaEinJvD42OUFE",
    alt: "داخل خزان مياه معزول بطلاء إيبوكسي أزرق احترافي في الرياض",
    width: 1200,
    height: 900,
  },
  roof: {
    file: "blog-bitumen-roof.png",
    url: "/images/blog-bitumen-roof.png",
    alt: "عمال يطبقون عزل بيتوميني على سطح مبنى في الرياض",
    width: 1024,
    height: 682,
  },
  bathroom: {
    file: "blog-bathroom-v2.jpg",
    url: "/images/blog-bathroom-v2.jpg",
    alt: "حمام حديث يحتاج عزل مائي احترافي قبل التشطيب في الرياض",
    width: 1280,
    height: 853,
  },
  restoration: {
    file: "blog-detect-leaks-without-tiling.png",
    url: "/images/blog-detect-leaks-without-tiling.png",
    alt: "فني يصلح تسرب مياه في مطبخ بالرياض بأجهزة كشف دون تكسير البلاط",
    width: 1024,
    height: 682,
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
