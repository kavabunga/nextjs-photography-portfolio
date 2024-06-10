interface IimgixLoader {
  src: string;
  width: number;
  quality: number;
}

export default function imgixLoader({ src, width, quality }: IimgixLoader) {
  const url = new URL(`${process.env.NEXT_PUBLIC_IMAGES_SRC}${src}`);
  const params = url.searchParams;
  params.set('auto', params.getAll('auto').join(',') || 'format');
  params.set('fm', params.getAll('fm').join(',') || 'jpg');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());
  params.set('q', (quality || 75).toString());
  params.set('iptc', 'allow');

  return url.href;
}
