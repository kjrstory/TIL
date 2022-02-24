# BaekJoon 11399 ATM


[문제 출처](https://www.acmicpc.net/problem/11399)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 3 해결일 : 2022-02-24

- 풀이 코드 :
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(void){
	
	int N;
	cin >> N;
	vector <int> v;
	for (int i=0; i<N ; i++){
		int tmp;
		cin >> tmp;
		v.push_back(tmp);
	}
	
	sort(v.begin(),v.end());
	
	int sum=0;
	for (int i=0; i<N; i++){
		sum+=v[i]*(N-i);
	}
	
	cout << sum;
	
	return 0;
}
```
