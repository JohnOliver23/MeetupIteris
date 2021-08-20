export interface IComment {
  id: string;
  name: string;
  text: string;
}

export interface IMeetup {
  id: string;
  title: string;
  description: string;
  comments: IComment[];
}
