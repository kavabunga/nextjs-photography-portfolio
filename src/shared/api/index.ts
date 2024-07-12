'use server';

import { NextRequest } from 'next/server';
import { IImageData } from '../types';

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

    return response;
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
  // NOTE: Get 100 assets per request
  const url = `/assets${key ? `?filter[${key}]=${value}` : ''}&page[limit]=100&page[cursor]=0`;

  const options = {
    method: 'GET',
  };

  const images: IImageData[] = [];

  // NOTE: Reqursive function to get all paginated images at once from Imgix Api (if there are more assets then the limit selected before)
  const getPaginatedResult = async (
    requestUrl: string,
    requestOptions: any
  ) => {
    const response = await imgixApi({ url: requestUrl, ...requestOptions });

    if (!response) {
      return;
    }

    const { data, meta } = await response.json();
    images.push(...data);

    if (meta?.cursor?.hasMore !== true || meta?.cursor?.next === null) {
      return;
    }

    const regex = /(&page\[cursor\]=)(\d+)/;
    const newUrl = url.replace(regex, `$1${meta.cursor.next}`);

    await getPaginatedResult(newUrl, options);
  };

  await getPaginatedResult(url, options);

  return images;
}

export async function getAssetApi(id: string) {
  const url = `/assets${id}`;

  const options = {
    method: 'GET',
  };

  const response = await imgixApi({ url, ...options });

  if (!response) {
    return null;
  }

  const { data } = await response.json();

  return data;
}
