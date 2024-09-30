import { FormFieldMetaDataProps } from "./form-metadata";

const insuranceMeta: FormFieldMetaDataProps[] = [
    {
        label: "Profesional indemnity status",
        id: "professional_indemnity_status",
        type: "text",
    },
    {
        label: "Professional indemnity coverage limit",
        id: "professional_indemnity_coverage_limit",
        type: "text",
    },
    {
        label: "Workmanship status",
        id: "workmanship_status",
        type: "text",
    },
    {
        label: "Workmanship coverage limit",
        id: "workmanship_coverage_limit",
        type: "text",
    }
]

export {
    insuranceMeta
}