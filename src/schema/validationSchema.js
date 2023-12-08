import * as yup from "yup";

export const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("First Name is required")
        .matches(
            /^[A-ÿ]{2,}[A-ÿ\-\s]*$/,
            "Please use only letters and enter at least 2 characters."
        )
        .max(30)
        .min(2),
    lastName: yup
        .string()
        .required("Last Name is required")
        .matches(
            /^[A-ÿ]{2,}[A-ÿ\-\s]*$/,
            "Please use only letters and enter at least 2 characters."
        )
        .max(30)
        .min(2),

    dateOfBirth: yup
        .string()
        .required("Date of Birth is required. Date must be in the past.")
        .max(new Date(), "Date must be in the past")
        .matches(
            /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/,
            "Please enter your date of birth in mm/dd/yyyy format"
        ),
    startDate: yup
        .string()
        .required("Start Date is required. Date must be in the past.")
        .max(new Date(), "Date must be in the past")
        .matches(
            /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/,
            "Please enter your start date in mm/dd/yyyy format"
        ),
    department: yup.string().required("Department is required"),

    street: yup.string().required("Street is required").max(50).min(2),
    city: yup.string().required("City is required").max(50).min(2),
    state: yup.string().required("State is required"),

    zipCode: yup
        .string()
        .matches(/^[0-9]{5}$/, "Zip code must be a 5-digit number")
        .required("Zip Code is required"),
});
