import { PlaceItem, WeatherItem } from "../../../helpers/api";

export type WeatherSchema = {
  selectedPlace: PlaceItem | false;
  currentWeatherItem: WeatherItem | false;
  isLoading: boolean;
};
