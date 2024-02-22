## BaekJoon 10819 차이를 최대로

[문제 출처](https://www.acmicpc.net/problem/10819)  

### 풀이 방법 및 배워야할 것: 

   *  `next_permutation`의 사용방법 
   *  난이도: Silver 2
   *  푼 날짜 2024-02-19
     
### 풀이 코드 :

#### C++
```cpp
#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

int main(){
	
	int N;
	cin >> N;
	int tmp;
	vector <int> v;
	for (int i=0;i<N;i++){
		cin >> tmp;
		v.push_back(tmp);
	}
	sort(v.begin(), v.end());
	
	int sum;
	int answer=0;
	while (next_permutation(v.begin(), v.end())) {
		sum = 0 ;
		for (int i=0;i<N-1;i++){
			sum += abs(v[i]-v[i+1]);
		}
		answer = max(answer, sum);
	}
	
	cout << answer;
	return 0;
}

```
