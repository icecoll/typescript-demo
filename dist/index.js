"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_1 = __importStar(require("./multiply"));
const a = 2;
const b = 22;
console.log(`${a} * ${b} = ${multiply_1.default(a, b)}`);
console.log(`3 multiply 2: ${multiply_1.multiplyByTwo(3)}`);
