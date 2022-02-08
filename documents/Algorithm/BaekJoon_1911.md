# BaekJoon 1911 트리순회

[문제 출처](https://www.acmicpc.net/problem/1911)  

- 풀이 방법 및 배워야할 것: 

  이진 트리 순회 기법 기본  
  동빈나 실전 알고리즘 강좌([블로그](https://blog.naver.com/ndb796/221233560789), [유튜브](https://youtu.be/z_tzHoPfllA) ) 를 기본으로 구현  
  구조체 및 이진트리 순회 기법 익혀야 함  
- 풀이 코드 :
```cpp
#include <iostream>
#include <tuple>
#include <vector>
#include <algorithm>

using namespace std;
	
typedef struct node *treePointer;
typedef struct node{
	char data;
	treePointer leftChild, rightChild;
	
} node;

void preorder (treePointer ptr){
	if(ptr) {
		cout << ptr->data ;
		preorder(ptr->leftChild);
		preorder(ptr->rightChild);
	}
}

void inorder (treePointer ptr){
	if(ptr) {
		inorder(ptr->leftChild);
		cout << ptr->data ;
	    inorder(ptr->rightChild);
	}
}

void postorder (treePointer ptr){
	if(ptr) {
		postorder(ptr->leftChild);
		postorder(ptr->rightChild);
		cout << ptr->data ;
	}
}

bool compare(tuple <char , char, char> a, tuple <char, char, char > b) {
	return get<0>(a) < get<0>(b);	//내림차순
}

int main(void){
	
	int N;
	cin >> N;
	
	node nodes[N+1];
	
	char tmp1, tmp2, tmp3;
	vector<tuple<char, char, char>> v;
	
	for (int i = 0; i< N ; i++){
		char ch(i+64);
		nodes[i].data = ch;  // 알파벳변환
		nodes[i].leftChild =NULL;
		nodes[i].rightChild =NULL;
	}
	
	for (int i = 0; i< N ; i++){
		
		cin >> tmp1 >> tmp2 >> tmp3;
		v.push_back(make_tuple(tmp1,tmp2,tmp3));
		
	}
	
	sort(v.begin(),v.end(),compare);
	
	for (int i = 0; i< v.size() ; i++){
		
	//	cin >> tmp1 >> tmp2 >> tmp3;
		tmp1= get<0>(v[i]);
		tmp2= get<1>(v[i]);
		tmp3= get<2>(v[i]);
		//cout << i << " " << tmp1 << " " << tmp2  << " " << tmp3 << "\n";
		nodes[i].data = tmp1; 
		
		if (tmp2!='.'){
			int tint=static_cast<int>(tmp2)-64-1 ;
			nodes[i].leftChild = &nodes[tint];
		}
		if (tmp3!='.'){
			int tint=static_cast<int>(tmp3)-64-1;
			nodes[i].rightChild = &nodes[tint];
		}
	}
	
	preorder(&nodes[0]);
	cout << "\n" ;
	inorder(&nodes[0]);
	cout << "\n" ;
	postorder(&nodes[0]);
	cout << "\n" ;
	return 0;
}
```
