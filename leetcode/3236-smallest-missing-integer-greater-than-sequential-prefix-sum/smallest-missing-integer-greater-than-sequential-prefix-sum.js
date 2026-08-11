const missingInteger = A => {
    let sum = A[0];
    const seen = new Uint8Array(52);
    let seq = true;

    seen[A[0]] = 1;

    for (let i = 1; i < A.length; i++) {
        if (seq && A[i] === A[i - 1] + 1)
            sum += A[i];
        else {
            seq = false;
            if (sum > 50)
                return sum;
        }
        seen[A[i]] = 1;
    }

    for (let i = sum; i < 52; i++)
        if (!seen[i])
            return i;

    return sum;
};