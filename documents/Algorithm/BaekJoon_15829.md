# BaekJoon 15829 Hashing


[문제 출처](https://www.acmicpc.net/problem/15829)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Bronze 2 해결일 : 2022-02-27
  * 해슁에 대해서 풀어보는 기본문제
  * 큰 수의 표현 방법, 나머지를 이용한 연산 


- 풀이 코드 :
```cpp
#include <iostream>
#include <cmath>
using namespace std;

int main(void){
	
	int N;
	cin >> N;
	string str;
	cin >> str;
	
	long long sum=0;
	long long M= 1234567891;
	long long rn=1;
	for (int i=0; i<str.size(); i++){
		long long tmp=str[i]-96;
		tmp = tmp*rn ;
		sum = (sum+tmp)%M;
		rn = (31 * rn) % M;
	}
	
	cout << sum ;
	
	return 0;
}
```
