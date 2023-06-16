# BaekJoon 2579 계단 오르기

[문제 출처](https://www.acmicpc.net/problem/2579)

* 풀이 방법 및 배워야할 것: 

  * Silver 3
  * 2023-01-04
  * 계단오르기, 계단별 점수, 최대 점수가 되게
  * 다이나믹 프로그래밍

- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int a[301];
int d[3][301];
int n;

int dp(int x, int y){
	
    if (d[x][y]!=0){
         return d[x][y]; 
    }
	if (x==0){
		return d[0][y]=d[2][y-1];
	}
	else if (x==1){
		if (dp(1,y-2)>dp(2,y-2)){
			return d[1][y]=d[1][y-2]+a[y];
		}
		else{
			return d[1][y]=d[2][y-2]+a[y];
		}
	}
	else {  // x==2
		return d[2][y]=dp(1, y-1)+a[y];
	}
}

int main(void){

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cin >> n;
	for (int i=1; i<=n; i++){
		cin >> a[i];	
	}
	
	if (n==1){
		cout << a[n];
	}
	else if (n==2){
		cout << a[1]+a[2];
	}
	else {
		d[0][1]=0;
		d[1][1]=a[1];
		d[2][1]=-1;
		d[0][2]=a[1];
		d[1][2]=a[2];
		d[2][2]=a[1]+a[2];

		dp(1,n);
		dp(2,n);

		int max=0;
		for (int i=1;i<3;i++){
			if (d[i][n]>max) {
				max=d[i][n];
			}
		}
		cout << max;
	}
	return 0;
}
```
