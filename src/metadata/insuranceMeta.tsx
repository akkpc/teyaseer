import { FormFieldMetaDataProps } from "./form-metadata";

const insuranceMeta: FormFieldMetaDataProps[] = [
    {
        label: "Profesional indemnity status",
        id: "professional_indemnity_status",
        type: "text",
        visibleRule: (_, vendorType) => {
            if(vendorType == "consultant") return true;
            return false;
        }
    },
    {
        label: "Professional indemnity coverage limit",
        id: "professional_indemnity_coverage_limit",
        type: "text",
        visibleRule: (_, vendorType) => {
            if(vendorType == "consultant") return true;
            return false;
        }
    },
    {
        label: "Workmanship status",
        id: "workmanship_status",
        type: "text",
        visibleRule: (_, vendorType) => {
            if(vendorType == "contractor") return true;
            return false;
        }
    },
    {
        label: "Workmanship coverage limit",
        id: "workmanship_coverage_limit",
        type: "text",
        visibleRule: (_, vendorType) => {
            if(vendorType == "contractor") return true;
            return false;
        }
    }
]

export {
    insuranceMeta
}