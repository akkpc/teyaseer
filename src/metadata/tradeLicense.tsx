import { FormFieldMetaDataProps } from "./form-metadata";

const tradeLicense: FormFieldMetaDataProps[] = [
    {
        label: "Trade license activities",
        id: "trade_license_activities",
        type: "text",
    },
    {
        label: "Expiry date",
        id: "expiry_date",
        type: "date",
    },
    {
        label: "Licensed engineers",
        id: "licensed_engineers",
        type: "text",
    },
    {
        label: "Capacity/Quota",
        id: "capacity_quota",
        type: "text",
    }
]

export {
    tradeLicense
}