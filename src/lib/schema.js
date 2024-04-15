import * as Yup from "yup";

const stringValidation = Yup.string()
  .matches(/^[a-zA-Z\s]*$/, "This field should not contain numbers")
  .required("Required");

export const professionSchema = Yup.object({
  profession: stringValidation,
});

export const experienceValues = {
  title: "",
  companyName: "",
  startDate: {
    month: "",
    year: "",
  },
  endDate: {
    month: "",
    year: "",
  },
  location: {
    state: "",
    country: "",
  },
  description: "",
};

const experienceValidation = Yup.object().shape({
  title: Yup.string().required("Required"),
  companyName: Yup.string().required("Required"),
  startDate: Yup.object().shape({
    month: Yup.string().required("Required"),
    year: Yup.string().required("Required"),
  }),
  endDate: Yup.lazy((value) =>
    typeof value === "string"
      ? Yup.string().required("Required")
      : Yup.object().shape({
          month: Yup.string().required("Required"),
          year: Yup.string().required("Required"),
        })
  ),
  location: Yup.object().shape({
    state: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
  }),
  description: Yup.string(),
});

export const experienceSchema = Yup.object().shape({
  experiences: Yup.array()
    .of(experienceValidation)
    .required("At least one experience is required"),
});

export const educationValues = {
  schoolName: "",
  degree: "",
  fieldOfStudy: "",
  startDate: {
    month: "",
    year: "",
  },
  endDate: {
    month: "",
    year: "",
  },
  description: "",
};

const educationValidation = Yup.object().shape({
  schoolName: Yup.string().required("Required"),
  degree: Yup.string(),
  fieldOfStudy: Yup.string().required("Required"),
  startDate: Yup.object().shape({
    month: Yup.string().required("Required"),
    year: Yup.string().required("Required"),
  }),
  endDate: Yup.lazy((value) =>
    typeof value === "string"
      ? Yup.string().required("Required")
      : Yup.object().shape({
          month: Yup.string().required("Required"),
          year: Yup.string().required("Required"),
        })
  ),
  description: Yup.string(),
});

export const educationSchema = Yup.object().shape({
  education: Yup.array()
    .of(educationValidation)
    .required("At least one education is required"),
});

export const languageValues = {
  name: "English",
  proficiency: "",
};

const languageValidation = Yup.object().shape({
  name: Yup.string().required("Required"),
  proficiency: Yup.string().required("Required"),
});

export const skillSchema = Yup.object().shape({
  skills: Yup.array()
    .max(15, "Max skills reached")
    .min(1, "At least one skill is required")
    .required(),
});

export const serviceSchema = Yup.object().shape({
  services: Yup.array()
    .max(15, "Max services reached")
    .min(1, "At least one service is required")
    .required(),
});

export const languageSchema = Yup.object().shape({
  languages: Yup.array()
    .of(languageValidation)
    .required("At least one language is required"),
});

export const overviewSchema = Yup.object().shape({
  userOverview: Yup.string()
    .min(100, "The overview cannot be less than 100 characters")
    .required("This field is required"),
});

export const feeValues = {
  hourlyFee: "",
  serviceFee: "",
  finalFee: "",
};

export const feeSchema = Yup.object().shape({
  hourlyFee: Yup.string().required("Hourly rate is required"),
});

export const profileValues = {
  phoneNumber: "",
  dateOfBirth: null,
  country: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
};

export const profileSchema = Yup.object().shape({
  phoneNumber: Yup.string().matches(
    /^\+?(\d{10,13})$/,
    "Phone number is not valid"
  ),
  dateOfBirth: Yup.date().required("Required"),
  country: Yup.string().required("Required"),
  address: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string(),
  zipCode: Yup.string().max(10, "Zip code is not valid"),
});
