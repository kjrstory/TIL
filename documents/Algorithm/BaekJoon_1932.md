# BaekJoon 1932 정수 삼각형

[문제 출처](https://www.acmicpc.net/problem/1932)  

+ 풀이 방법 및 배워야할 것: 

  +  DP 다이나믹 프로그맹으로 해결  
  +  Memoization 배열을 2차원 배열로 만들어서 해결

* 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int a[501][501];
long long d[501][501];
int n;

long long dp(int x, int y){
	
    if (x==1) {
		return d[1][1]=a[1][1];		
    }
    if (d[x][y] !=0){
         return d[x][y]; 
    }
	if (y==1){
		return d[x][y]=dp(x-1,1)+a[x][y];
	}
	if (y==x){
		return d[x][y]=dp(x-1,y-1)+a[x][y];
	}
	
	if (dp(x-1,y-1) > dp(x-1,y) ){
		return d[x][y]= dp(x-1,y-1)+a[x][y];
	}
	else{
		return d[x][y]= dp(x-1,y)+a[x][y];
	}
	
}

int main(void){

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cin >> n;
	for (int i=1; i<=n; i++){
		for (int j=1; j<=i; j++){
			cin >> a[i][j];
		}
	}
	
	for (int i=1; i<=n; i++){
		dp(n,i);
	}
	
	long long max=0;
	
	for (int i=1; i<=n; i++){  
		//cout << d[n][i] << "\n";
		if ( d[n][i] > max){
			
			max=d[n][i];	
		}
	}
	
    cout << max << "\n";
	
	return 0;
}
```
