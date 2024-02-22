## BaekJoon 10971 외판원 순회 2

[문제 출처](https://www.acmicpc.net/problem/10971)  

### 풀이 방법 및 배워야할 것: 

   *  외판원 순회(Traveling Salesman problem (TSP)), `next_permutation`의 사용 방법  
   *  난이도: Silver 2
   *  푼 날짜 2024-02-22
     
### 풀이 코드 :

#### C++
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(){
	int N;
	int W[10][10]={};
	
	cin >> N;
	
	vector<int> v(N);
    for (int i = 0; i < N; i++) {
        v[i] = i; 
    }
	
	for (int i = 0; i < N; i++){
		for (int j = 0; j < N; j++){
			cin >> W[i][j];
		}
	}

	int answer= 1000000*10+1 ;
	while (next_permutation(v.begin(), v.end())) {
		int sum = 0 ;
		bool canTravel = true;
		
		for (int i = 0; i < N-1; i++){
			if (W[v[i]][v[i + 1]] == 0) { 
                canTravel = false;
                break;
            }
			sum += W[v[i]][v[i+1]];
		}
		
		if (canTravel && W[v[N - 1]][v[0]] != 0) { 
            sum += W[v[N - 1]][v[0]];
            answer = min(answer, sum);
        }
	}
	cout << answer;
	return 0;

}

```
