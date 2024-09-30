import { FormFieldMetaDataProps } from "./form-metadata";

const villaProjects: FormFieldMetaDataProps[] = [
    {
        label: "Number of completed villas",
        id: "number_of_complted_villas",
        type: "text",
    },
    {
        label: "Number of ongoing villas",
        id: "number_of_ongoing_villas",
        type: "text",
    },
    {
        label: "Number of on-hold villas",
        id: "number_of_on_hold_villas",
        type: "text",
    }
]

export {
    villaProjects
}