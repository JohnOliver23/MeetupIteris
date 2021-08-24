export interface IComment {
  id: string;
  name: string;
  text: string;
}

export interface IMeetup {
  id: string;
  title: string;
  formattedTitle?: string;
  description: string;
  comments: IComment[];
}
export interface IRow {
  index: number;
  style: any;
  data: IMeetup[];
}
