# BaekJoon 14425 문자열 집합

[문제 출처](https://www.acmicpc.net/problem/14425)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 3 해결일 : 2022-12-29
  * 단순히 찾기만 하면 되므로 map대신 set를 써도 된다

- 풀이 코드 :
```cpp
#include <iostream>
#include <set>
using namespace std;

int main(void){
    
    ios::sync_with_stdio(false);
	cin.tie(0);
	cout.tie(0);
    
    int N, M;
	cin >> N >> M;
	
	set<string> a;

	string temp;
	for (int i=0;i<N;i++){
		cin >> temp;
		a.insert(temp);
	}
	int ans=0;
	for (int i=0;i<M;i++){
		cin >> temp;
		if (a.find(temp) != a.end()) {
            ans++;
        }
	}
	cout << ans;
  
    return 0;
}
```
