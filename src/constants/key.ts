const image = {
  dude: 'dude',
  ground: 'ground',
  sky: 'sky',
  star: 'star',
} as const;

const scene = {
  boot: 'boot',
  main: 'main',
} as const;

export const key = {
  image,
  scene,
} as const;
