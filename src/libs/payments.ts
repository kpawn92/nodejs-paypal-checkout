import * as fs from 'fs';

export const payments = (pay: any) => {
    try {
        fs.appendFileSync('payments.txt', JSON.stringify(pay) + ',\n');
    } catch (e) {
        console.error(e);
    }
};
