# Structure Overview

### :package:

```
~
├── packages
│   ├── x
│   │   ├── lib
│   │   │   └── x.js
│   │   ├── package.json
│   │   ├── README.md
│   │   └── test
│   │       ├── helpers
│   │       │   └── is-function.js
│   │       └── x.spec.js
│   └── y
│       ├── lib
│       │   └── y.js
│       ├── package.json
│       ├── README.md
│       └── test
│           ├── helpers
│           │   └── is-function.js
│           └── y.spec.js
```

### :book:

```
~
├── README.md
└── docs
    └── STRUCTURE.md
```

### :gear:

```
~
├── lerna.json
├── package.json
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .huskyrc.js
├── .lintstagedrc.json
├── commitlint.config.js <- config/commitlint
└── config
    └── commitlint
        ├── commitlint.config.js
        ├── package.json
        └── README.md
```
