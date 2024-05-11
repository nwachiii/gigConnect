import * as Yup from "yup";
import { months } from ".";

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
    then: () => Yup.string().required("Required"), 
    otherwise: () => Yup.string() 
  }),
  endYear: Yup.string().when('current', {
    is: false,
    then: () => Yup.string().required("Required"),
    otherwise: () => Yup.string()
  }),
  current: Yup.boolean().required("Required"),
  city: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  description: Yup.string(),
}).test('date-test', function(value) {
  const { startMonth, startYear, endMonth, endYear } = value;
  const startDate = new Date(startYear, months.indexOf(startMonth));
  const endDate = new Date(endYear, months.indexOf(endMonth));
  if (endDate < startDate) {
    return this.createError({ path: `${this.path}.endMonth`, message: 'End date should not be earlier than start date' })
  } else if (startDate > endDate) {
    return this.createError({ path: `${this.path}.startMonth`, message: 'Start date should not be later than end date' })
  }
  return true;
});;

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
    then: () => Yup.string().required("Required"),
    otherwise: () => Yup.string()
  }),
  endYear: Yup.string().when('current', {
    is: false,
    then: () => Yup.string().required("Required"),
    otherwise: () => Yup.string()
  }),
  current: Yup.boolean().required("Required"),
  description: Yup.string(),
}).test('date-test', function(value) {
  const { startMonth, startYear, endMonth, endYear } = value;
  const startDate = new Date(startYear, months.indexOf(startMonth));
  const endDate = new Date(endYear, months.indexOf(endMonth));
  if (endDate < startDate) {
    return this.createError({ path: `${this.path}.endMonth`, message: 'End date should not be earlier than start date' })
  } else if (startDate > endDate) {
    return this.createError({ path: `${this.path}.startMonth`, message: 'Start date should not be later than end date' })
  }
  return true;
});

export const languageValues = {
  name: "English",
  proficiency: "",
};

const languageValidation = Yup.object().shape({
  name: Yup.string().required("Required"),
  proficiency: Yup.string().required("Required"),
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
  photoUrl: "",
  dob: null,
  city: "",
  country: "",
  address: "",
  freelancedBefore: "",
  freelancingGoal: "",
  hourlyRate: "",
  zipCode: "",
  state: '',
  phoneNumber: "",
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
  state: Yup.string(),
  phoneNumber: Yup.string().matches(
    /^\+?(\d{10,13})$/,
    "Phone number is not valid"
  ),
});