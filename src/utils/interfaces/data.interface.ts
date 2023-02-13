export interface Section {
  id: number;
  title?: string;
  images?: Array<{
    img: string;
    title: string;
  }>;
  graphText?: string;
  stats?: StatItem[];
  formText?: string;
  formLabels?: string[];
  buttonText?: string;
}

export interface StatItem {
  title: string;
  amount: number;
}

export interface HomeData {
  id: string;
  name: string;
  description: string;
  sections: Section[];
}

export interface HomeResponse {
  data: HomeData;
}

export interface NavigationItem {
  id: number;
  title: string;
  link: string;
}

export interface NavigationResponse {
  data: NavigationItem[];
}

export interface Tile {
  icon: string;
  title: string;
  description: string;
  label: string;
}

export interface Page2Data {
  id: string;
  name: string;
  description: string;
  tiles: Tile[];
}

export interface Page2Response {
  data: Page2Data;
}

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  hasLoaded?: boolean;
}

export interface SlideData {
  data: Slide[];
}

export interface FormDataType {
  [key: string]: FormDataEntryValue;
}
