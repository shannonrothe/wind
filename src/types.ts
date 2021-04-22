export type BaseProps<T = string> = {
  children?: React.ReactNode;
  disabled?: boolean | undefined;
  id?: string;
  value?: T;
};
