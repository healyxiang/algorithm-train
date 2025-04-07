var sortArray = function(nums) {
    function merge(arr,temp,left,right,mid) {
        const size = arr.length;
        // const temp = Array.from({length: size})
        const rightStart  = mid + 1;
        let [i, j, k] = [left,rightStart,left]
        while (i<rightStart && j <= right)  {
            if(arr[i] <= arr[j])  {
                temp[k++] = arr[i]
                i++;
            } else  {
                temp[k++]  = arr[j];
                j++;
            }
        }
        while (i < rightStart) {
            temp[k++] = arr[i]
            i++;
        } 
        while (j <= right) {
            temp[k++] = arr[j]
            j++;
        }
        for (let l = left; l <= right; l++) {
            arr[l] = temp[l]
        }

    }
    function mergeSort(arr,tempArr,left,right) {
        const center = Math.floor((left + right)/2)
        if (right <= left) {
            return;
        }
        mergeSort(arr,tempArr,left,center)
        mergeSort(arr,tempArr,center+1,right)
        merge(arr,tempArr,left,right,center)
    }
    const numsLen = nums.length
    if (numsLen <= 1) {
        return nums;
    }
    const temp = Array.from({length: numsLen})
    mergeSort(nums,temp,0,numsLen-1)
    return temp;
};

const arr = [-2,3,-5];

const sorted = sortArray(arr)

console.log('sorted:',  sorted)