# BaekJoon 1436 영화감독 숌

[문제 출처](https://www.acmicpc.net/problem/1436)  

+ 풀이 방법 및 배워야할 것: 

  + 숫자를 문자열로 치환(to_string)하여 해결  

  + 난이도 : Silver 5
 
  + 해결 날짜 : 2022-02-13

* 풀이 코드 :
```cpp
#include <iostream>
#include <string>
using namespace std;

int main(void){
    int n;
	
	cin >> n;
	
	int i=0; 
	while(n>0){
		i++;
		string str=to_string(i);
		
		int countsix=0;
		for (int j=0; j<str.size();j++){
			if (str[j]=='6'){
				countsix++;
			}
			else {
				countsix=0;
			}
			if (countsix>=3) {
				n--;
				break;
			}
		}
	}
	
	cout << i << "\n";
	
	return 0;
}
