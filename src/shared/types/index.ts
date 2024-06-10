export interface IImageData {
  attributes: {
    analyzed_content_warnings: boolean;
    analyzed_faces: boolean;
    analyzed_tags: boolean;
    categories: string[];
    color_model: string;
    color_profile: string;
    colors: string | string[] | null;
    content_type: string;
    custom_fields: {
      [key: string]: string;
    };
    date_created: number;
    date_modified: number;
    description: string | null;
    dpi_height: number;
    dpi_width: number;
    face_count: number | null;
    file_size: number;
    has_frames: boolean;
    media_height: number | null;
    media_kind: string;
    media_width: number | null;
    name: string | null;
    origin_path: string;
    source_id: string;
    tags: { [key: string]: string };
    uploaded_by: string | object | null;
    uploaded_by_api: boolean;
    warning_adult: number | null;
    warning_medical: number | null;
    warning_racy: number | null;
    warning_spoof: number | null;
    warning_violence: number | null;
  };
  id: string;
  type: string;
}

export interface IImagesCollectionData {
  data: IImageData[] | null;
  included: any[];
  jsonapi: { [key: string]: string };
  meta: {
    authentication: {
      authorized: boolean;
      clientId: string | number | null;
      mode: string;
      modeTitle: string;
      tag: string;
      user: string | object | null;
    };
    cursor: {
      current: string | number | null;
      hasMore: boolean;
      next: string | number | null;
      totalRecords: string;
    };
    server: {
      commit: string;
      status: {
        healthy: boolean;
        read_only: boolean;
        tombstone: boolean;
      };
      version: string;
    };
  };
}
