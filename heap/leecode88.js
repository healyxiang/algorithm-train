/**
 * https://leetcode.cn/problems/k-closest-points-to-origin/
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const heapArr = [[0,0]];
    // console.log('points:', points)
    function calcDistance(point) {
      console.log('point:', point)
      const distance =  Math.pow(point[0], 2) + Math.pow(point[1], 2);
      // minDistance = Math.min(minDistance, distance);
      // console.log('distance:',distance)
      return distance;
    }
    for (let j = 0; j < points.length; j++) {
      let i = heapArr.length;
      heapArr.push(points[j]);

      console.log(i, heapArr[i])
      while (calcDistance(heapArr[Math.floor(i / 2)]) > calcDistance(points[j])) {
        heapArr[i] = heapArr[Math.floor(i / 2)];
        i = Math.floor(i / 2);
      }
      heapArr[i] = points[j];
    }
    console.log('heapArr:', heapArr)
    
    const result = [];

    while(result.length < k) {
      let last = heapArr[heapArr.length - 1];
      let i = 1;
      let child = 1;
      result.push(heapArr[1]);
      for (i = 1; 2*i <= heapArr.length; i = child) {
        child = 2*i;
        if (!heapArr[child]) {
          break
        }
        if (heapArr[child] && heapArr[child +1]  && calcDistance(heapArr[child + 1]) < calcDistance(heapArr[child])) {
          child++;
        }
        console.log('child:', child)
        if (calcDistance(last) > calcDistance(heapArr[child])) {
          heapArr[i] = heapArr[child];
        } else {
          break;
        }
      }
      heapArr[i] = last;
      heapArr.pop()
    }

    return result;
};

const points = [[6,10],[-3,3],[-2,5],[0,2]]
const k = 3;

const res =  kClosest(points, k);

console.log('res:',res);