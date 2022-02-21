# BaekJoon 1037 약수

[문제 출처](https://www.acmicpc.net/problem/1037)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 5 해결일 : 2022-02-18
  * 가장 작은 약수 * 가장 큰 약수는 원래 수  (약수 중 1과 본인 자신은 제외) 

- 풀이 코드 :
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main(void){
	
	int N;
	int tmp;
	cin >> N;
	vector <int> v;
	for (int i=0;i<N;i++){
		cin >> tmp;
		v.push_back(tmp);
	}
	sort(v.begin(), v.end());
	cout << v[0]* v[v.size()-1] << "\n";
	return 0;
}
```
