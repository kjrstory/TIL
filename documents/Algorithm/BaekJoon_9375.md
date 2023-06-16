# BaekJoon 9375 패션왕 신해빈

[문제 출처](https://www.acmicpc.net/problem/9375)

* 풀이 방법 및 배워야할 것: 

  * Silver 3
  * 2023-01-01
  * C++ STL, map의 사용법 

- 풀이 코드 :
```cpp
#include <iostream>
#include <map>

using namespace std;

int main(void){
	
	int t, n;
	string tmp1,tmp2;
	
	cin >> t;
	for (int i=0; i<t ; i++){
		cin >> n;
		multimap <string, string> v1;
        map <string, string> v2;
		for (int j=0;j<n;j++){
			cin >> tmp1 >> tmp2;
			v1.insert(make_pair(tmp2,tmp1));  // Caution! tmp2 is key
			v2.insert(make_pair(tmp2,tmp1));  // Caution! tmp2 is key
		}	
		
		map<string, string>::iterator iter;
        int ans=1;
		for(iter = v2.begin(); iter != v2.end(); iter++){
			string key_tmp=iter->first;
			ans= ans*(v1.count(key_tmp)+1);
		}

		cout << ans-1 <<"\n";
	}

    return 0;
}
```
