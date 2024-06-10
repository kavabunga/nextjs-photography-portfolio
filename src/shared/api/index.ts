'use server';

interface Iapi {
  key?:
    | 'categories'
    | 'colors'
    | 'face_count'
    | 'has_frames'
    | 'keyword'
    | 'media_kind'
    | 'origin_path'
    | 'tags'
    | 'warning_adult'
    | 'warning_medical'
    | 'warning_racy'
    | 'warning_spoof'
    | 'warning_violence';
  value?: string | number | boolean;
}

export async function api({ key, value }: Iapi) {
  const apiUrl = process.env.IMAGES_API;
  const apiKey = process.env.IMGIX_API_KEY;
  const source = process.env.CLOUDFLARE_SOURCE_ID;

  const url = `${apiUrl}/sources/${source}/assets${key ? `?filter[${key}]=${value}&sort=date_modified` : ''}`;

  const headers = new Headers();
  headers.append('Content-Type', 'application/vnd.api+json');
  headers.append('Authorization', `Bearer ${apiKey}`);

  const options = {
    method: 'GET',
    headers,
  };

  try {
    const response = await fetch(url, options);
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.log('Error on images fetching: ', error);
  }

  return null;
}
