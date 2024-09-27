export interface FormFieldMetaDataProps {
    id: string,
    label: string;
    type: "text" | "date" | "select" | "multiselect",
    options?: {
        value: string,
        label: string
    }[]
}

const metaData: FormFieldMetaDataProps[] = [
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
    },
    {
        id: "select1",
        label: "Select1",
        type: "select",
        options: [{
            label: "1",
            value: "1"
        }, {
            label: "2",
            value: "2"
        }]
    },
    {
        id: "multiselect1",
        label: "Multi Select1",
        type: "multiselect",
        options: [{
            label: "1",
            value: "1"
        }, {
            label: "2",
            value: "2"
        }]
    },
]

export {
    metaData
}