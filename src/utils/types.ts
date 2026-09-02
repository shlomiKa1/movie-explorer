interface ImageProp {
  medium: string;
  orginal: string;
}

export interface MovieProp {
  id: number;
  name: string;
  language: string;
  image: ImageProp;
  summary: string;
  geners?: string[];
}

export interface MoviesProp {
  movies: MovieProp[];
}
