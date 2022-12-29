# BaekJoon 2563 색종이

[문제 출처](https://www.acmicpc.net/problem/2563)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 5 해결일 : 2022-12-29


- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int main(){
	int N;
	cin >> N;
	int a,b;
	int c[100][100]={0,};
	for (int t=0;t<N;t++){
		cin >> a >> b;
		
		for (int i=0;i<10;i++){
			for (int j=0;j<10;j++){
				c[a+i-1][b+j-1]=1;
			}
		}
	}
	int answer=0;
	for (int i=0;i<100;i++){
		for (int j=0;j<100;j++){
			//cout << c[i][j];
			if (c[i][j]==1){
				answer+=1;
			}
		}
		//cout << "\n";
	}
	cout << answer;
	return 0;
	
}
```
