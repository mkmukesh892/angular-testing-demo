import {getCurrencies} from './getCurrencies';
describe('getCurrencies', () => {
    it('should contain either usd, aud, and eur currencies', () => {
        expect(getCurrencies()).toContain('EUR');
    });
});
