class SchamaFormBasicUsageController {
    bootstrapSuccessful: boolean;
    schema: any;
    form: any;
    model: any;

    constructor() {
        this.bootstrapSuccessful = true;
        this.schema = {
            type: "object",
            properties: {
                name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
                title: {
                    type: "string",
                    enum: ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
                }
            }
        };
        this.form = [
            "*",
            {
                type: "submit",
                title: "Save"
            }
        ];
        this.model = {};
    }
}

export default SchamaFormBasicUsageController;