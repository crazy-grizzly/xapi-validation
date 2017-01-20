"use strict";
require("mocha");
var AgentSchema_1 = require("../Helpers/AgentSchema");
var Factory_1 = require("../Factory");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    Factory_1.subGroup(test);
    describe('member', function () {
        Factory_1.subGroup(function (value, valid) {
            return test({
                objectType: 'Group',
                name: 'Test',
                mbox: 'mailto:test@example.com',
                member: [value],
            }, valid);
        });
    });
    AgentSchema_1.default(test);
};
