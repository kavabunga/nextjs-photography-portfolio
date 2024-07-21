export interface IAssetData {
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

interface IImageMetadata {
  Exif: {
    PixelYDimension: number;
    PixelXDimension: number;
    ColorSpace: number;
    ExifVersion: string;
  };
  Orientation: number;
  'Content-Type'?: string;
  Output?: Object;
  'Content-Length'?: string;
  IPTC?: {
    RecordVersion?: string;
    Byline?: Array<string>;
    DateCreated?: string;
    Copyright?: string;
    Credit?: string;
    Caption?: string;
    TimeCreated?: string;
  };
  PixelWidth: number;
  TIFF?: {
    PhotometricInterpretation?: number;
    ExifTag?: number;
    Software?: string;
    ResolutionUnit?: number;
    YResolution?: number;
    DateTime?: string;
    XResolution?: number;
    ImageWidth?: number;
    ImageLength?: number;
    Orientation?: number;
    SamplesPerPixel?: number;
    BitsPerSample?: Array<number>;
  };
  PixelHeight: number;
  XMP?: {
    Prefs?: string;
    format?: string;
    CreatorContactInfo?: string;
    MetadataDate?: string;
    creator?: string;
    Tagged?: string;
    Rating?: string;
    Credit?: string;
    Marked?: string;
    CreateDate?: string;
    ModifyDate?: string;

    DateCreated?: string;
  };
  GPS?: Object;
  ProfileName?: string;
}

export interface IAssetRichData extends IAssetData {
  metadata: IImageMetadata;
  placeholder: string | null;
}

export interface IAssetsCollectionData {
  data: IAssetData[] | null;
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
