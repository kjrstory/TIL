# BaekJoon 1920 수 찾기

[문제 출처](https://www.acmicpc.net/problem/1920)  

* 풀이 방법 및 배워야할 것: 

   *  정렬, 이분 탐색을 STL로 구현

* 풀이 코드 :
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(void){
	int N;
	cin >> N;
	vector <long long> v;
	for (int i=0;i<N;i++){
		long long  tmp;
		cin >> tmp;
		v.push_back(tmp);
	}
	int M;
	cin >> M;
	long long a[M];
	for (int i=0;i<M;i++){
		cin >> a[i];
	}
	sort(v.begin(),v.end());
	for (int i=0;i<M;i++){
		if (binary_search(v.begin(), v.end(),a[i]) ) cout << "1\n";
		else cout << "0\n";
		
	}
	
}
```
