class SchamaFormBasicUsageController {

    public bootstrapSuccessful: boolean;
    public schema: any;
    public form: any;
    public model: any;

    static $inject = ['$scope', '$timeout', '$q'];

    private invalidSwitcher: boolean = false;

    constructor(
        private $scope: ng.IScope,
        private $timeout: ng.ITimeoutService,
        private $q: ng.IQService) {
        this.bootstrapSuccessful = true;
        this.setupForm();
    }

    private setupForm = (): void => {
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
            //'name', //without additional configuration use just filed name as string
            {
                key: 'name',
                validationMessage: {                    
                    forbidden: '{{viewValue}} is forbidden !!!'
                },
                $asyncValidators: {
                    forbidden: (value: string) => {
                        var deferred = this.$q.defer();
                        this.$timeout(function () {
                            if (value === 'Java') {
                                deferred.reject();
                            } else {
                                deferred.resolve();
                            }
                        }, 500);
                        return deferred.promise;
                    }
                }
            },
            {
                key: 'title',
                validationMessage: {
                    noBob: 'NaN is not OK! You here me?'
                },
                $validators: {
                    noBob: (value: string) => {
                        if (value === 'NaN') {
                            return false;
                        }
                        return true
                    }
                }
            },
            'email',
            {
                key: 'comment',
                type: 'textarea',
                placeholder: 'Make a comment',
                validationMessage: {
                    // {{title}} -> https://github.com/json-schema-form/angular-schema-form/blob/master/docs/index.md#message-interpolation
                    302: '{{title}} is like, uh, required?'
                    //302: ctx => 'Comment is like, uh, required?'
                }
            },
            {
                type: 'submit',
                title: 'Save'
            }
        ];
        this.model = {};
    };

    public onSubmit = (form: any): void => {
        // First we broadcast an event so all fields validate themselves
        this.$scope.$broadcast('schemaFormValidate');

        // Then we check if the form is valid
        if (form.$valid) {
            // ... do whatever you need to do with your data.
        }
    };

    public makeInvalid = (): void => {

        this.invalidSwitcher = !this.invalidSwitcher;

        if (this.invalidSwitcher) {
            this.$scope.$broadcast('schemaForm.error.name', 'usernameAlreadyTaken', 'The username is already taken');
        } else {
            this.$scope.$broadcast('schemaForm.error.name', 'usernameAlreadyTaken', true);
        };
    };
}

export default SchamaFormBasicUsageController;