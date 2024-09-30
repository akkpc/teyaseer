import { FormFieldMetaDataProps } from "./form-metadata";

const attachmentMeta: FormFieldMetaDataProps[] = [
    {
        id: "company_brochure",
        label: "Company brochure",
        type: "attachment",
        rules: [
            {
                required: true,
                message: "This is mandatory field"
            }
        ]
    }
]

export {
    attachmentMeta
}