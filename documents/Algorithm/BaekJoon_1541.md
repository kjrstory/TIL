# BaekJoon 1541 잃어버린 괄호


[문제 출처](https://www.acmicpc.net/problem/1541)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 2 해결일 : 2022-02-25
  * 문자열 관련 함수 substr, stoi에 대해 확실히 연습해야 함


- 풀이 코드 :
```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main(void){
	
	string str;
	cin >> str;
	
	vector <int> v; // +나 -가 몇번째 인덱스인지
	vector <int> a;    // 숫자를 기억하는 벡터
	vector <char> b; // +,-를 기억하는 벡터
	for (int i=0; i<str.size(); i++){
		if ( str[i]=='+' or str[i]=='-'){
			v.push_back(i);
		}
	}
	int start=0;
	int cnt=0;
	for (int i=0; i< v.size(); i++){
		
		if (i==0)  cnt=v[i];
		else cnt=v[i]-v[i-1]-1;
		string tmpstr=str.substr(start,start+cnt);
		int tmp=stoi(tmpstr);
		start=start+cnt+1 ;
		a.push_back(tmp);
		b.push_back(str[v[i]]);
	}
	string tmpstr=str.substr(start);
	int tmp=stoi(tmpstr);
	a.push_back(tmp);
	
	int sum=0;
	bool minuscheck=false; // -이면 true +면 false
	for (int i=0 ; i<a.size(); i++){
		if (i==0) sum+=a[i];
		else{
			if (minuscheck==false and b[i-1]=='+'){
				sum+=a[i];
			}
			else if (minuscheck==false and b[i-1]=='-'){
				sum-=a[i];
				minuscheck=true;
			}
			else if (minuscheck==true and b[i-1]=='+'){
				sum-=a[i];
			}
			else if (minuscheck==true and b[i-1]=='-'){
				sum-=a[i];
			}
		}
		//cout << i << "  " << a[i] << " " << sum << "\n";
	}
	
	cout << sum ;
	
	return 0;
}
```
