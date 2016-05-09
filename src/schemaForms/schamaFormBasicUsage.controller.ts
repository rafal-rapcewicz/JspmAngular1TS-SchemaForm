class SchamaFormBasicUsageController {
    bootstrapSuccessful: boolean;
    schema: any;
    form: any;
    model: any;

    constructor() {
        this.bootstrapSuccessful = true;
        this.schema = {
            type: 'object',
            title: 'Comment',
            properties: {
                name: {
                    type: 'string',
                    minLength: 2,
                    title: 'Name',
                    description: 'Name or alias'
                },
                title: {
                    type: 'string',
                    enum: ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
                },
                email: {
                    title: 'Email',
                    type: 'string',
                    pattern: '^\\S+@\\S+$',
                    description: 'Email will be used for evil.'
                },
                comment: {
                    title: 'Comment',
                    type: 'string',
                    maxLength: 20,
                    validationMessage: 'Don\'t be greedy!'
                }
            },
            required: ['name', 'email', 'comment']
        };
        this.form = [
            'name',
            'title',
            'email',
            {
                key: 'comment',
                type: 'textarea',
                placeholder: 'Make a comment'
            },
            {
                type: 'submit',
                title: 'Save'
            }
        ];
        this.model = {};
    }
}

export default SchamaFormBasicUsageController;