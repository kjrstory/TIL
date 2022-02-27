# BaekJoon 10845 큐 


[문제 출처](https://www.acmicpc.net/problem/10845)  

* 풀이 방법 및 배워야할 것: 

  * 난이도 Silver 4 해결일 : 2022-02-26
  * 자료구조 큐를 STL를 이용하여 구현


- 풀이 코드 :
```cpp
#include <iostream>
#include <queue>
#include <string>
using namespace std;

int main (void){
	int N;
	cin >> N;
	queue <int> s;
	
	string word;
	int temp;
	for (int i=0;i<N+1;i++){
		getline( cin , word);

		if (word.substr(0,4)=="push"){
		    string ss= word.substr(5,-1);
		    int aa = atoi(ss.c_str());
		    s.push(aa);
		}
		else if (word=="size"){
		    cout << s.size() << "\n";
		}
		else if (word=="empty"){
			if (s.empty()) {
				cout << "1\n";
			}
			else{
				cout << "0\n";
			}
		}
		else if (word=="pop"){
			if (s.empty()){
				cout << "-1\n";
			}
			else{
				cout << s.front() << "\n"; 
		    	s.pop();
			}
		}
		else if (word=="front"){
			if (s.empty()){
				cout << "-1\n";
			}
			else{
				cout << s.front() << "\n"; 
		    	//s.pop();
			}
		}
		else if (word=="back"){
			if (s.empty()){
				cout << "-1\n";
			}
			else{
				cout << s.back() << "\n"; 
		    	//s.pop();
			}
		}
	}
	
}
```
