import { FormFieldMetaDataProps } from "./form-metadata";

const contactDetails: FormFieldMetaDataProps[] = [
    {
        id: "name",
        label: "Name",
        type: "select",
        options: [{
            label: "First",
            value: "First"
        }],
        rules: [{
            required: true,
            message: "Name is required"
        }]
    },
    {
        id: "mobile",
        label: "Mobile",
        type: "text",
    },
    {
        id: "email",
        label: "Email",
        type: "text",
    },
    {
        id: "company-email",
        label: "Company e-mail",
        type: "text",
    },
    {
        id: "website",
        label: "Website",
        type: "text",
    },
    {
        id: "phone",
        label: "Phone",
        type: "text",
    },
]

export {
    contactDetails
}