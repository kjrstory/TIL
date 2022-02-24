# BaekJoon 1931 회의실 배정


[문제 출처](https://www.acmicpc.net/problem/1931)  

* 풀이 방법 및 배워야할 것: 

  * 정렬함수 (compare)를 사용할 수 있어야 한다.
  * 테스트 예제에 힌트가 있었다. 예제를 보면 회의의 끝나는 시간순으로 입력이 되어있는데 이를 이용해야 한다.
  * 주의할점은 회의 시간이 0인 경우인데 회의 시간이 0인 회의와 회의 시간이 0이 아닌 회의가 끝나는 시간이 같을 경우
    (예 : 7 7, 4 7 )  
    두 번의 회의를 할 수 있어야 한다. 이렇게 할려면 끝나는 시간이 같을 경우 시작 시간으로 정렬이 되어 있어야 한다.
  
  * 난이도 Silver 2 해결일 : 2022-02-22


- 풀이 코드 :
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(pair<int, int> a,
			 pair<int, int> b) {
	if (a.second < b.second) {
		return true;
	}
	else if ( a.second==b.second){
		return a.first<b.first;
	}
	else{
		return false;
	}
}

int main(void){
	
	int N;
	cin >> N;
	vector <pair<int, int>> v;
	for(int i=0 ; i<N;i++){
		int tmp1,tmp2;
		cin >> tmp1 >> tmp2;
		v.push_back(make_pair(tmp1,tmp2));
	}
	
	sort(v.begin(),v.end(), compare);  // 끝나는 시간으로 정렬이 되어있다면...
	
	int cnt=0;
	int end=0;
	for (int i=0; i<v.size();i++){
		
		if (v[i].first < end) continue;
		cnt+= 1;
		end=v[i].second;
		//cout << i << " " << v[i].first << " " << v[i].second << " " << cnt << "\n";
		
	}
	cout << cnt;
	return 0;
}
```
