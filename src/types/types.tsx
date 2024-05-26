export type Size = "small" | "medium";

export type Type = "text" | "outlined" | "contained";

export type Message = string;

export type Name =
  | "firstName"
  | "lastName"
  | "dateOfBirth"
  | "disorder"
  | "gender"
  | "workspaces"
  | `disorder.${number}`
  | `workspaces.${number}`
  | `workspaces.${number}.value`;

export interface FormInput {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  disorder: Array<number>;
  gender: string;
  workspaces: { value: string }[];
}
