import * as Yup from "yup";

const stringValidation = Yup.string()
  .matches(/^[a-zA-Z\s]*$/, "This field should not contain numbers")
  .required("Required");

export const experienceValues = {
  title: "",
  company: "",
  startMonth: "",
  startYear: "",
  endMonth: "",
  current: false,
  city: "",
  country: "",
  description: "",
};

const experienceValidation = Yup.object().shape({
  title: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  startMonth: Yup.string().required("Required"),
  startYear: Yup.string().required("Required"),
  endMonth: Yup.string().when('current', {
    is: false, 
    then: Yup.string().required("Required"), 
    otherwise: Yup.string() 
  }),
  endYear: Yup.string().when('current', {
    is: false,
    then: Yup.string().required("Required"),
    otherwise: Yup.string()
  }),
  current: Yup.boolean().required("Required"),
  city: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  description: Yup.string(),
});

export const educationValues = {
  school: "",
  degree: "",
  fieldOfStudy: "",
  startMonth: "",
  startYear: "",
  endMonth: "",
  current: false,
  endYear: "",
  description: "",
};

const educationValidation = Yup.object().shape({
  school: Yup.string().required("Required"),
  degree: Yup.string(),
  fieldOfStudy: Yup.string().required("Required"),
  startMonth: Yup.string().required("Required"),
  startYear: Yup.string().required("Required"),
  endMonth: Yup.string().when('current', {
    is: false, 
    then: Yup.string().required("Required"), 
    otherwise: Yup.string() 
  }),
  endYear: Yup.string().when('current', {
    is: false,
    then: Yup.string().required("Required"),
    otherwise: Yup.string()
  }),
  current: Yup.boolean().required("Required"),
  description: Yup.string(),
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

export const userProfileValues = {
  title: "",
  experience: [experienceValues],
  skills: [],
  education: [educationValues],
  languages: [languageValues],
  services: [],
  bio: "",
  photoUrl: "https://example.com/photo.jpg",
  dob: null,
  city: "",
  country: "",
  address: "",
  freelancedBefore: "",
  freelancingGoal: "",
  hourlyRate: "",
  zipCode: "",
};

export const userProfileSchema = Yup.object().shape({
  title: stringValidation,
  experience: Yup.array()
    .of(experienceValidation)
    .required("At least one experience is required"),
  skills: Yup.array()
    .max(15, "Max skills reached")
    .min(1, "At least one skill is required")
    .required(),
  education: Yup.array()
    .of(educationValidation)
    .required("At least one education is required"),
  languages: Yup.array()
    .of(languageValidation)
    .required("At least one language is required"),
  services: Yup.array()
    .max(15, "Max services reached")
    .min(1, "At least one service is required")
    .required(),
  bio: Yup.string()
    .min(100, "The overview cannot be less than 100 characters")
    .required("This field is required"),
  hourlyRate: Yup.string().required("Hourly rate is required"),
  freelancedBefore: Yup.string().required("Required"),
  freelancingGoal: Yup.string().required("Required"),
  photoUrl: Yup.string().required("Required"),
  dob: Yup.date().required("Required"),
  city: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  zipCode: Yup.string().max(10, "Zip code is not valid"),
});
