import { FormFieldMetaDataProps } from "./form-metadata";

const vendorClassificationMetadata: FormFieldMetaDataProps[] = [
    {
        id: "classification_grade",
        label: "Classification grade",
        type: "text",
    },
    {
        id: "expiry_date",
        label: "Expiry date",
        type: "date",
    },
    {
        id: "issue_date",
        label: "Issue date",
        type: "date",
    },
    {
        id: "establishment_date",
        label: "Establishment date",
        type: "date",
    }
]

export {
    vendorClassificationMetadata
}