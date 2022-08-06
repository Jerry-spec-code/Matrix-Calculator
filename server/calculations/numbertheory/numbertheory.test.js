const {prime_factorization, solution, lower_primes, units, errFree} = require("./numbertheory");

describe('Error Checking', () =>  {
    test('0', () => {
        const result = errFree('0');
        expect(result).toBeFalsy();
    })

    test('1 - 1000', () => {
        for(let n = 1; n < 1000; n++) {
            const result = errFree(n.toString());
            expect(result).toBeTruthy();
    }});

    test('-1', () => {
        const result = errFree('-1');
        expect(result).toBeFalsy();
    })

    test('3.14', () => {
        const result = errFree('3.14');
        expect(result).toBeFalsy();
    })

    test('1.0', () => {
        const result = errFree('1.0');
        expect(result).toBeFalsy();
    })

    test('pi', () => {
        const result = errFree('pi');
        expect(result).toBeFalsy();
    })

    test('12abc', () => {
        const result = errFree('12abc');
        expect(result).toBeFalsy();
    })

    
})

describe('Prime Factorization', () =>  {
    test('1', () => {
        const result = prime_factorization('1');
        expect(result).toBe("There is no prime factorization. ");
    })

    test('2', () => {
        const result = prime_factorization('2');
        expect(result).toBe("Here is the prime factorization: 2");
    })

    test('18', () => {
        const result = prime_factorization('18');
        expect(result).toBe("Here is the prime factorization: 2 * 3^2");
    })

    test('60', () => {
        const result = prime_factorization('60');
        expect(result).toBe("Here is the prime factorization: 2^2 * 3 * 5");
    })

    test('110', () => {
        const result = prime_factorization('110');
        expect(result).toBe("Here is the prime factorization: 2 * 5 * 11");
    })

    test('991', () => {
        const result = prime_factorization('991');
        expect(result).toBe("Here is the prime factorization: 991");
    })

})

describe('Lower Primes', () => {
    test('1', () => {
        const result = lower_primes('1');
        expect(result).toBe("There are no primes less than 1");
    })

    test('2', () => {
        const result = lower_primes('2');
        expect(result).toBe("There are no primes less than 2");
    })

    test('3', () => {
        const result = lower_primes('3');
        expect(result).toBe("Here are all the primes less than 3: 2");
    })

    test('60', () => {
        const result = lower_primes(60);
        expect(result).toBe("Here are all the primes less than 60: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59");
    })

    test('1000', () => {
        const result = lower_primes(1000);
        expect(result).toBe("Here are all the primes less than 1000: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997");
    })

})

describe('Primitive Roots', () => {

    for(let n = 1; n < 5; n++) {
        test(n.toString(), () => {
            const result = solution(n.toString());
            expect(result).toBe("Here are all the primitive roots (mod " + n.toString() + "): " + (n-1).toString());
        })
    }

    test('60', () => {
        const result = solution(60);
        expect(result).toBe("There are no primitive roots (mod 60).");
    })

    test('991', () => {
        const result = solution(991);
        expect(result).toBe("Here are all the primitive roots (mod 991): 6, 7, 11, 12, 22, 23, 28, 34, 41, 48, 54, 57, 63, 68, 73, 75, 83, 85, 88, 89, 92, 94, 96, 99, 108, 109, 120, 129, 131, 133, 135, 140, 146, 147, 148, 149, 156, 159, 164, 170, 174, 175, 176, 177, 178, 181, 182, 184, 185, 186, 191, 193, 194, 198, 201, 203, 206, 207, 220, 221, 224, 228, 230, 240, 252, 281, 286, 294, 300, 301, 307, 312, 319, 321, 323, 331, 350, 351, 357, 363, 365, 366, 369, 371, 381, 383, 384, 388, 390, 401, 409, 412, 413, 425, 426, 436, 437, 439, 440, 445, 448, 455, 456, 457, 460, 462, 463, 465, 466, 469, 474, 485, 486, 489, 491, 495, 497, 499, 504, 507, 513, 514, 515, 516, 519, 523, 524, 537, 539, 547, 550, 560, 570, 571, 572, 575, 592, 593, 597, 598, 600, 604, 606, 611, 612, 614, 617, 630, 631, 633, 636, 642, 653, 664, 665, 666, 669, 671, 674, 677, 678, 686, 694, 701, 703, 707, 708, 709, 712, 715, 717, 718, 723, 724, 727, 728, 731, 732, 735, 736, 741, 743, 746, 747, 750, 752, 755, 765, 772, 777, 779, 781, 787, 791, 802, 804, 819, 820, 822, 823, 826, 829, 830, 833, 836, 837, 846, 847, 852, 861, 863, 864, 868, 869, 870, 874, 887, 889, 891, 901, 911, 915, 922, 924, 929, 933, 938, 942, 946, 948, 955, 966, 970, 972, 975, 978, 981, 986, 987, 989");
    })

})

describe('Units', () => {

    test('1', () => {
        const result = units('1');
        expect(result).toBe("Here are all the units: 0");
    })

    test('2', () => {
        const result = units('2');
        expect(result).toBe("Here are all the units (mod 2): 1");
    })

    test('97', () => {
        const result = units('97');
        expect(result).toBe("Here are all the units (mod 97): 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96");
    })

})