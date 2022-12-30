# BaekJoon 11478 서로 다른 부분 문자열의 개수

[문제 출처](https://www.acmicpc.net/problem/11478)  

* 풀이 방법 및 배워야할 것: 

   *  Silver3, 2022-12-30
   *  set 및 substr 사용법
* 풀이 코드 :
```cpp
#include <iostream>
#include <set>
using namespace std;

int main(void){

    ios::sync_with_stdio(false);
	cin.tie(NULL);
	
    string S;
	cin >> S;
	set <string> setstr;
    for(int i=0; i<S.size(); i++){
		for (int j=1;j<S.size()-i+1;j++){
			setstr.insert(S.substr(i,j));
		}
    }
	cout << setstr.size() ;
	return 0;
}
```
