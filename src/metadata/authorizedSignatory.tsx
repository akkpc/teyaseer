import { FormFieldMetaDataProps } from "./form-metadata";

const authorizedSignatory: FormFieldMetaDataProps[] = [
    {
        id: "as_name",
        label: "Name",
        type: "text",
    },
    {
        label: "EID",
        id: "eid",
        type: "text",
    }
]

export {
    authorizedSignatory
}