# BaekJoon 18111 마인크래프트


[문제 출처](https://www.acmicpc.net/problem/18111)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 2 해결일 : 2022-03-07
  * 블록의 위치는 아무 상관이 없으므로 Counting Sort를 해결하듯이 해결


- 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int main(void){
	int N,M,B;
	
	cin >> N >> M >> B;
	
	int a[N][M];
	
	for (int i=0;i<N;i++){
		for (int j=0;j<M;j++){
			cin >> a[i][j];
		}
	}
	
	int min=65000000;
	int max=-1;
	
	int d[257]={0,}; // 카운팅할수 있는 배열
	
	for (int i=0;i<N;i++){
		for (int j=0;j<M;j++){
			d[a[i][j]]++;
			if (a[i][j]<min) min=a[i][j];
			if (a[i][j]>max) max=a[i][j];
		}
	}
	
	int mintime=2*500*500*100;
	int heightmintime=-1;
	
	for (int i=min;i<max+1;i++){      
		int solvetime=0;
		int inventory=B;
		for (int j=256;j>-1;j--){    //  땅의 높이
			if(d[j]==0) continue;
			if(j - i > 0) {      
				inventory=inventory+d[j]*(j-i);
				solvetime=solvetime+2*d[j]*(j-i);
			}
			if(j - i < 0) {      
				inventory=inventory-d[j]*(i-j);
				solvetime=solvetime+d[j]*(i-j);
			}
			
		}
		//cout << i << " time is " << solvetime << " inventory is  " <<  inventory << "\n";
		if ( solvetime<=mintime and i>heightmintime and inventory>=0){
			mintime=solvetime;
			heightmintime=i;
		}
	}
	
	cout << mintime << " " << heightmintime << "\n";
	return 0;
}
```
