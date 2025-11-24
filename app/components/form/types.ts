export interface AppFormProps {
  onSubmit: () => void | Promise<void>;
  children: React.ReactNode;
  className?: string;
}
