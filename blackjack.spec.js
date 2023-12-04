describe('Tests for the blackjack dealer should draw function', () => {

    describe('10, 9 passed in to function', () => {

        it('should return false', () => {
            const hand = [
                { 
                    suit: 'hearts',
                    val: 10,
                    displayVal: 'Ten'
                },
                {
                    suit: 'spades',
                    val: 9,
                    displayVal: 'Nine'
                },
            ]

            const result = dealerShouldDraw(hand);

            expect(result).toBe(false);

        });
    
    });

    describe('Ace, 6 passed in to function', () => {

        it('should return true', () => {
            const hand = [
                { 
                    suit: 'hearts',
                    val: 11,
                    displayVal: 'Ace'
                },
                {
                    suit: 'spades',
                    val: 6,
                    displayVal: 'Six'
                },
            ]

            const result = dealerShouldDraw(hand);

            expect(result).toBe(true);

        });
    
    });
    
    describe('10, 6, Ace passed in to function', () => {

        it('should return false', () => {
            const hand = [
                { 
                    suit: 'hearts',
                    val: 10,
                    displayVal: 'Ten'
                },
                {
                    suit: 'spades',
                    val: 6,
                    displayVal: 'Six'
                },
                { 
                    suit: 'hearts',
                    val: 11,
                    displayVal: 'Ace'
                },
            ]

            const result = dealerShouldDraw(hand);

            expect(result).toBe(false);

        });
    
    });

    describe('2, 4, 2, 5 passed in to function', () => {

        it('should return true', () => {
            const hand = [
                { 
                    suit: 'hearts',
                    val: 2,
                    displayVal: 'Two'
                },
                {
                    suit: 'spades',
                    val: 4,
                    displayVal: 'Four'
                },
                { 
                    suit: 'diamonds',
                    val: 2,
                    displayVal: 'Two'
                },
                { 
                    suit: 'diamonds',
                    val: 5,
                    displayVal: 'Five'
                },
            ]

            const result = dealerShouldDraw(hand);

            expect(result).toBe(true);

        });
    
    });

});