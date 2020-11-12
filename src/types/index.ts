export interface ICharacter {
    id: string;
    status: string;
    species: string;
    type: string;
    name: string;
    gender: string;
    image: string;
    location: {
      name: string;
    }
}
  
export interface IData {
    results: ICharacter[];
    info: {
      count: number;
      pages: number;
      next: string;
      prev: string;
    }
}

export interface IEpisode {
  number: string;
}

export interface ILocation {
  name: string;
  url: string;
}