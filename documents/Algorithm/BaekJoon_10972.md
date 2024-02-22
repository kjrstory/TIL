## BaekJoon 10972 다음 순열

[문제 출처](https://www.acmicpc.net/problem/10972)  

### 풀이 방법 및 배워야할 것: 

   *  `next_permutation`의 사용방법 
   *  난이도: Silver 3
   *  푼 날짜 2024-02-19
     
### 풀이 코드 :

#### C++
```cpp
#include <iostream>
#include <algorithm>

using namespace std;

int n;
int arr[10000];

int main(void){
	int n;
	cin >> n;
	for (int i=0; i<n;i++){
		cin >> arr[i];
	}
	
	if(!next_permutation(arr,arr+n)){
		cout << -1;
	}
	else {
		for (int i=0;i<n;i++){
			cout << arr[i] << " ";
		}
	}
}

```
