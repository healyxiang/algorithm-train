var findRelativeRanks = function(score) {
    let heap = [[Number.MAX_SAFE_INTEGER, -1]]
    for (let i = 0; i < score.length; i++) {
        let j = 0;
        for (j = heap.length; heap[Math.floor(j/2)][0] < score[i]; j = Math.floor(j/2)) {
            heap[j] = heap[Math.floor(j/2)]
        }
        heap[j] = [score[i], i]
    }
    console.log('heap:', heap)
    for (let j = 0; j < score.length; j++) {
        
        // console.log('heap[1]:', heap[1])
        const [maxScore, maxIndex] = heap[1];
        if (j === 0) {
            score[maxIndex]  = 'Gold Medal'
        }
        if (j === 1) {
            score[maxIndex]  = 'Silver Medal'
        }
        if (j === 2) {
            score[maxIndex]  = 'Bronze Medal'
        }
        if (j > 2) {
            score[maxIndex]  = `${j+1}`
        }
        // console.log('score:', score)
        let child = 0;
        let last = heap[heap.length-1];
        heap.pop()

        let i = 1;
        for (; i*2 < heap.length; i = child) {
            child = 2 * i;
            if (child < heap.length-1 && heap[child +1][0] > heap[child][0]) {
                child++;
            }
            if (last[0] < heap[child][0]) {
                heap[i] = heap[child]
                console.log('i:', heap[i])
                // heap[i] = last;
                // break;
            } else {
                break;
            }
        }
        heap[i] = last;
        // heap.pop()
    }
    console.log('score:', score)
    return score;
};

let score = [10, 3, 8, 9, 4]

findRelativeRanks(score)