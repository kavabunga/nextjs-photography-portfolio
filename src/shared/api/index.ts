'use server';

import { NextRequest } from 'next/server';

interface IimgixApi extends Partial<NextRequest> {}

async function imgixApi({ url, ...options }: IimgixApi) {
  const apiUrl = process.env.IMAGES_API;
  const apiKey = process.env.IMGIX_API_KEY;
  const source = process.env.CLOUDFLARE_SOURCE_ID;

  const requestUrl = `${apiUrl}/sources/${source}${url}`;

  const headers = new Headers();
  headers.append('Content-Type', 'application/vnd.api+json');
  headers.append('Authorization', `Bearer ${apiKey}`);

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(requestUrl, config);
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.log('Error on fetching data: ', error);
  }

  return null;
}
interface IgetAssetsApi {
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

export async function getAssetsApi({ key, value }: IgetAssetsApi) {
  const url = `/assets${key ? `?filter[${key}]=${value}&sort=date_modified` : ''}`;

  const options = {
    method: 'GET',
  };

  const response = await imgixApi({ url, ...options });

  return response;
}

export async function getAssetApi(id: string) {
  const url = `/assets${id}`;

  const options = {
    method: 'GET',
  };

  const response = await imgixApi({ url, ...options });

  return response;
}
