interface IresolveImageOrientation {
  width: number | null;
  height: number | null;
}

export function resolveImageOrientation({
  width,
  height,
}: IresolveImageOrientation) {
  if (!width || !height) {
    return 'horizontal';
  }

  return width > height ? 'horizontal' : 'vertical';
}
