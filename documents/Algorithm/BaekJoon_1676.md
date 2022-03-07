# BaekJoon 1676 팩토리얼 0의 개수


[문제 출처](https://www.acmicpc.net/problem/1676)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 4 해결일 : 2022-03-06
  * 풀이방법을 알고 있다면 10줄안에 해결 할 수 있음
  * 처음에 다이나믹 프로그래밍으로 해결하려했으나 해결못함


- 풀이 코드 :
```cpp
#include <iostream>
using namespace std;
int main(void){
	
	int N;
	cin >> N;
	cout << N/5+N/25+N/125 << "\n";
}
```
