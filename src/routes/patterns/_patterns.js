// type=[stroke/fill, horizontal spacing, vertical spacing ]

const patterns = [
  {
    title: "Wave - 1",
    slug: "wave",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 6.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 120,
    height: 20,
    path: "<path d='M-50.129 12.685C-33.346 12.358-16.786 4.918 0 5c16.787.082 43.213 10 60 10s43.213-9.918 60-10c16.786-.082 33.346 7.358 50.129 7.685' />"
  },
  {
    title: "Wave - 3",
    slug: "wave3",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 5.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 80,
    height: 20,
    path: "<path d='M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432' />"
  }, 
  {
    title: "Wave - 5",
    slug: "wave5",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 5.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 40,
    height: 20,
    path: "<path d='M-4.798 13.573C-3.149 12.533-1.446 11.306 0 10c2.812-2.758 6.18-4.974 10-5 4.183.336 7.193 2.456 10 5 2.86 2.687 6.216 4.952 10 5 4.185-.315 7.35-2.48 10-5 1.452-1.386 3.107-3.085 4.793-4.176' />"
  },
  {
    title: "Chevron - 3",
    slug: "chevron3",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 5.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 80,
    height: 20,
    path: "<path d='M-20 7.5l40 5 40-5 40 5' />"
  },
  {
    title: "Chevron - 5",
    slug: "chevron5",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 5.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 40,
    height: 20,
    path: "<path d='M-10 7.5l20 5 20-5 20 5' />"
  },
  {
    title: "Chevron - 6",
    slug: "chevron6",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 4.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 40,
    height: 20,
    path: "<path d='M-10 5l20 10L30 5l20 10' />"
  },
  {
    title: "Chevron - 7",
    slug: "chevron7",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path: "<path d='M-5 5L5.1 15 15 5l10 10' />"
  },
  {
    title: "Straight Lines - OK",
    slug: "straight-lines",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 20,
    maxScale: 12,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path: "<path d='M -2.3354725e-8,9.8330078 H 20 Z'/>"
  },
  {
    title: "Cross Section - OK",
    slug: "cross-section",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 19.5,
    maxScale: 12,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path: "<path d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z'/>"
  },
  {
    title: "Brick Wall - OK",
    slug: "brick-wall2",
    type: ["stroke", "no", "no"],
    colors: 2,
    maxStroke: 9.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 30,
    height: 30,
    path: "<path d='M27.425 7.375v15M9.925 22.375v15.25M9.925 7.375v-15M-7.575 7.375h45.15M-7.575 22.375h45.15'/>"
  },
  {
    title: "Herringbone",
    slug: "herringbone",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 40,
    height: 20,
    path:
      "<path d='M40 0L20-10V0l20 10zm0 10L20 0v10l20 10zm0 10L20 10v10l20 10zM0 20l20-10v10L0 30zm0-10L20 0v10L0 20zM0 0l20-10V0L0 10z'/>"
  },
  {
    title: "Herringbone 1",
    slug: "herringbone1",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 40,
    height: 40,
    path:
      "<path d='M0 0h10v20H0zM30 0v10H10V0zM10 10h10v20H10zM40 10v10H20V10zM20 20h10v20H20zM50 20v10H30V20zM30 30h10v20H30zM20 30v10H0V30zM10 20v10h-20V20zM30-10h10v20H30z'/>"
  },
  {
    title: "Herringbone 2",
    slug: "herringbone2",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 40,
    height: 40,
    path:
      "<path d='M15 5h10v30H15zM35-5V5H5V-5zM35 35v10H5V35zM35-15h10v30H35zM55 15v10H25V15zM15 15v10h-30V15zM35 25h10v30H35zM-5 25H5v30H-5zM-5-15H5v30H-5z'/>"
  },
  {
    title: "Flower Fill",
    slug: "flower-fill",
    type: ["fill", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path:
      "<path d='M10 .059a10 10 0 01-10 9.98 10 10 0 0110 9.98 10 10 0 019.98-9.98A10 10 0 0110 .06zm10.02 9.95a10 10 0 01-10 9.981 10 10 0 0110 9.98A10 10 0 0130 19.99a10 10 0 01-9.98-9.98zM0 10.03a10 10 0 01-10 9.98A10 10 0 010 29.99a10 10 0 019.98-9.98A10 10 0 010 10.03zM20.02-9.95a10 10 0 01-10 9.98 10 10 0 0110 9.98A10 10 0 0130 .03a10 10 0 01-9.98-9.98zM0-9.931a10 10 0 01-10 9.98 10 10 0 0110 9.98A10 10 0 019.98.05 10 10 0 010-9.931z'/>"
  },
  {
    title: "Flower Stroke",
    slug: "flower-stroke",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path:
      "<path d='M10 .059a10 10 0 01-10 9.98 10 10 0 0110 9.98 10 10 0 019.98-9.98A10 10 0 0110 .06zm10.02 9.95a10 10 0 01-10 9.981 10 10 0 0110 9.98A10 10 0 0130 19.99a10 10 0 01-9.98-9.98zM0 10.03a10 10 0 01-10 9.98A10 10 0 010 29.99a10 10 0 019.98-9.98A10 10 0 010 10.03zM20.02-9.95a10 10 0 01-10 9.98 10 10 0 0110 9.98A10 10 0 0130 .03a10 10 0 01-9.98-9.98zM0-9.931a10 10 0 01-10 9.98 10 10 0 0110 9.98A10 10 0 019.98.05 10 10 0 010-9.931z'/>"
  },
  {
    title: "Checkerboard",
    slug: "checkerboard",
    type: ["fill", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path:
      "<path d='M0 0h10v10H0zM10 10h10v10H10z'/>"
  },
  {
    title: "Plus",
    slug: "checkerboard1",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path:
      "<path d='M10-6V6M10 14v12M26 10H14M6 10H-6'/>"
  },
  {
    title: "Concentric Circles",
    slug: "concentric1",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 48,
    height: 48,
    path:
      "<path d='M5.323 7.811a10.233 10.233 0 01-11.77 0m60.894 0a10.234 10.234 0 01-5.885 1.861 10.234 10.234 0 01-5.885-1.861M-6.447 40.19a10.234 10.234 0 015.885-1.862 10.234 10.234 0 015.885 1.862m37.354 0a10.235 10.235 0 0111.77 0M15.627 5.323a10.234 10.234 0 01-1.86-5.885 10.234 10.234 0 011.86-5.885m16.746 0a10.234 10.234 0 011.862 5.885 10.234 10.234 0 01-1.862 5.885M15.627 54.447a10.233 10.233 0 010-11.77m16.746 0a10.234 10.234 0 011.862 5.885 10.234 10.234 0 01-1.862 5.885m7.817-24.562A10.234 10.234 0 0138.328 24a10.234 10.234 0 011.862-5.885m-32.379 0A10.234 10.234 0 019.672 24a10.234 10.234 0 01-1.861 5.886m22.074 2.487A10.234 10.234 0 0124 34.235a10.234 10.234 0 01-5.885-1.862m0-16.746A10.234 10.234 0 0124 13.767a10.234 10.234 0 015.886 1.86'/>"
  },
  {
    title: "Concentric Circles",
    slug: "concentric2",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 36,
    height: 36,
    path:
      "<path d='M3.445 3.624A5 5 0 010 5a5 5 0 01-3.445-1.376m8.973 4.709A10 10 0 010 10a10 10 0 01-5.528-1.667m2.083 24.043A5 5 0 010 31a5 5 0 013.445 1.376m-8.973-4.709A10 10 0 010 26a10 10 0 015.528 1.667M21.624-3.445A5 5 0 0123 0a5 5 0 01-1.376 3.445m-7.247 0A5 5 0 0113 0a5 5 0 011.377-3.445m11.956-2.083A10 10 0 0128.001 0a10 10 0 01-1.667 5.528m-16.666 0A10 10 0 018 0a10 10 0 011.666-5.528m29.778 9.152A5 5 0 0136 5a5 5 0 01-3.445-1.376m8.973 4.709A10 10 0 0136 10a10 10 0 01-5.528-1.667m-8.848 24.222A5 5 0 0123 36a5 5 0 01-1.376 3.445m-7.247 0A5 5 0 0113 36a5 5 0 011.376-3.445m11.956-2.083A10 10 0 0128.001 36a10 10 0 01-1.667 5.528m-16.666 0A10 10 0 018 36a10 10 0 011.666-5.528m22.888 1.904A5 5 0 0136 31a5 5 0 013.445 1.376m-8.973-4.709A10 10 0 0136 26a10 10 0 015.528 1.667M3.624 14.555A5 5 0 015.001 18a5 5 0 01-1.377 3.446m4.71-8.974A10 10 0 0110 18a10 10 0 01-1.667 5.528m24.042-2.082A5 5 0 0131 18a5 5 0 011.376-3.445m-4.71 8.974A10 10 0 0126 18a10 10 0 011.666-5.527m-6.22 9.151A5 5 0 0118 23.001a5 5 0 01-3.445-1.377m0-7.247A5 5 0 0118 13a5 5 0 013.445 1.377m2.083 11.956A10 10 0 0118 28a10 10 0 01-5.528-1.666m0-16.666A10 10 0 0118 8a10 10 0 015.528 1.667'/>"
  },
  {
    title: "Concentric Circles",
    slug: "concentric3",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 46.5,
    height: 46.5,
    path:
      "<path d='M43.582 42.44a5 5 0 012.918-.94 5 5 0 012.917.94m0 8.12a5 5 0 01-2.917.94 5 5 0 01-2.917-.94m7.501 4.827A10 10 0 0146.5 56.5a10 10 0 01-4.585-1.113m.001-17.774A10 10 0 0146.5 36.5a10 10 0 014.585 1.113m2.776 21.956a15 15 0 01-7.36 1.931 15 15 0 01-7.363-1.93m0-26.14A15 15 0 0146.5 31.5a15 15 0 017.362 1.93M27.31-2.917A5 5 0 0128.25 0a5 5 0 01-.94 2.917m-8.12 0A5 5 0 0118.25 0a5 5 0 01.94-2.917m-4.827 7.501A10 10 0 0113.25 0a10 10 0 011.113-4.585m17.774.001A10 10 0 0133.25 0a10 10 0 01-1.113 4.585M10.181 7.36A15 15 0 018.25.001a15 15 0 011.93-7.363m26.14 0A15 15 0 0138.25 0a15 15 0 01-1.93 7.362m-9.01 36.22a5 5 0 01.94 2.918 5 5 0 01-.94 2.917m-8.12 0a5 5 0 01-.94-2.917 5 5 0 01.94-2.917m-4.827 7.501A10 10 0 0113.25 46.5a10 10 0 011.113-4.585m17.774.001A10 10 0 0133.25 46.5a10 10 0 01-1.113 4.585M10.181 53.86a15 15 0 01-1.931-7.36 15 15 0 011.93-7.363m26.14 0a15 15 0 011.93 7.362 15 15 0 01-1.93 7.362M-2.919 42.44A5 5 0 010 41.5a5 5 0 012.917.94m0 8.12A5 5 0 010 51.5a5 5 0 01-2.917-.94m7.501 4.827A10 10 0 010 56.5a10 10 0 01-4.585-1.113m.001-17.774A10 10 0 010 36.5a10 10 0 014.585 1.113M7.36 59.569A15 15 0 01.001 61.5a15 15 0 01-7.363-1.93m0-26.14A15 15 0 010 31.5a15 15 0 017.362 1.93m36.22-37.49A5 5 0 0146.5-5a5 5 0 012.917.94m0 8.12A5 5 0 0146.5 5a5 5 0 01-2.917-.94m7.501 4.827A10 10 0 0146.5 10a10 10 0 01-4.585-1.113m.001-17.774A10 10 0 0146.5-10a10 10 0 014.585 1.113m2.776 21.956A15 15 0 0146.501 15a15 15 0 01-7.363-1.93m0-26.14A15 15 0 0146.5-15a15 15 0 017.362 1.93m-56.78 9.01A5 5 0 010-5a5 5 0 012.917.94m0 8.12A5 5 0 010 5a5 5 0 01-2.917-.94m7.501 4.827A10 10 0 010 10a10 10 0 01-4.585-1.113m.001-17.774A10 10 0 010-10a10 10 0 014.585 1.113M7.36 13.069A15 15 0 01.001 15a15 15 0 01-7.363-1.93m0-26.14A15 15 0 010-15a15 15 0 017.362 1.93M50.56 20.333a5 5 0 01.94 2.918 5 5 0 01-.94 2.917m-8.12 0a5 5 0 01-.94-2.917 5 5 0 01.94-2.917m-4.827 7.5A10 10 0 0136.5 23.25a10 10 0 011.113-4.585m17.774.001A10 10 0 0156.5 23.25a10 10 0 01-1.113 4.585M33.431 30.61A15 15 0 0131.5 23.25a15 15 0 011.93-7.362m26.14 0a15 15 0 011.93 7.362 15 15 0 01-1.93 7.362M4.06 20.332A5 5 0 015 23.25a5 5 0 01-.94 2.917m-8.12 0A5 5 0 01-5 23.25a5 5 0 01.94-2.917m-4.827 7.5A10 10 0 01-10 23.25a10 10 0 011.113-4.585m17.774.001A10 10 0 0110 23.25a10 10 0 01-1.113 4.585m-21.956 2.776A15 15 0 01-15 23.25a15 15 0 011.93-7.362m26.14 0A15 15 0 0115 23.25a15 15 0 01-1.93 7.362m7.262-11.422a5 5 0 012.918-.94 5 5 0 012.917.94m0 8.12a5 5 0 01-2.917.94 5 5 0 01-2.917-.94m7.5 4.827a10 10 0 01-4.583 1.113 10 10 0 01-4.585-1.113m.001-17.774a10 10 0 014.584-1.113 10 10 0 014.585 1.113m2.776 21.956a15 15 0 01-7.361 1.931 15 15 0 01-7.362-1.93m0-26.14a15 15 0 017.362-1.93 15 15 0 017.362 1.93'/>"
  },
  {
    title: "Adjointed Circles",
    slug: "adjointed",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 40,
    height: 40,
    path:
      "<path d='M20-10v20m0 20v20m-30-30h20m20 0h20m-20 0h20m-20 0h20m-20 0h20m-20 0h20m-20 0h20m-20 0a10 10 0 01-10 10 10 10 0 01-10-10 10 10 0 0110-10 10 10 0 0110 10M0 10v20m40-20v20M10 40h20M10 0h20m20 40a10 10 0 01-10 10 10 10 0 01-10-10 10 10 0 0110-10 10 10 0 0110 10m-40 0A10 10 0 010 50a10 10 0 01-10-10A10 10 0 010 30a10 10 0 0110 10M50 0a10 10 0 01-10 10A10 10 0 0130 0a10 10 0 0110-10A10 10 0 0150 0M10 0A10 10 0 010 10 10 10 0 01-10 0 10 10 0 010-10 10 10 0 0110 0'/>"
  },
  {
    title: " Fill",
    slug: "hexa",
    type: ["fill", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 58,
    height: 66.981,
    path:
      "<path d='M57.994 92.097l-14.498-8.37.002-16.745 14.5-8.373 14.498 8.37-.002 16.745zm-58 0l-14.498-8.37.002-16.745 14.5-8.374 14.498 8.37-.002 16.745zM29.002 8.372L14.504.002l.002-16.745 14.5-8.373 14.498 8.37-.002 16.744zm29 16.748l-14.498-8.37.002-16.745 14.5-8.373L72.504.002l-.002 16.744zm-58 0l-14.498-8.37.002-16.745 14.5-8.374L14.504.001l-.002 16.745zm57.996 33.489L43.5 50.239l.002-16.745 14.5-8.374L72.5 33.49l-.002 16.745zm-29.004 16.74l-14.498-8.37.002-16.744 14.5-8.374 14.498 8.37-.002 16.745zm.004-33.488L14.5 33.49l.002-16.745 14.5-8.374 14.498 8.37-.002 16.745zm-29 16.747l-14.498-8.37.002-16.744 14.5-8.374L14.5 33.49l-.002 16.745z'/>"
  },
  {
    title: "Hexa1",
    slug: "hexa1",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 29,
    height: 50.115,
    path:
      "<path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'/>"
  },
  {
    title: "Hexa2",
    slug: "hexa2",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 29,
    height: 50.115,
    path:
      "<path d='M14.499 11.82L4.36 5.968l.002-11.706 10.14-5.855L24.638-5.74l-.001 11.707zm0 50.06L4.36 56.029l.002-11.706 10.14-5.855 10.137 5.852-.001 11.707zm14.498-25.117L18.858 30.91l.002-11.707L29 13.349l10.137 5.853-.001 11.706zm-29 0l-10.139-5.852.002-11.707L0 13.349l10.138 5.853-.002 11.706zm14.501-19.905L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'/>"
  },
  {
    title: "Hexa3",
    slug: "hexa3",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 29,
    height: 50.115,
    path:
      "<path d='M14.5 6.628L8.886 3.372v-6.515L14.502-6.4l5.612 3.257-.001 6.514zm0 50.06l-5.613-3.256v-6.515l5.614-3.258 5.612 3.257-.001 6.515zm14.497-25.117l-5.612-3.257v-6.515L29 18.541l5.612 3.257-.001 6.515zm-29 0l-5.612-3.257v-6.515L0 18.541l5.612 3.257v6.515zM14.5 11.82L4.36 5.967l.002-11.706 10.14-5.855L24.638-5.74l-.001 11.707zm0 50.06L4.36 56.028l.002-11.706 10.14-5.855 10.137 5.852-.001 11.707zm14.498-25.118L18.858 30.91l.002-11.707L29 13.349l10.137 5.853-.001 11.706zm-29 0l-10.139-5.852.002-11.707L0 13.349l10.138 5.853-.002 11.706zm14.501-19.905L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'/>"
  },
  {
    title: "Cubes",
    slug: "cubes",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 29,
    height: 50.115,
    path:
      "<path d='M-.004 25.057V41.8m28.998-16.743l.004 16.743m-.002 33.489l-14.498-8.37.002-16.745L29 41.8l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.745L0 41.8l14.498 8.37-.002 16.745zm29-50.232l-14.498-8.37L14.5-.059 29-8.432l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.745L0-8.432l14.498 8.37-.002 16.745zm29 16.743l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745zm14.502-24.942L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.3'/>"
  },
  {
    title: "Cubes2",
    slug: "cubes2",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20.047,
    height: 24,
    path:
      "<path d='M10.068-14A10 10 0 00.226-5.996a10 10 0 019.8 9.914 10 10 0 019.796-9.916A10 10 0 0010.068-14zm-.043 18.03a10 10 0 01-.203 1.968 10 10 0 00.187.002 10 10 0 00.217-.004 10 10 0 01-.2-1.967z' overflow='visible'/><path d='M20.068-6a10 10 0 00-9.842 8.008c5.443.11 9.815 4.558 9.8 10.021a10 10 0 010-.029v-.059a10 10 0 019.796-9.939A10 10 0 0020.068-6zm-.043 18.03a10.052 10.052 0 01-.201 1.968 10 10 0 00.185.002 10 10 0 00.217-.004 10 10 0 01-.2-1.967zM.068-6a10 10 0 00-9.842 8.004 10 10 0 019.8 9.937C.056 6.507 4.42 2.12 9.823 2.011A10 10 0 00.068-6zM.025 12a10 10 0 010 .03 10 10 0 01-.203 1.968A10 10 0 00.009 14a10 10 0 00.215-.004C.094 13.351.025 12.684.025 12z' overflow='visible'/><path d='M10.068 2c-4.855-.021-8.913 3.423-9.84 8.01 5.442.11 9.813 4.556 9.797 10.02a10.05 10.05 0 01-.201 1.96c.062.001.123.01.185.01.073 0 .143-.008.215-.01-.01-.046-.012-.095-.021-.142a9.956 9.956 0 01-.127-.838c-.034-.332-.05-.67-.05-1.01v-.059c.001-.34.02-.675.056-1.005.024-.225.065-.444.103-.664.02-.108.03-.218.053-.325.028-.136.07-.268.104-.402.046-.185.087-.372.144-.553.061-.193.137-.38.209-.568.041-.108.076-.219.121-.324.108-.254.23-.498.358-.74.02-.038.034-.077.054-.114.129-.237.27-.464.416-.69.027-.04.05-.085.078-.126.146-.216.304-.422.465-.625.036-.045.067-.094.104-.139.175-.214.362-.417.554-.615.025-.026.047-.055.073-.08a10.049 10.049 0 013.101-2.127 9.915 9.915 0 013.807-.832c-.919-4.554-4.932-7.99-9.758-8.012z' overflow='visible'/><path d='M20.068 10c-4.855-.021-8.913 3.423-9.84 8.01 5.442.11 9.813 4.556 9.797 10.02a10 10 0 010-.03v-.059a10 10 0 019.799-9.939c-.923-4.548-4.933-7.98-9.756-8.002zm-.043 18.03a10.05 10.05 0 01-.201 1.96c.062.001.123.01.185.01.073 0 .143-.008.215-.01a10 10 0 01-.199-1.96zM.068 10c-4.853-.021-8.91 3.42-9.84 8.004a10 10 0 019.797 9.937c.032-5.435 4.396-9.823 9.8-9.93C8.908 13.46 4.895 10.022.069 10zM.025 28a10 10 0 010 .03 10 10 0 01-.201 1.96c.062.001.123.01.185.01.072 0 .142-.008.213-.01A10.046 10.046 0 01.025 28z' overflow='visible'/><path d='M.024 28c0 5.517 4.469 9.992 9.986 10 5.517.008 9.998-4.453 10.014-9.97.017-5.518-4.438-10.006-9.955-10.03C4.552 17.976.057 22.424.025 27.941' overflow='visible'/>"
  },
  {
    title: "Squares - OK",
    slug: "squares",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 9.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path: "<path d='M 5,5 H 15 V 15 H 5 Z'/>"
  },
  {
    title: "Circles - OK",
    slug: "circles",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 20,
    maxScale: 10,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path: "<path d='M 12.5,10 A 2.5,2.5 0 0 1 10,12.5 2.5,2.5 0 0 1 7.5,10 2.5,2.5 0 0 1 10,7.5 2.5,2.5 0 0 1 12.5,10 Z'/>"
  },
  {
    title: "Triangles - OK",
    slug: "triangles",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 21,
    maxScale: 10,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path: "<path d='M15 15H5l5-10z'/>"
  },
  {
    title: "Plus - OK",
    slug: "plus",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 9.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path: "<path d='M3.25 10h13.5M10 3.25v13.5'/>"
  },
  {
    title: "Inverted triangles - OK",
    slug: "inverted-triangles",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 5.5,
    maxScale: 10,
    maxSpacing: [10, 10],
    width: 20,
    height: 28,
    path: "<path d='M5 12H-5L0 2zM-5 16H5L0 26zM5 26h10l-5-10zM5 2h10l-5 10zM25 12H15l5-10zM15 16h10l-5 10z'/>"
  },
  {
    title: "Funny design",
    slug: "funny-design",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 37.092,
    height: 37.092,
    path:
      "<path d='M37.091 30.546l-12-12 12-12 12 12zm0 4.364L20.727 18.546 37.091 2.182l16.364 16.364zM18.546 12l-12-12 12-12 12 12zm0 4.364L2.182 0l16.364-16.364L34.91 0zm0 32.728l-12-12 12-12 12 12zm0 4.364L2.182 37.092l16.364-16.364L34.91 37.092zM0 30.546l-12-12 12-12 12 12zm0 4.363l-16.364-16.363L0 2.182l16.364 16.364z'/>"
  },
  {
    title: "Jigsaw",
    slug: "jigsaw",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 2,
    maxSpacing: [10, 10],
    width: 192,
    height: 192,
    path:
      "<path d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'/>"
  },
  {
    title: "New - OK",
    slug: "new-1",
    type: ["stroke", "no", "no"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 32,
    height: 32,
    path:
      "<path d='M16 6l10 10-10 10L6 16z'/><path d='M16-10L26 0 16 10 6 0zM16 22l10 10-10 10L6 32zM32 6l10 10-10 10-10-10zM0 6l10 10L0 26l-10-10z'/><path d='M32-10L42 0 32 10 22 0zM0-10L10 0 0 10-10 0zM0 22l10 10L0 42l-10-10zM32 22l10 10-10 10-10-10z'/>"
  },
  {
    title: "New 2 - OK",
    slug: "new-2",
    type: ["fill", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 21.75,
    path:
      "<path d='M13.262 16.611v-1.065h.533V14.48H12.73v3.199h3.199v-5.33h-5.331v7.463h7.463V1.94h-7.463v7.464h5.331V4.073h-3.2v3.199h1.067V6.205h-.533V5.14h1.598v3.196h-3.196V3.008h5.329v7.46H3.007v-7.46h5.329v5.328H5.14V5.14h1.598v1.065h-.534v1.067h1.068v-3.2h-3.2v5.332h5.332V1.941H1.94V19.81h7.464v-7.463H4.072v5.33h3.2V14.48H6.205v1.067h.533v1.065H5.14v-3.197h3.197v5.329h-5.33v-7.46H16.995v7.46h-5.33v-5.33h3.196v3.197h-1.598m5.863 4.265H.875v-20h18.25v20'/>"
  },
  {
    title: "Check OK",
    slug: "check",
    type: ["fill", "no", "no"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 132,
    height: 142,
    path:
      "<path d='M86.508 128.228a1 1 0 01-.312-1.95l3.154-1.038-1.038-3.154a1 1 0 111.9-.625l1.35 4.104a.997.997 0 01-.637 1.262l-4.104 1.35c-.104.035-.21.05-.313.05zM29.072 114.084a1 1 0 01-.971-.766l-.641-2.662-2.662.64a1 1 0 01-.468-1.944l3.634-.875a1 1 0 011.207.738l.874 3.634a1 1 0 01-.973 1.235zM124.639 29.974a1 1 0 01-.979-1.206l2.76-13.078-13.078-2.76a1 1 0 11.414-1.956l14.056 2.965a1.002 1.002 0 01.773 1.185l-2.966 14.057c-.102.47-.517.793-.98.793zM110.072 121.575a.985.985 0 01-.538-.16l-2.103-1.35a.998.998 0 111.08-1.681l1.26.809.81-1.261a1.001 1.001 0 011.685 1.08l-1.351 2.103a.998.998 0 01-.843.46zM18.157 42.43a1 1 0 01-.923-1.385l1.865-4.48-4.48-1.863a1 1 0 01.77-1.847l5.4 2.249a1 1 0 01.54 1.308l-2.25 5.402a1 1 0 01-.922.616zM91.263 23.787a1 1 0 01-.525-1.852l9.339-5.75-5.75-9.338a1 1 0 011.703-1.05l6.273 10.192a.998.998 0 01-.326 1.375l-10.19 6.273a.983.983 0 01-.524.15zM126.992 135.09a.998.998 0 01-.924-.618l-1.343-3.24a1 1 0 01.54-1.306l3.239-1.342a1 1 0 11.766 1.848l-2.314.959.96 2.315a1.001 1.001 0 01-.924 1.384zM77.367 89.574a.999.999 0 01-.294-1.956l2.356-.726-.725-2.357a1 1 0 111.91-.588l1.02 3.313a.998.998 0 01-.661 1.25l-3.312 1.02a.998.998 0 01-.294.044zM92.694 108.34a1 1 0 01-.968-.753l-1.935-7.61a1 1 0 011.939-.492l1.688 6.64 6.642-1.687a1 1 0 01.492 1.938l-7.61 1.934a1.009 1.009 0 01-.248.03zM113.732 139.894a1 1 0 01-.217-.023l-4.083-.901a1 1 0 01-.761-1.192l.902-4.083a1.001 1.001 0 011.953.431l-.687 3.106 3.106.686a1 1 0 01-.213 1.976zM3.115 112.412a1 1 0 01-.455-1.891l1.684-.858-.857-1.683a1 1 0 011.783-.907l1.312 2.574a1 1 0 01-.437 1.345l-2.575 1.312a1.01 1.01 0 01-.455.108zM72.24 140.034a.995.995 0 01-.544-.162l-7.98-5.19a1 1 0 01-.292-1.384l5.19-7.98a1 1 0 011.677 1.092l-4.646 7.14 7.14 4.645a1 1 0 01-.545 1.839zM16.64 71.874a.98.98 0 01-.368-.072l-9.245-3.685a1 1 0 01-.56-1.3l3.687-9.244a1 1 0 011.858.74l-3.314 8.316 8.314 3.314a1 1 0 01-.371 1.93zM81.343 10.84a1 1 0 01-.895-1.443l1.162-2.345-2.347-1.162a.998.998 0 01-.452-1.34.996.996 0 011.339-.452l3.243 1.605a1 1 0 01.452 1.339l-1.604 3.243c-.176.352-.53.556-.898.556zM44.215 12.96a.999.999 0 01-.942-1.337l1.072-3.008-3.01-1.073a.999.999 0 01-.605-1.278.998.998 0 011.278-.606l3.95 1.408a1 1 0 01.606 1.278l-1.408 3.95a1 1 0 01-.941.666zM47.947 66.478c-.053 0-.104-.004-.156-.012l-10.932-1.728a1 1 0 01.313-1.976l9.943 1.572 1.572-9.943a1.001 1.001 0 011.976.312l-1.73 10.93a1 1 0 01-.986.845zM14.05 137.119a.995.995 0 01-.92-.61l-4.685-11.076a1 1 0 111.842-.78l4.295 10.155 10.153-4.294a1 1 0 11.78 1.842L14.44 137.04a1.018 1.018 0 01-.39.079zM37.44 97.505a1 1 0 01-.979-1.21l2.043-9.506-9.506-2.042a1 1 0 11.42-1.956L39.9 85.043a1 1 0 01.768 1.188l-2.252 10.483a.999.999 0 01-.976.79zM112.988 38.353c-.407 0-.79-.251-.94-.656l-1.222-3.333-3.334 1.224a1 1 0 11-.69-1.877l4.273-1.57a1.005 1.005 0 011.285.594l1.568 4.273a1.001 1.001 0 01-.94 1.345zM127.585 106.66a.97.97 0 01-.2-.02l-10.417-2.125a.998.998 0 01-.635-.43c-.146-.22-.198-.49-.146-.75l2.125-10.417a1 1 0 111.96.4l-1.926 9.438 9.438 1.925a1 1 0 01-.2 1.979zM13.347 94.422a1 1 0 01-.953-.7l-1.711-5.438-5.438 1.71a1 1 0 01-.602-1.908l6.393-2.01a1.004 1.004 0 011.255.654l2.01 6.392a1 1 0 01-.954 1.3zM106.006 87.314a.999.999 0 01-.854-.48l-5.713-9.353a1.001 1.001 0 01.333-1.375l9.354-5.712a1 1 0 011.042 1.708l-8.501 5.19 5.19 8.5a1.001 1.001 0 01-.851 1.522zM37.607 45.665a1 1 0 01-.995-.908l-1.325-14.364a.999.999 0 01.903-1.087l14.364-1.327a.999.999 0 11.184 1.99L37.37 31.205l1.233 13.368a.999.999 0 01-.996 1.093zM124.868 81.772a.996.996 0 01-.642-.233l-2.027-1.697a1 1 0 111.283-1.534l1.26 1.055 1.057-1.261a1 1 0 111.533 1.284l-1.696 2.028a1 1 0 01-.768.358zM47.875 133.12a1 1 0 01-.933-.64l-3.85-9.95a1 1 0 01.57-1.293l9.952-3.85a1 1 0 01.723 1.865l-9.02 3.489 3.488 9.019a1 1 0 01-.93 1.36zM7.33 18.77a1 1 0 01-.801-.402L2.647 13.17a.998.998 0 01.203-1.4L8.047 7.89A1 1 0 119.243 9.49l-4.396 3.283L8.13 17.17a.998.998 0 01-.8 1.599zM128.44 66.675a1 1 0 01-.952-.696l-3.848-12.057-12.058 3.848a1 1 0 01-.609-1.905l13.01-4.152a1.001 1.001 0 011.257.648l4.152 13.009a1 1 0 01-.952 1.305zM65.049 51.48c-.402 0-.782-.245-.934-.644l-4.048-10.637a1 1 0 011.868-.711l3.693 9.703 9.702-3.692a1 1 0 01.71 1.869l-10.636 4.048a1.021 1.021 0 01-.355.065zM84.243 68.23c-.103 0-.208-.016-.312-.05l-4.617-1.514a1 1 0 11.623-1.901l3.667 1.202 1.202-3.667a1 1 0 111.9.623l-1.513 4.618a1.001 1.001 0 01-.95.689zM80.497 34.39a.99.99 0 01-.604-.204l-1.99-1.515a1 1 0 01-.19-1.402l1.515-1.99a1 1 0 011.59 1.212l-.908 1.194 1.195.909a1.001 1.001 0 01-.608 1.796zM94.324 140.09a1 1 0 01-.888-1.459l1.795-3.479a1 1 0 011.348-.43l3.479 1.795a1 1 0 11-.917 1.777l-2.59-1.336-1.337 2.59a1.003 1.003 0 01-.89.541zM22.74 14.308a.998.998 0 01-.723-1.69l2.297-2.412L21.9 7.91a1 1 0 111.379-1.45l3.137 2.986a1 1 0 01.035 1.414l-2.985 3.137a1 1 0 01-.726.31zM128.487 46.59a.989.989 0 01-.385-.077l-5.516-2.302a1 1 0 01-.537-1.308l2.302-5.515a1 1 0 011.846.77l-1.917 4.592 4.593 1.917a1 1 0 01.537 1.308.998.998 0 01-.923.616zM56.868 23.378a1 1 0 01-.471-1.883L68.3 15.164 61.97 3.26a1 1 0 011.766-.94l6.8 12.787a.998.998 0 01-.414 1.352l-12.786 6.8a.991.991 0 01-.468.118zM56.318 98.985a1 1 0 01-.877-.518l-1.197-2.177a1 1 0 111.754-.963l.715 1.3 1.3-.714a1.001 1.001 0 01.963 1.753l-2.177 1.197a1.014 1.014 0 01-.481.122zM97.127 54.125a1 1 0 01-1-.998l-.016-6.2-6.2.016h-.001a1 1 0 01-.003-2l7.199-.018h.003a1 1 0 011 .998l.018 7.199a1 1 0 01-.998 1.002h-.002zM70.339 113.205a1 1 0 01-.974-1.228l.756-3.222a.999.999 0 011.202-.745l3.222.756a1 1 0 01-.457 1.947l-2.248-.528-.528 2.248c-.11.46-.52.772-.973.772zM62.43 80.366a1 1 0 01-.922-.611l-2.702-6.4a1 1 0 01.532-1.311l6.4-2.702a1 1 0 01.779 1.843l-5.48 2.313 2.314 5.479a1 1 0 01-.921 1.389zM3.482 46.67a1 1 0 01-.713-1.7l2.203-2.241-2.24-2.204a1 1 0 111.402-1.426l2.953 2.904a1 1 0 01.012 1.414l-2.904 2.955a.996.996 0 01-.713.299zM40.881 134.488a1 1 0 011.127 1.282l-1.166 3.737a1 1 0 01-1.254.657l-3.737-1.167a1 1 0 11.596-1.908l2.782.867.87-2.782c.115-.368.426-.624.782-.686z'/>"
  },
  {
    title: "Don know - OK",
    slug: "don-know",
    type: ["stroke", "no", "no"],
    colors: 2,
    maxStroke: 8.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path:
      "<path d='M -5,-3 5.0000002,2 15,-3 25,2 M -5,17 5.0000002,22 15,17 25,22 M -5,7 5,12 15,7 25,12 m -27.5,12.5 5,-10 -5,-10 5,-10 m 15,30 5,-10 -5,-10 5,-10 m -15,30 5,-10 -5,-10 5,-10'/>"
  },
  {
    title: "New 3 - OK",
    slug: "new-3",
    type: ["stroke", "no", "no"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 10,
    path:
      "<path d='M1.5 2h7M1.5 5h7M1.5 8h7M12 1.5v7M15 1.5v7M18 1.5v7'/>"
  }
];
export default patterns;
