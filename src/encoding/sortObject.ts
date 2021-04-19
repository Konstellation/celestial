/**
 * Sorts object values by keys
 */
function sortObject(obj: Record<string, any>): Record<string, any> {
    if (typeof obj !== 'object') return obj;

    return Object.keys(obj)
        .sort()
        .reduce((prev: Record<string, any>, curr: string) => {
            prev[curr] = sortObject(obj[curr]);
            return prev;
        }, {});
}

export default sortObject;
