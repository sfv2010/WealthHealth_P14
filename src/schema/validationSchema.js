import * as yup from "yup";

export const schema = yup.object().shape({
    FirstName: yup
        .string()
        .required("First Name is required")
        .matches(
            /^[A-ÿ]{2,}[A-ÿ\-\s]*$/,
            "Please use only letters in your First Name"
        )
        .max(30)
        .min(2),
    LastName: yup
        .string()
        .required("Last Name is required")
        .matches(
            /^[A-ÿ]{2,}[A-ÿ\-\s]*$/,
            "Please use only letters in your Last Name"
        )
        .max(30)
        .min(2),

    DateofBirth: yup
        .string()
        .required("Date of Birth is required")
        .matches(
            /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/,
            "Please enter your date of birth in mm/dd/yyyy format"
        )
        .required("Date of Birth is required"),
    StartDate: yup
        .string()
        .required("Start Date is required")
        .matches(
            /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/,
            "Please enter your start date in mm/dd/yyyy format"
        ),

    Street: yup.string().required("Street is required").max(50).min(2),
    City: yup.string().required("City is required").max(50).min(2),
    ZipCod: yup
        .string()
        .matches(/^[0-9]{5}$/, "Zip code must be a 5-digit number")
        .required("Zip Cod is required"),
});
