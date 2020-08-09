// type=[stroke/fill, horizontal spacing, vertical spacing ]

const patterns = [
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
    title: "Chevron - OK",
    slug: "chevron",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 8.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path: "<path d='M -5,7 5,12 15,7 25,12'/><path d='M -5,17 5.0000002,22 15,17 25,22'/><path d='M -5,-3 5.0000002,2 15,-3 25,2' />"
  },
  {
    title: "Chevron - NEW",
    slug: "chevrons",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 8.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 10,
    path: "<path d='M -10,-2 10,8 30,-2' />"
  },
  {
    title: "Wave - 1",
    slug: "wave",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 6.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 10,
    path: "<path d='M-20 6.693c3.334-1.667 6.667-3.334 10-3.333 3.335 0 6.668 1.667 10 1.666 3.334 0 6.667-1.667 10-1.666 3.335 0 6.668 1.667 10 1.666 3.334 0 6.667-1.667 10-1.666 3.335 0 6.668 1.667 10 3.333' />"
  },
  {
    title: "Wave - 2",
    slug: "wave2",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 5.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 10,
    path: "<path d='M-20-13.307c3.334-1.667 6.667-3.334 10-3.333 3.335 0 6.668 1.667 10 1.666 3.334 0 6.667-1.667 10-1.666 3.335 0 6.668 1.667 10 1.666 3.334 0 6.667-1.667 10-1.666 3.335 0 6.668 1.667 10 3.333M-20-.407c3.334 3.335 6.668 6.668 10 6.667 3.333 0 6.667-3.333 10-3.333 3.334 0 6.668 3.334 10 3.333 3.333 0 6.667-3.333 10-3.333 3.334 0 6.668 3.334 10 3.333 3.333 0 6.667-3.333 10-6.667' />"
  },
  {
    title: "Wave - 3",
    slug: "wave3",
    type: ["stroke", "no", "yes"],
    colors: 2,
    maxStroke: 5.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 10,
    path: "<path d='M-30-.407c3.334 3.335 6.668 6.668 10 6.667 3.333 0 6.667-3.333 10-3.333 3.334 0 6.668 3.334 10 3.333 3.333 0 6.667-3.333 10-3.333 3.334 0 6.668 3.334 10 3.333 3.333 0 6.667-3.333 10-6.667m-50 0c3.334 3.335 6.668 6.668 10 6.667 3.333 0 6.667-3.333 10-3.333 3.334 0 6.668 3.334 10 3.333 3.333 0 6.667-3.333 10-3.333 3.334 0 6.668 3.334 10 3.333 3.333 0 6.667-3.333 10-6.667' />"
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
    title: "Hexagon - OK",
    slug: "hexagon",
    type: ["stroke", "no", "no"],
    colors: 2,
    maxStroke: 17,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 17.321,
    height: 30,
    path:
      "<path d='M22.533 7.525l-8.66 5-8.66-5v-10l8.66-5 8.66 5z'/><path d='M31.194 22.525l-8.66 5-8.661-5v-10l8.66-5 8.66 5zM13.873 22.525l-8.66 5-8.661-5v-10l8.66-5 8.66 5z'/><path d='M5.212 7.525l-8.66 5-8.66-5v-10l8.66-5 8.66 5zM22.533 37.525l-8.66 5-8.66-5v-10l8.66-5 8.66 5zM5.212 37.525l-8.66 5-8.66-5v-10l8.66-5 8.66 5z'/>"
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
    title: "Brick Wall - OK",
    slug: "brick-wall",
    type: ["stroke", "no", "no"],
    colors: 2,
    maxStroke: 9.5,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 20,
    height: 20,
    path: "<path d='M-6 5h20v10H-6zM-16 15H4v10h-20zM4 15h20v10H4zM-16-5H4V5h-20zM4-5h20V5H4zM14 5h20v10H14z'/>"
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
    title: "Herringbone",
    slug: "herringbone",
    type: ["stroke", "yes", "yes"],
    colors: 2,
    maxStroke: 7,
    maxScale: 16,
    maxSpacing: [10, 10],
    width: 10.583,
    height: 10.583,
    path:
      "<path d='M13.182 5.245l-7.937 7.937-7.938-7.937M13.182-.047L5.245 7.891-2.693-.047m13.23-2.646L5.245 2.6-.047-2.693m5.292 0l7.937 7.938-7.937 7.937M-.047-2.693l7.938 7.938-7.938 7.937M-2.693-.047L2.6 5.245l-5.292 5.292'/>"
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
  }
];
export default patterns;
