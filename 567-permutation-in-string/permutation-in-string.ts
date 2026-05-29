function checkInclusion(s1: string, s2: string): boolean {

    const frq = new Map<string, number>();

    for (const char of s1) {

        frq.set(char, (frq.get(char) || 0) + 1);

    }

    const frq2 = new Map<string, number>();


    let l = 0, r = 0;

    while (r < s2.length) {

        frq2.set(s2[r], (frq2.get(s2[r]) || 0) + 1);

        if (r - l + 1 > s1.length) {

            frq2.set(s2[l], (frq2.get(s2[l]) || 0) - 1);
            l++;
        }

        if (r - l + 1 === s1.length) {

            let isSame: boolean = true;

            //console.log(l, r, frq, frq2);
            for (const char of s1) {
                if (frq.get(char) !== frq2.get(char)) {
                    isSame = false;
                }
            }
            if (isSame){
                return true;
            }
        }
        r++;
    }

    return false;



};