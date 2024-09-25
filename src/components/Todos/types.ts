export type FilterProps = {
  filter: string;
  setFilter: (filter: string) => void;
};
export type Todo = {
  task: string;
  description?: string;
  status: boolean;
};
export type Filter = {
  prettyName: string;
  name: string;
};
