# BaekJoon 1269 대칭 차집합

[문제 출처](https://www.acmicpc.net/problem/1269)  

* 풀이 방법 및 배워야할 것: 

   * 차집합   
   * set_intersection 사용법 익혀둘것
   * [C++ STL - 벡터 끼리 연산 (합집합, 차집합, 교집합, 합병)](https://1coding.tistory.com/124)
   * Silver 4, 2022-12-30
* 풀이 코드 :
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main(void){

    ios::sync_with_stdio(false);
	cin.tie(NULL);
	
    int N, M;
	cin >> N >> M;
	vector<int> a;
	vector<int> b;
	vector<int> answer(N+M);  
	vector<int>::iterator iter;
    for(int i=0; i<N; i++){
		int tmp;
        cin >> tmp;
		a.push_back(tmp);
    }
    for(int i=0; i<M; i++){
		int tmp;
        cin >> tmp;
		b.push_back(tmp);
    }

    sort(a.begin(), a.end());
    sort(b.begin(), b.end()); 
	
	iter = set_symmetric_difference(a.begin(), a.end(), b.begin(), b.end(), answer.begin());
    answer.resize(iter - answer.begin());
	cout << answer.size() << "\n";
	return 0;
}
```
