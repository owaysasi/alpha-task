//React
import { useMemo, useState } from "react";
//MUI
import {
  Alert,
  Checkbox,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

//Form
import { Controller, Form, useForm, useFieldArray } from "react-hook-form";
import "dayjs/locale/en-gb";

//Core components
import { AlphaButton } from "../../Components/alpha-button/alpha-button";
import { AlphaInput } from "../../Components/alpha-input/alpha-input";
import { AlphaFormControlLabel } from "../../Components/alpha-form-control-label/alpha-form-control-label";

//Routing
import { useNavigate } from "react-router-dom";

const disorderList = [
  { name: "PD", Id: 1 },
  { name: "ET", Id: 2 },
  { name: "Dyst_G", Id: 3 },
  { name: "Dyst_NG", Id: 4 },
  { name: "OCD", Id: 5 },
  { name: "Tourette", Id: 6 },
  { name: "Epilepsy", Id: 7 },
  { name: "Other", Id: 8 },
];

const workspaceOptions = ["option1", "option2", "option3"];

interface FormInput {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  disorder: Array<string>;
  gender: string;
  workspaces: { value: string }[];
}

const defaultValues = {
  firstName: "",
  lastName: "",
  dateOfBirth: "1999-12-31",
  disorder: [],
  gender: "",
  workspaces: [{ value: "" }],
};

export function UserDetailsPage() {
  const {
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues,
  });

  const { fields, append } = useFieldArray({
    name: "workspaces",
    control,
  });

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [formData, setFormData] = useState<string>("");

  const navigate = useNavigate();

  const onSubmit = (data: FormInput) => {
    formDataFormatter(data);
    setShowAlert(true);
    reset(defaultValues);
  };

  const onChangeCheckbox = (Id: string, CallBack: () => void) => {
    if (!getValues("disorder").includes(Id)) {
      CallBack([...getValues("disorder"), Id]);
    } else {
      CallBack([...getValues("disorder").filter((item) => item !== Id)]);
    }
  };

  const MemoizedCheckbox = (field: object = {}) => {
    const memoizedComponent = useMemo(
      () => (
        <Grid
          container
          spacing={1}
          justifyContent="flex-start"
          style={{ width: "auto" }}
        >
          <Grid item container alignItems="flex-start">
            {disorderList.map((item) => (
              <Grid item xs={6} sm={4} md key={item.Id}>
                <AlphaFormControlLabel
                  control={
                    <Checkbox
                      // {...field}
                      value={item.Id}
                      onChange={() => onChangeCheckbox(item.Id, field.onChange)}
                    />
                  }
                  label={item.name}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      ),
      [getValues("disorder").length, errors]
    );
    return memoizedComponent;
  };

  const formDataFormatter = (data: FormInput) => {
    setFormData("");
    let formattedData = "";
    Object.keys(data).forEach((key) => {
      switch (key) {
        case "dateOfBirth":
          formattedData += `${key}: ${data[key].toLocaleString()}, `;
          break;
        case "disorder":
          formattedData += `${key}: ${data[key].map((item: string) => item)}, `;
          break;
        case "workspaces":
          formattedData += `${key}: ${data[key].map(
            (item: object) => item.value
          )}, `;
          break;
        default:
          formattedData += `${key}: ${data[key]}, `;
          break;
      }
      setFormData(formattedData);
    });
  };

  return (
    <div style={{ width: "100%" }}>
      {showAlert && (
        <Alert
          severity="success"
          onClose={() => {
            setShowAlert(false);
          }}
        >
          <Typography variant="h5">Form submitted successfully!</Typography>
          <Typography>{formData}</Typography>
        </Alert>
      )}
      <Typography
        textAlign="left"
        variant="h4"
        marginBottom={2}
        justifyContent="flex-start"
      >
        Add a patient
      </Typography>
      <Form
        onSubmit={(res) => onSubmit(res.data)}
        onError={() => {
          alert("Submission has failed.");
        }}
        control={control}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container direction="column" spacing={4}>
            <Grid
              item
              container
              direction="row"
              spacing={2}
              justifyContent="flex-start"
            >
              <Grid item>
                <AlphaInput
                  name="firstName"
                  control={control}
                  size="small"
                  label="First Name"
                  required={{
                    value: true,
                    message: "Please, enter first name",
                  }}
                  // {...field}
                />
              </Grid>
              <Grid item>
                <AlphaInput
                  control={control}
                  name="lastName"
                  size="small"
                  label="Last Name"
                  required={{ value: true, message: "Please, enter last name" }}
                />
              </Grid>
            </Grid>
            <Grid
              item
              direction="column"
              container
              marginLeft={1.5}
              alignItems="flex-start"
            >
              <Grid item>
                <Typography>Gender *</Typography>
              </Grid>
              <Grid item>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => {
                    return (
                      <>
                        <RadioGroup {...field}>
                          <Grid container>
                            <Grid item>
                              <AlphaFormControlLabel
                                value="male"
                                control={
                                  <Radio
                                    color={
                                      "gender" in errors ? "primary" : "default"
                                    }
                                    disableRipple
                                  />
                                }
                                label="Male"
                              />
                            </Grid>
                            <Grid item>
                              <AlphaFormControlLabel
                                value="female"
                                control={<Radio disableRipple />}
                                label="Female"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>

                        {"gender" in errors && (
                          <Typography color="error" fontSize={12}>
                            Please, select a gender
                          </Typography>
                        )}
                      </>
                    );
                  }}
                />
              </Grid>
            </Grid>
            <Grid item>
              <AlphaInput
                name="dateOfBirth"
                control={control}
                type="date"
                label="Date of birth"
                required={{ value: true }}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="flex-start"
              marginLeft={1.5}
            >
              <Grid item>
                <Typography>Disorder *</Typography>
              </Grid>
              <Grid item>
                <Controller
                  control={control}
                  rules={{ required: true }}
                  name="disorder"
                  render={({ field }) => MemoizedCheckbox(field)}
                />
                {"disorder" in errors && (
                  <Grid item>
                    <Typography color="error" fontSize={12}>
                      Please, select at least one disorder
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid
              item
              container
              spacing={2}
              alignItems="center"
              justifyContent="flex-start"
            >
              {fields.map((field, index) => (
                <Grid item key={field.id}>
                  <AlphaInput
                    name={`workspaces.${index}.value`}
                    select
                    control={control}
                    size="small"
                    label="Workspace template"
                    style={{ minWidth: 200 }}
                    required={{
                      value: true,
                    }}
                  >
                    {workspaceOptions.map((item) => (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </AlphaInput>
                  {`workspaces` in errors && (
                    <Typography
                      position="absolute"
                      marginLeft={1.5}
                      color="error"
                      fontSize={12}
                    >
                      Please, select an option
                    </Typography>
                  )}
                </Grid>
              ))}
              <Grid item>
                <AlphaButton
                  variant="outlined"
                  disableRipple
                  size="medium"
                  onClick={() => append({ value: "" })}
                >
                  Add workspace
                </AlphaButton>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={4} sm={2}>
                <AlphaButton variant="contained" type="submit" disableRipple>
                  Save
                </AlphaButton>
              </Grid>
              <Grid item xs={4} sm={2}>
                <AlphaButton disableRipple onClick={() => navigate("/")}>
                  Cancel
                </AlphaButton>
              </Grid>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </Form>
    </div>
  );
}
