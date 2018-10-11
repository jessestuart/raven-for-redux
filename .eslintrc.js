module.exports = {
    "extends": [
        "prettier"
    ],
    "plugins": [
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "prefer-arrow-callback": "error"
    },
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "env": {
        "jest": true,
        "node": true,
        "es6": true
    }
}
