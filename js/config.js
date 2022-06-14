export default class Config {
    static wordCompare = 'Comparison';
    static wordSwap = 'Swapping';
    static wordTime = 'Times ';
    static wordSmall = 'Small';
    static wordLarge = 'Large';

    static algorithmToTitle = {
        'array_sort': 'Free (Array)',
        'tree_sort': 'Free (Tree)',
        'bubble_sort': 'Bubble Sort',
        'selection_sort': 'Selection Sort',
        'selection_sort_slow': 'Selection Sort (Slow)',
        'heap_sort': 'Heap Sort',
    };

    static pattern = {
        'Pattern 1-1': [65, 83, 31, 22, 59, 46, 19],
        'Pattern 1-2': [92, 20, 85, 50, 37, 76, 61],
        'Pattern 1-3': [87, 32, 15, 28, 75, 52, 47],
        'Pattern 2-1': [55, 71, 12, 43, 80, 36, 93],
        'Pattern 2-2': [40, 22, 18, 93, 51, 67, 34],
        'Pattern 2-3': [43, 13, 27, 90, 88, 72, 55],
        'Pattern 3-1': [62, 81, 35, 22, 51, 47, 11],
        'Pattern 3-2': [26, 87, 57, 93, 34, 70, 68],
        'Pattern 3-3': [19, 21, 56, 45, 97, 82, 73],
        'Pattern 3-1 (From the middle)': [62, 81, 35, 22, 51, 47, 11],
        'Pattern 3-2 (From the middle)': [26, 87, 57, 93, 34, 70, 68],
        'Pattern 3-3 (From the middle)': [19, 21, 56, 45, 97, 82, 73],
    };

    static patternOnTheWay = [
        'Pattern 3-1 (From the middle)',
        'Pattern 3-2 (From the middle)',
        'Pattern 3-3 (From the middle)',
    ];
}
