import { FormFieldMetaDataProps } from "./form-metadata";

const yes_or_no_action = [
    {
        label: "Yes",
        value: "yes"
    },
    {
        label: "No",
        value: "no"
    },
    {
        label: "N/A",
        value: "n_a"
    }
];

const regionOptions = [
    {
        label: "Abu Dhabi",
        value: "abu_dhabi"
    },
    {
        label: "Al Ain",
        value: "al_ain"
    },
    {
        label: "Al Dhafra",
        value: "al_dhafra"
    },
]

const defaultRule = [
    {
        required: true,
        message: "This is mandatory field"
    }
]

const categorizationMeta: FormFieldMetaDataProps[] = [
    {
        id: "do_you_sign_side_contracts",
        label: "Do you sign side contracts for owners in addition to the FAB approved contracts?",
        type: "select",
        options: yes_or_no_action,
        rules: defaultRule
    },
    {
        id: "upload_side_contract",
        label: "Upload side contract",
        type: "attachment",
        options: yes_or_no_action,
        rules: defaultRule,
        visibleRule: (state) => {
            if(state["do_you_sign_side_contracts"] == "yes") return true;
            return false;
        }
    },
    {
        id: "do_you_carry_out",
        label: "Do you carry out precast work (ready-mix concrete)?",
        type: "select",
        options: yes_or_no_action,
        rules: defaultRule
    },
    {
        id: "do_you_do_cold",
        label: "Do you do cold steel construction (galvanised)?",
        type: "select",
        options: yes_or_no_action,
        rules: defaultRule
    },
    {
        id: "do_you_carry_out_expansion",
        label: "Do you carry out expansion and maintenance works?",
        type: "select",
        options: yes_or_no_action,
        rules: defaultRule
    },
    {
        id: "have_you_built",
        label: "Have you built non-housing projects",
        type: "select",
        options: yes_or_no_action,
        rules: defaultRule
    },
    {
        id: "are_you_interested",
        label: "Are you interested in unfinished projects? ",
        type: "select",
        options: yes_or_no_action,
        rules: defaultRule
    },
    {
        id: "value_of_desired_projects",
        label: "Value of desired projects",
        type: "select",
        options: [
            {
                label: "800,000 to 1,250,000",
                value: "800,000 to 1,250,000"
            },
            {
                label: "1,250,000 to 1,750,000",
                value: "1,250,000 to 1,750,000"
            },
            {
                label: "1,750,000 and above",
                value: "1,750,000 and above"
            },
        ],
        rules: defaultRule
    },
    {
        id: "which_regions",
        label: "Which regions would you like to work in?",
        type: "select",
        options: regionOptions,
        rules: defaultRule
    },
    {
        id: "select_preferred_internal_abu_dhabi",
        label: "Select preferred internal region(s) of Abu Dhabi",
        type: "text",
        rules: defaultRule,
        visibleRule: (state) => {
            if(state["which_regions"] == "abu_dhabi") return true;
            return false;
        }
    },
    {
        id: "select_preferred_internal_al_ain",
        label: "Select preferred internal region(s) of Al Ain",
        type: "text",
        visibleRule: (state) => {
            if(state["which_regions"] == "al_ain") return true;
            return false;
        }
    },
    {
        id: "select_preferred_internal_dhafara",
        label: "Select preferred internal region(s) of Al Dhafra",
        type: "text",
        visibleRule: (state) => {
            if(state["which_regions"] == "al_dhafra") return true;
            return false;
        }
    },
    {
        id: "are_you_using_sub_contractor",
        label: "Are you using a subcontractor to complete the project?",
        type: "select",
        options: yes_or_no_action,
        rules: defaultRule
    },
    {
        id: "for_which_works",
        label: "For which works do you use subcontractors?",
        type: "select",
        options: [
            { label: "Concrete work above the ground floor level", value: "concrete_above_ground" },
            { label: "Concrete work below the floor level", value: "concrete_below_ground" },
            { label: "Brickwork", value: "brickwork" },
            { label: "Plaster Works", value: "plaster_works" },
            { label: "Electrical Works", value: "electrical_works" },
            { label: "Excavation Works", value: "excavation_works" },
            { label: "Equipment", value: "equipment" },
            { label: "Painting Works", value: "painting_works" },
            { label: "Swimming Pools", value: "swimming_pools" },
            { label: "Aluminium Works", value: "aluminium_works" },
            { label: "Demolition", value: "demolition" },
            { label: "Other", value: "other" }
        ],
        rules: defaultRule,
        visibleRule: (state) => {
            if(state["are_you_using_sub_contractor"] == "yes") return true;
            return false;
        }
    },
    {
        id: "have_you_executed",
        label: "Have you executed any of the Teyaseer Villas?",
        type: "select",
        options: yes_or_no_action,
        rules: defaultRule
    },
    {
        id: "which_villas",
        label: "Which villa(s)?",
        type: "multiselect",
        options: [
            { label: "T01", value: "t01" },
            { label: "T02", value: "t02" },
            { label: "T03", value: "t03" },
            { label: "T04", value: "t04" },
            { label: "T05", value: "t05" },
            { label: "T06", value: "t06" },
            { label: "T07", value: "t07" },
            { label: "T08", value: "t08" },
            { label: "T09", value: "t09" },
            { label: "M01", value: "m01" },
            { label: "M02", value: "m02" },
            { label: "M03", value: "m03" },
            { label: "M04", value: "m04" },
            { label: "M05", value: "m05" },
            { label: "M06", value: "m06" },
            { label: "M07", value: "m07" },
            { label: "M08", value: "m08" },
            { label: "M09", value: "m09" },
            { label: "M10", value: "m10" },
            { label: "M11", value: "m11" },
            { label: "M12", value: "m12" }
        ],
        rules: defaultRule,
        visibleRule: (state) => {
            if(state["have_you_executed"] == "yes") return true;
            return false;
        }
    },
    {
        id: "in_chich_regions",
        label: "In which regions are your offices located?",
        type: "select",
        options: regionOptions,
        rules: defaultRule
    }
]

export {
    categorizationMeta
};
