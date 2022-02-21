# BaekJoon 14889 스타트와 링크


[문제 출처](https://www.acmicpc.net/problem/14889)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 2 해결일 : 2022-02-21
  * DFS이며 모든 Case를 다 계산하지 않고 중복되는 조합을 제외하면 1/2만 계산할 수 있다.


- 풀이 코드 :
```cpp
#include <iostream>
#include <vector>
using namespace std;

int N;
int visit[21];
int s[21][21];
int history[11];
int count_team=0;
vector <int> v[200000];
void dfs(int num, int cnt)
{
	if (cnt==N/2){
		for (int i=0 ; i <N/2; i++){
			v[count_team].push_back(history[i]);
		}
		count_team++;
	}
	for (int i=num; i<=N; i++){
		if (visit[i]) continue;
		else {
			visit[i]=true;
			history[cnt]= i;
			dfs(i, cnt+1);
			visit[i]=false;  
		}
	}
}

int getSum(int now){
	
	int sum_start=0;
	
	for (int i=0 ; i <N/2; i++){
		for (int j=0 ; j <N/2; j++){
			int x=v[now][i];
			int y=v[now][j];
			sum_start+=s[x][y];
		}
	}
	
	return sum_start;
}
int main(void){
	
	cin >> N;
	
	for (int i=1;i<=N;i++){
		for (int j=1;j<=N;j++){
			cin >> s[i][j];
		}
	}
	
	dfs(1,0);
    
	int min=1000*20000;
	int result;
	for (int i=0;i<count_team/2;i++){
		
		int sum_start=getSum(i);
		int sum_link=getSum(count_team-i-1);
		result=abs(sum_start-sum_link);
		if (result<min) min=result; 
	}
    cout << min ;
	
	return 0;
}
```
