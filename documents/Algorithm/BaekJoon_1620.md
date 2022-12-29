# BaekJoon 1620 나는야 포켓몬 마스터 이다솜

[문제 출처](https://www.acmicpc.net/problem/1620)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 3 해결일 : 2022-12-29
  * 자료 구조 map, unordered map 
    + [[C++][STL] map 사용법 정리 - 코딩젤리](https://life-with-coding.tistory.com/305)
    + insert, find , ->

- 풀이 코드 :
```cpp
#include <iostream>
#include <unordered_map>
using namespace std;

int main(void){

    ios::sync_with_stdio(false);
	cin.tie(NULL);
    cout.tie(NULL);
	
    int N, M;
	cin >> N >> M;
	unordered_map <string,int> a;    
	string b[N+1];
    for(int i=0; i<N; i++){
		string tmp;
        cin >> tmp;
		a.insert({tmp,i+1});
		b[i+1]=tmp;
    }

	for(int i=0; i<M; i++){
		string tmp;
        cin >> tmp;
		if (isdigit(tmp[0])) {
			int tmpint=stoi(tmp);
			cout << b[tmpint];  // tmp is number
		}
		else{
			cout << a.find(tmp)->second;  // tmp is name
		}
		cout << "\n";
    }
    
    return 0;
}
```
