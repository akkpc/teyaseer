import { contactDetails } from "./contactDetails";
import { vendorClassificationMetadata } from "./vendorClassification";

export interface FormFieldMetaDataProps {
    id: string,
    label: string;
    type: "text" | "date" | "select" | "multiselect",
    options?: {
        value: string,
        label: string
    }[],
    rules?: {
        required: boolean;
        message: string;
    }[]
}

interface FormProps {
    id: number;
    label: string;
    metadata: FormFieldMetaDataProps[]
}

export const formMetaData: FormProps[] = [
    {
        id: 1,
        label: "Vendor classification",
        metadata: vendorClassificationMetadata
    },
    {
        id: 2,
        label: "Contact details",
        metadata: contactDetails
    },
]