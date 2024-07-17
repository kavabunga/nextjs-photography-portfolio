import { getAssetDataApi, getAssetPlaceholderApi } from '../api';
import type { IAssetData, IAssetRichData } from '../types';

interface IsortImagesByOrder extends Array<IAssetRichData> {}

export function sortImagesByOrder(data: IsortImagesByOrder) {
  return data.sort((a, b) => {
    if (a.attributes.custom_fields.order && b.attributes.custom_fields.order) {
      return (
        Number(a.attributes.custom_fields.order) -
        Number(b.attributes.custom_fields.order)
      );
    }
    return -1;
  });
}

interface IgetAssetsRichData extends Array<IAssetData> {}

export async function getAssetsRichData(
  data: IgetAssetsRichData
): Promise<Array<IAssetRichData>> {
  const richData = await Promise.all(
    data.map(async (item) => {
      const metadata = await getAssetDataApi(item.attributes.origin_path);
      const placeholder = await getAssetPlaceholderApi(
        item.attributes.origin_path
      );

      return {
        ...item,
        metadata,
        placeholder,
      };
    })
  );
  return richData;
}
