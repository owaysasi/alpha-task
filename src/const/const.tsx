// Number of rows for StarWar table
export const ROWS_PER_PAGE = 10;

// Time for search delaying
export const DEBOUNCED_PERIOD = 500;

//Add patient default values
export const defaultValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "1999-12-31",
  disorder: [],
  gender: "",
  workspaces: [{ value: "" }],
};

//Disorder options
export const disorderList = [
  { name: "PD", Id: 1 },
  { name: "ET", Id: 2 },
  { name: "Dyst_G", Id: 3 },
  { name: "Dyst_NG", Id: 4 },
  { name: "OCD", Id: 5 },
  { name: "Tourette", Id: 6 },
  { name: "Epilepsy", Id: 7 },
  { name: "Other", Id: 8 },
];

//Workspace options
export const workspaceOptions = ["option1", "option2", "option3"];
