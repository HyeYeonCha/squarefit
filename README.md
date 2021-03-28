## Squarefit 실무 과제

### API 문서

 #### 1. 게시물 저장
 - URL: /api/create 
 - Method: post 
 - Data Params
   -  object:
       ```
       { 
           "title": "", 
           "userId": "", 
           "contents": ""
        }
        ``` 
            
  - Success Response: 
    - code:200
      ```
       {
           isCreated: true, newPost
       }    
      ```
          
   - Error Response
     - code:500 
       ```
       { 
           "isCreated": false
       }
       ```
  
   #### 2. 게시글 수정
 - URL: /api/update 
 - Method: patch 
 - Data Params
   -  object:
       ```
       { 
           "postId": "", 
           "userId": "",
           "title": "",
           "contents": ""
        }
        ``` 
            
  - Success Response: 
    - code:200
      ```
       {
          isUpdate: ture, updatePost
       }    
      ```
          
   - Error Response
     - code:500 
       ```
       { 
           "isUpdate": false
       }
       ```
 
 #### 3. 게시글 가져오기
 - URL: api/read 
 - Method: get 
 - Data Params
  - none
 
 - URL Params
  - Required: postId=[ObjectId]
            
  - Success Response: 
    - code:200
      ```
         {
            getPost: true, post
         }
      ```
          
   - Error Response
     - code:500 
       ```
       { 
           "getPost": false
       }
       ```
       
  #### 4. 게시글 삭제
 - URL: /api/delete 
 - Method: delete
 - Data Params
   -  object:
       ```
       { 
           "userId": "",
           "postId": ""
        }
        ``` 
            
  - Success Response: 
    - code:200
      ```
        {
           "isDeleted": true
        }
      ```
          
  - Error Response
     - code:500 
       ```
       { 
           "isDeleted": false
       }
       ```
       
  #### 5. 유저 추가
 - URL: /api/adduser 
 - Method: post
 - Data Params
   -  object:
       ```
       { 
           "email": "",
           "nickname": ""
        }
        ``` 
            
  - Success Response: 
    - code:200
      ```
        {
            "addUser": true, newUser
        }
      ```
      
          
  - Error Response
     - code:500 
       ```
       { 
           "addUser": false
       }
       ```
       
