# BaekJoon 10844 쉬운 계단수

[문제 출처](https://www.acmicpc.net/problem/10844)  

* 풀이 방법 및 배워야할 것: 

  *  DP 다이나믹 프로그맹으로 해결  
  *  Memoization 배열을 2차원 배열로 만들어서 해결
  *  모듈러 연산에 대해 정리 필요  
    ex : (a + b) mod n = ((a mod n) + (b mod n)) mod n  

* 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

long long d[101][10];

long long dp(int x, int y){
    if (x==1) {
		return d[x][y]=1;		
    }
    if (d[x][y] !=0){
         return d[x][y]; 
    }
	if (y==0){
		return d[x][y]=(dp(x-1,1))%1000000000;
	}
	if (y==9){
		return d[x][y]=(dp(x-1,8))%1000000000;
	}
	
	return d[x][y]=((dp(x-1,y+1)+dp(x-1,y-1)))%1000000000;
		 
}

int main(void){

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int N;
    cin >> N;
	for (int i=0; i<=9; i++){
		dp(N,i);
	}
	long long tmp=0;
	
	for (int i=1; i<=9; i++){   // 0을 제외하고 계산
		tmp = tmp+ d[N][i];
		//cout << i << " " << d[N][i] << "\n";
	}
	
    cout << tmp << "\n";
	cout << tmp%1000000000 << "\n";

	return 0;
}
```
