# BaekJoon 14888 연산자 끼워넣기

[문제 출처](https://www.acmicpc.net/problem/14888)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 1 해결일 : 2022-02-19
  * DFS로 모든 조합을 계산


- 풀이 코드 :
```cpp
#include <iostream>
#include <algorithm>

using namespace std;

int N;
int a[11]={0,};   
int count_operator[4]={0,}; //덧셈(+)의 개수, 뺄셈(-)의 개수, 곱셈(×)의 개수, 나눗셈(÷)의 개수
int count_now[4]={0,}; //현재 덧셈(+)의 개수, 뺄셈(-)의 개수, 곱셈(×)의 개수, 나눗셈(÷)의 개수
bool visit[11]={0,};   // 필요 없을듯한데
int history[11]={0,}; 
int summin =  1000000001;  // 10억 일
int summax = -1000000001;  // -10억 일
char oper[4]={'+','-','x','/'};

int getResults(){
	
	int tmp=a[0];
	for(int i = 0; i < N-1; i++){
		if (history[i]==0) {  //덧셈
			tmp = tmp+a[i+1];
		}
		else if (history[i]==1) {  //뺄셈
			tmp = tmp-a[i+1];
		}
		else if (history[i]==2) {  //곱셈
			tmp = tmp*a[i+1];
		}
		else if (history[i]==3) {  //나눗셈
			tmp = tmp/a[i+1];
		}
        
	}
	
	return tmp;
}


void dfs(int cnt)
{
	if (cnt==N-1){
		int number=0;
		if (number<summin) summin=number;
		if (number>summax) summax=number;
		
        return;
	}
	
	for (int i=0; i<4; i++){
		if (visit[i]) continue;
		if (count_now[i]+1>count_operator[i]) continue;	
			
		else {
			//visit[i]=true;
			history[cnt]= i;
			count_now[i]++;
			dfs(cnt+1);
			count_now[i]--;
			//visit[i]=false;  // visit 정보 원상 복구
		}
	}	
}

int main() {
	
	cin >> N; // 수의 개수
	
	for (int i=0; i<N;i++){
		cin >> a[i];
	}
	
	for (int i=0; i<4;i++){
		cin >> count_operator[i];
	}
	
	dfs(0);
	
	cout << summax << "\n";
	cout << summin << "\n";
	
	return 0;
	
}
```
