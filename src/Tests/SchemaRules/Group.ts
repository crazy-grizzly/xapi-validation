import 'mocha';
import Test from '../Helpers/Test';
import describeOptionalProp from '../DescribeOptionalProp';
import itsInvalid from '../ItsInvalid';
import agentSchema from '../Helpers/AgentSchema';
import { agent, subGroup } from '../Factory';

export default (test: Test) => {
  subGroup(test);
  describe('member', () => {
    subGroup((value, valid) =>
      test({
        objectType: 'Group',
        name: 'Test',
        mbox: 'mailto:test@example.com',
        member: [value],
      }, valid)
    );
  });
  agentSchema(test);
};
