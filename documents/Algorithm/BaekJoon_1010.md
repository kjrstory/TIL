# BaekJoon 1010 다리놓기 


[문제 출처](https://www.acmicpc.net/problem/1010)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 5 해결일 : 2022-03-03
  * 다이나믹 프로그래밍으로 해결했는제 수학의 조합을 이용하여 풀 수도 있는것 같다.


- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;
long long d[31][31];

long long dp(int a, int b){
	if (a==0){
		return 0;
	}
	if (a==1){
		return b;
	}
	if (a==b){
		return 1;
	}
	
	if (d[a][b]!=0){
		return d[a][b];
	}
	//cout << a << " " << b << "\n";
	for (int i=b-1; i>=a-1;i--){
		//cout << "dp = " << a-1 << " " << i << "\n";
		d[a][b]+=dp(a-1,i);
	}
	return d[a][b];
	//return d[a][b]=dp(a-1,b-1)+dp(a-1,b-2);
	
}
int main(void){
	
	int N;
	cin >> N;
	for( int i=0;i<N;i++){
		int x , y;
		cin >> x >> y;
		cout << dp(x,y) << "\n";
	}
}
```
