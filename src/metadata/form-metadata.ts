import { attachmentMeta } from "./attachmentMeta";
import { authorizedSignatory } from "./authorizedSignatory";
import { categorizationMeta } from "./categorizationMeta";
import { contactDetails } from "./contactDetails";
import { insuranceMeta } from "./insuranceMeta";
import { permitsAndCertificates } from "./permitsAndCertificates";
import { tradeLicense } from "./tradeLicense";
import { vendorClassificationMetadata } from "./vendorClassification";
import { villaProjects } from "./villaProjects";

export interface FormFieldMetaDataProps {
    id: string,
    label: string;
    type: "text" | "date" | "select" | "multiselect" | "attachment",
    options?: {
        value: string,
        label: string
    }[],
    rules?: {
        required: boolean;
        message: string;
    }[],
    visibleRule?: (state: Record<string,string | string[]>, vendorType: string) => boolean;
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
    {
        id: 3,
        label: "Villa projects",
        metadata: villaProjects
    },
    {
        id: 4,
        label: "Trade license",
        metadata: tradeLicense
    },
    {
        id: 5,
        label: "Authorized signatory",
        metadata: authorizedSignatory
    },
    {
        id: 6,
        label: "Permits & Certificates",
        metadata: permitsAndCertificates
    },
    {
        id: 7,
        label: "Insurances",
        metadata: insuranceMeta
    },
    {
        id: 8,
        label: "Categorization",
        metadata: categorizationMeta
    },
    {
        id: 9,
        label: "Attachment",
        metadata: attachmentMeta
    }
]