# BaekJoon 1149 RGB 거리

[문제 출처](https://www.acmicpc.net/problem/1149)  

* 풀이 방법 및 배워야할 것: 

  * Silver 1
  * 2023-01-04
  * R,G,B로 이루어진 조합, RGB,순서에 따라 비용이 다를때 비용합의 최솟값
  * 다이나믹 프로그래밍, Memorization 배열을 2차원으로 

- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int a[3][1001];
int d[3][1001];
int n;

int dp(int x, int y){

    if (y==1) {
		return d[x][1]=a[x][1];
    }

    if (d[x][y]!=0){
         return d[x][y];
    }
	if (x==0){
		if (dp(1,y-1)<dp(2,y-1)){
			return d[x][y]=d[1][y-1]+a[0][y];
		}
		else{
			return d[x][y]=d[2][y-1]+a[0][y];
		}
	}
	else if (x==1){
		if (dp(0,y-1)<dp(2,y-1)){
			return d[x][y]=d[0][y-1]+a[1][y];
		}
		else{
			return d[x][y]=d[2][y-1]+a[1][y];
		}
	}
	else {  // x==2
		if (dp(0,y-1)<dp(1,y-1)){
			return d[x][y]=d[0][y-1]+a[2][y];
		}
		else{
			return d[x][y]=d[1][y-1]+a[2][y];
		}
	}
}

int main(void){

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cin >> n;
	for (int i=1; i<=n; i++){
		for (int j=0; j<3; j++){
			cin >> a[j][i];
		}
	}

    dp(0,n);
 	dp(1,n);
	dp(2,n);

	int min=1000001;
	for (int i=0;i<3;i++){
		if (d[i][n]<min) {
			min=d[i][n];
		}
	}
	cout << min;
	return 0;
}
```
