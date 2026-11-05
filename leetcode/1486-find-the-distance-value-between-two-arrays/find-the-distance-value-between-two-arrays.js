var findTheDistanceValue = function (arr1, arr2, d) {
    arr2.sort((a, b) => a - b);
    let cnt = 0;

    for (const x of arr1) {
        let left = 0,
            right = arr2.length;
        while (left < right) {
            const mid = left + ((right - left) >> 1);
            if (arr2[mid] < x) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        const p = left;

        let ok = true;
        if (p < arr2.length) {
            ok = ok && arr2[p] - x > d;
        }
        if (p - 1 >= 0 && p - 1 < arr2.length) {
            ok = ok && x - arr2[p - 1] > d;
        }

        cnt += ok ? 1 : 0;
    }
    return cnt;
};
