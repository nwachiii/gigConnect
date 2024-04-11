import * as Yup from "yup";

export const experienceValues = {
    title: '',
    companyName: '',
    startDate: {
        month: '',
        year: ''
    },
    endDate: {
        month: '',
        year: ''
    },
    location: {
        state: '',
        country: '',
    },
    description: ''
}

const experienceValidation = Yup.object().shape({
    title: Yup.string().required('Required'),
    companyName: Yup.string().required('Required'),
    startDate: Yup.object().shape({
        month: Yup.string().required('Required'),
        year: Yup.string().required('Required')
    }),
    endDate: Yup.object().shape({
        month: Yup.string().required('Required'),
        year: Yup.string().required('Required')
    }),
    location: Yup.object().shape({
        state: Yup.string().required('Required'),
        country: Yup.string().required('Required')
    }),
    description: Yup.string().required('Required'),
});

export const experienceSchema = Yup.object().shape({
    experiences: Yup.array().of(experienceValidation)
    .required('At least one experience is required')
});


export const educationValues = {
    schoolName: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    description: '',
}

export const educationSchema = Yup.object().shape({
    schoolName: Yup.string().required('Required'),
    degree: Yup.string(),
    fieldOfStudy: Yup.string().required('Required'),
    startDate: Yup.string().required('Required'),
    endDate: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
})

export const languageValues = {
    name: '',
    proficiency: '',
}

export const languageSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    proficiency: Yup.string().required('Required'),
})

export const profileValues = {
    phoneNumber: '',
    dateOfBirth: '',
    country: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
}

export const profileSchema = Yup.object().shape({
    phoneNumber: Yup.string().matches(/^\+?(\d{10,13})$/, 'Phone number is not valid'),
    dateOfBirth: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    address: Yup.string(),
    city: Yup.string().required('Required'),
    state: Yup.string(),
    zipCode: Yup.string(),
})