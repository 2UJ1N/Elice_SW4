//[level 1] 행렬의 덧셈 12950
//https://school.programmers.co.kr/learn/courses/30/lessons/12950

//결과 
//정확성: 100.0
//합계: 100.0 / 100.0

function solution(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[0].length; j++)
            arr1[i][j] += arr2[i][j]
    }
    return arr1;
}