export interface CityResponse {
  name: string;
  local_names?: LocalName[];
  lat: string;
  lon: string;
  country?: string;
  state?: string;
}

interface LocalName {
  [key: string]: string;
}
