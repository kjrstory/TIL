# BaekJoon 24060 병합정렬

[문제 출처](https://www.acmicpc.net/problem/24060)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 4 해결일 : 2022-12-29
  * 병합 정렬
    + [[알고리즘] 병합 정렬 (MERGE SORT) 기본 개념과 코드 구현, 설명](https://reakwon.tistory.com/38)
    + [병합정렬 안경잡이 개발자](https://blog.naver.com/ndb796)
    + [[알고리즘] 합병 정렬(merge sort)이란](https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html)
    + 분할 정복(divide and conquer) 알고리즘중의 하나
    + 시간복잡도 O(nlog2n)

- 풀이 코드 :
```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int sorted[500001];
int K;
int temp=0;
int number=-1;
void merge(int a[], int start, int mid, int end){
    int i = start;
    int j = mid+1;
    int k = start;

    while(i <= mid && j <= end)    {
        if(a[i] <= a[j]){
            sorted[k] = a[i];
            i++;
        }else{
            sorted[k] = a[j];
            j++;
        }
        k++;
    }
    if(i > mid){
        for(int t = j; t<=end; t++){
            sorted[k] = a[t];
            k++;
        }
    }else{
        for(int t = i; t<=mid; t++){
            sorted[k] = a[t];
            k++;
        }
    }

    // 정렬된 배열을 삽입
    for(int t=start; t<=end; t++){
        a[t] = sorted[t];
//		cout << sorted[t] ;
		temp++;
		if (temp==K){
			number=sorted[t];
		}
    }
}

void mergeSort(int a[], int start, int end){
    if(start < end){
        int mid = (start+end)/2;
        mergeSort(a, start, mid); // 좌측 정렬
        mergeSort(a, mid+1, end); // 우측 정렬
        merge(a, start, mid, end);
    }
}

int main(void){

	int N;

	cin >> N >> K;
	int a[N];
    for(int i=0; i<N; i++){
        cin >> a[i];
    }

    mergeSort(a, 0, N-1);
	//cout << "\n";
    //for(int i=0; i<N; i++){
    //   cout << a[i];
    //}
	//cout << "\n";
	cout << number;

    return 0;
}
```
