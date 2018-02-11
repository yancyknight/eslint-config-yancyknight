module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "av": true,
        "_wuiVar": true,
        "jQuery": true,
        "er": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            // "off"
            "error",
            4,
            {
                "outerIIFEBody": 0
            }
        ],
	"no-useless-escape": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            "error",
            {"args": "none"}
        ],
        "no-console": "off"
    }
}
