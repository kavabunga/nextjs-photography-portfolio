import { IImageData } from '../types';

interface IsortImagesByOrder extends Array<IImageData> {}

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
