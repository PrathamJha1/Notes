var maxNumberOfFamilies = function (n, reservedSeats) {
    // Sort by row, then by column (just like you did!)
    reservedSeats.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    let ans = 0;
    let processedRows = 0;
    let i = 0;
    const m = reservedSeats.length;
    
    while (i < m) {
        let currentRow = reservedSeats[i][0];
        processedRows++; // Keep track of how many rows have reservations
        
        let leftBlocked = false;
        let midBlocked = false;
        let rightBlocked = false;
        
        // Process all reserved seats for this specific row
        while (i < m && reservedSeats[i][0] === currentRow) {
            let col = reservedSeats[i][1];
            
            if (col >= 2 && col <= 5) leftBlocked = true;
            if (col >= 4 && col <= 7) midBlocked = true;
            if (col >= 6 && col <= 9) rightBlocked = true;
            
            i++;
        }
        
        // Figure out how many families we can fit in this row
        if (!leftBlocked && !rightBlocked) {
            ans += 2; // Both sides are completely free
        } else if (!leftBlocked || !rightBlocked || !midBlocked) {
            ans += 1; // At least one of the three options is free
        }
    }
    
    // Any row with absolutely no reservations gets 2 families
    const emptyRows = n - processedRows;
    ans += emptyRows * 2;
    
    return ans;
};