import { getAssetDataApi, getAssetPlaceholderApi } from '../api';
import type { IAssetData, IAssetRichData } from '../types';

export function sortImagesByOrder<T extends (IAssetData | IAssetRichData)[]>(
  data: T
) {
  return data.sort((a, b) => {
    if (a.attributes.custom_fields.order && b.attributes.custom_fields.order) {
      return (
        Number(a.attributes.custom_fields.order) -
        Number(b.attributes.custom_fields.order)
      );
    }
    return -1;
  }) as T;
}

interface IgetAssetRichData extends IAssetData {}

export async function getAssetRichData(
  asset: IgetAssetRichData
): Promise<IAssetRichData> {
  const metadata = await getAssetDataApi(asset.attributes.origin_path);
  const placeholder = await getAssetPlaceholderApi(
    asset.attributes.origin_path
  );

  return {
    ...asset,
    metadata,
    placeholder,
  };
}

interface IgetAssetsRichData extends Array<IAssetData> {}

export async function getAssetsRichData(
  data: IgetAssetsRichData
): Promise<Array<IAssetRichData>> {
  const richData = await Promise.all(data.map(getAssetRichData));
  return richData;
}
