// Peoples => People
export interface IPeopleData {
  name: string;
  mass: number;
  hair_color: string;
  height: number;
  eye_color: string;
  gender: string;
}
export interface IPeopleProps {
  people: number;
  data: IPeopleData;
  page: number;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IPeoples {
  name: string;
  url: string;
}

export interface IAppData {
  page: number;
  appData: {
    count: number;
    results: IPeoples[];
  } & IPeopleData;
  people?: number;
}
