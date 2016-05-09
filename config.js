System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "/src": {
      "defaultExtension": "ts"
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.5",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.5.5",
    "angular-schema-form": "github:json-schema-form/angular-schema-form@0.8.13",
    "angular-schema-form-bootstrap": "github:json-schema-form/angular-schema-form-bootstrap@0.2.0",
    "angular-ui-router": "github:angular-ui/angular-ui-router-bower@0.2.18",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "objectpath": "github:mike-marcacci/objectpath@1.2.1",
    "tv4": "github:geraintluff/tv4@1.2.7",
    "typescript": "npm:typescript@1.8.10",
    "github:angular/bower-angular-sanitize@1.5.5": {
      "angular": "github:angular/bower-angular@1.5.5"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.3"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    }
  }
});
