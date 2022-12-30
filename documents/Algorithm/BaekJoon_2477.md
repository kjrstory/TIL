# BaekJoon 2477 참외밭

[문제 출처](https://www.acmicpc.net/problem/2477)  

* 풀이 방법 및 배워야할 것: 

   * 규칙: 큰 사각형에서 작은사각형의 넒이를 빼면 된다. 큰 사각형은 가장 큰 세로와 가장 큰 가로의 곱, 작은 사각형은 가장 큰 세로와 가로를 지나고 2번째, 3번째를 곱하면 된다.
   * Sliver 3, 2022-12-30
* 풀이 코드 :
```cpp
#include <iostream>
using namespace std;

int main(void){

    ios::sync_with_stdio(false);
	cin.tie(NULL);
	
    int K;
	int a[6];
	int b[6];
	int tmp1, tmp2;
	cin >> K;
	for(int i=0; i<6; i++){
		cin >> tmp1 >> tmp2;
		a[i]=tmp1;
		b[i]=tmp2;
    }
	int maxwidth=0;
	int maxlength=0;
	int maxwidth_index, maxlength_index;
	
	for(int i=0; i<6; i++){
		if ( a[i]==3 or a[i]==4){  // length
			if (b[i]>maxlength){
				maxlength=b[i];
				maxlength_index=i;
			}
		}
		else{ // width 1 or 2
			if (b[i]>maxwidth){
				maxwidth=b[i];
				maxwidth_index=i;
			}
		}
    }
	//cout << maxlength << " " << maxwidth;
	
	int max_index;
	if (maxlength_index==5 and maxwidth_index==0) {
		max_index=0;
	}
	else if (maxwidth_index==5 and maxlength_index==0) {
		max_index=0;
	}
	else if (maxlength_index>maxwidth_index) {
		max_index=maxlength_index;
	}
	else{
		max_index=maxwidth_index;
	}
	int smallarea;
	
	if (max_index==3){
		smallarea=b[5]*b[0];
	}
	else if (max_index==4){
		smallarea=b[0]*b[1];
	}
	else if (max_index==5){
		smallarea=b[1]*b[2];
	}
	else {
		smallarea=b[max_index+2]*b[max_index+3];
	}
	cout << (maxlength*maxwidth - smallarea)*K;
	
	return 0;
}
```
