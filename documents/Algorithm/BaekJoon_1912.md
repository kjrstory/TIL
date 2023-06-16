# BaekJoon 1912 연속합

[문제 출처](https://www.acmicpc.net/problem/1912)  

* 풀이 방법 및 배워야할 것: 

  * Silver2 
  * 2023-01-03
  * n개의 정수로 이루어진 수열 중 최대연속합
  * 다이나믹 프로그래밍, 뒤에서부터 계산 

- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;
int d[100001]={0};
int ini[100001];
int n;

int dp(int i){

	if (i==1) {
		return d[i]=ini[i];
	}

	if (d[i]!=0){
		return d[i];
	}

	if (dp(i-1)>0) {
		return d[i]=d[i-1]+ini[i];
	}
	else{
		return d[i]=ini[i];
	}
}

int main(void){

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
	cin >> n;
	for (int i=0;i<n;i++){
		int tmp;
		cin >> tmp;
		ini[i+1]=tmp;
	}

	int max=-1000000001;

	for (int i=n; i>0; i--){
		d[i]=dp(i);
	}

	for (int i=1;i<=n;i++){
	//	cout << d[i] << " ";
		if ( d[i] > max){
			max=d[i];
		}
	}
    cout << max ;
    return 0;
}
```
