import { romanToInt, intToRoman } from './ai_roman_to_int.js';

export function runTests() {
    const testResults = document.getElementById('test-results');
    
    function assert(condition, message) {
        if (!condition) throw new Error(message);
    }

    function test(name, callback) {
        const div = document.createElement('div');
        try {
            callback();
            div.innerHTML = `<span class="pass">✓ PASS</span>: ${name}`;
        } catch (e) {
            div.innerHTML = `<span class="fail">✗ FAIL</span>: ${name}<br>${e.message}`;
        }
        testResults.appendChild(div);
    }

    // Integer to Roman
    test('TC1: 0 → Error', () => {
        try {
          intToRoman(0);
          assert(false, 'Should throw error');
        } catch (e) {
          assert(
            e.message === "Invalid integer. Must be between 1 and 3999",
            `Expected exact message, got: "${e.message}"`
          );
        }
      });
    test('TC2: 1 → "I"', () => assert(intToRoman(1) === 'I'));
    
    test('TC3: 3999 → "MMMCMXCIX"', () => 
         assert(intToRoman(3999) === 'MMMCMXCIX'));
    
    test('TC5: 4 → "IV"', () => assert(intToRoman(4) === 'IV'));
    
    test('TC6: -9 → Error', () => {
        try {
          intToRoman(-9);
          assert(false, 'Should throw error');
        } catch (e) {
          assert(
            e.message === "Invalid integer. Must be between 1 and 3999",
            `Expected exact message, got: "${e.message}"`
          );
        }
      });
    test('TC7: 1938 → "MCMXXXVIII"', () => 
         assert(intToRoman(1938) === 'MCMXXXVIII'));

    // Roman to Integer
    test('TC1: "I" → 1', () => assert(romanToInt('I') === 1));
    
    test('TC2: "IV" → 4', () => assert(romanToInt('IV') === 4));
    
    test('TC3: "MCMXCIV" → 1994', () => 
         assert(romanToInt('MCMXCIV') === 1994));
    
    test('TC4: "IIII" → Error', () => {
        try { 
          romanToInt('IIII'); 
          assert(false, 'Should error'); 
        } catch (e) { 
          assert(e.message === "Invalid Roman numeral", 'Got: ' + e.message); 
        }
      });
    test('TC6: "ix" → Error', () => {
        try { 
          romanToInt('ix'); 
          assert(false, 'Should error'); 
        } catch (e) { 
          assert(e.message === "Invalid Roman numeral.", 'Got: ' + e.message); 
        }
      });

    test('TC7: "23" → Error', () => {
        try { romanToInt('23'); assert(false, 'Should error') }
        catch (e) { assert(e.message === 'Invalid Roman numeral.', 'Wrong message') }
    });

}