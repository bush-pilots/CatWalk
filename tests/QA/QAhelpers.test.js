const helpers = require('../../client/src/components/QA/componentHelpers.js');

//unit tests for QA module helper functions

  describe('Date format ("DF") helper for answer component should format input date properly',  () => {

    ('formats a date from API to \"full-month day, year\" format', () => {
    const date = '2018-08-18T00:00:00.000Z';
    expect(helpers.formatDate(date)).toMatch('August 18, 2018')
  });

});

  describe('Email validator ("EV") helper for modal component should properly detect if an input email is formatted properly', () => {

    it('should detect if @ symbol is missing', () => {
      const email = "bobjohnson.com";
      expect(helpers.validateEmail(email)).toBe(false);
    });

    it('should detect if \'.com\' is missing from input email', () => {
      const email = 'bobjohnson@';
      expect(helpers.validateEmail(email)).toBe(false);
    });

    it('should return true for a properly formatted email', () => {
      const email = 'bobjohnson22@gmail.com';
      expect(helpers.validateEmail(email)).toBe(true);
    });

});

  describe('Input validator (IV) helper for modal component should properly verify inputs', () => {

    it('should detect if question or answer input is empty', () => {
      const inputs = {questionOrAnswer: '', nickname: 'a', email: 'bob@gmail.com'};
      expect(helpers.validateInputs(inputs)).toBe(false);
    });

    it('should detect if nickname input is empty', () => {
      const inputs = {questionOrAnswer: 'a', nickname: '', email: 'bob@gmail.com'};
      expect(helpers.validateInputs(inputs)).toBe(false);
    });

    it('should detect if email input is empty', () => {
      const inputs = {questionOrAnswer: 'a', nickname: 'b', email: ''};
      expect(helpers.validateInputs(inputs)).toBe(false);
    });

    it('should detect if question or answer input is over 1000 chars', () => {
      const inputs = {questionOrAnswer: 'a'.repeat(1001), nickname: 'a', email: 'bob@gmail.com'};
      expect(helpers.validateInputs(inputs)).toBe(false);
    });

    it('should detect if nickname input is over 60 chars', () => {
      const inputs = {questionOrAnswer: 'a', nickname: 'b'.repeat(61), email: 'bob@gmail.com'};
      expect(helpers.validateInputs(inputs)).toBe(false);
    });

    it('should detect if email input is over 60 chars', () => {
      const inputs = {questionOrAnswer: 'a', nickname: 'b', email: 'a'.repeat(55) + '@gmail.com'};
      expect(helpers.validateInputs(inputs)).toBe(false);
    });

  });



